import React, { useEffect, useState } from 'react';
import { iNavigation } from 'types/common';
import Containers from 'containers/index';
import GoogleMap from 'components/GoogleMap';
import styles from 'assets/styles/driverOrderMapStyles';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import Loader from 'components/Loader';
import { ILocation, IPoint, TSE, TSEWAYPOINT } from 'types/orders';
import service from 'services/instancesService';
import OrderMapSheet from 'screens/DriverOrderMap/components/OrderMapSheet';
import Routes from 'app-enums/routes';
import { getDistance } from 'geolib';
import moment from 'moment/moment';
import { calculateRelativeTime } from 'utils/instance';
import { IGeoLocation } from 'services/hooks/useGeolocation';
import { Box, VStack } from '@react-native-material/core';
import { TimeAndDistance } from 'react-native-navigation-sdk/components/navigation/types';
import { Location } from 'react-native-navigation-sdk/components/shared/types';
import { Alert, BackHandler, Platform, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

interface iState {
    loading: boolean;
    statusLoading: boolean;
    selected: any;
    popup: boolean;
    popupType: 'start' | 'finish';
    location?: ILocation;
}

const initialState: iState = {
  loading: false,
  statusLoading: false,
  selected: null,
  popup: false,
  popupType: 'start',
};

interface ITripData {   original: any;   stops: any;   destination: any; }

type IDriverOrderMapProps = iNavigation;

export default function DriverOrderMap({ navigation }: IDriverOrderMapProps) {
  const { details } = useSelector((state: RootState) => state.orders, shallowEqual);
  const { t } = useTranslation();
  const [showArrivedButton, setShowArrivedButton] = useState(false);
  const [isOpenedFinishModal, setIsOpenedFinishModal] = useState(false);
  const [savedWaypoints, setSavedWaypoints] = useState<string[]>([]);
  const [isRunDriving, setIsRunDriving] = useState(true);
  const [customerPrice, setCustomerPrice]  = useState<string | number | null>(null);
  const [location, setLocation] = useState<any>(null);
  const [finished, setFinished] = useState<any>({ hours: null, isFinished: false });
  const [state, setState] = React.useReducer(
    (prevState: iState, newState: Partial<iState>) => ({ ...prevState, ...newState }),
    initialState,
  );
  const started = React.useRef<boolean>(false);

  const navigateTo = (name: string): void => {
    navigation.navigate(name);
  };

  const finishOrder = () => {
    if (isOpenedFinishModal || details?.status === TSE.done || details === null) {
      return;
    }

    setIsOpenedFinishModal(true);
  };

  // const finishStatus = (detailsTravel: any) => {

  //   if (detailsTravel?.id) {
  //     setIsRunDriving(false);
  //     service.updateInstanceStatus(setState, { id: detailsTravel.id, status: TSE.done });
  //     setIsOpenedFinishModal(false);
  //   }
  // };
  useEffect(() => {
    const backAction = () => {
      if(details) {
     //   navigation.navigate(Routes.driverHome);

        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  React.useEffect(() => {
    if (details?.status === TSE.done) {
   //   setIsRunDriving(false);
   //   navigation.navigate(Routes.driverTravels);
      return;
    }

    if(details){
      const formattedDate = moment(details.travelDate).format('YYYY-MM-DD');
      const time = moment(details.startTime, 'HH:mm').format('HH:mm');
      const combinedDateTime = moment(`${formattedDate} ${time}`, 'YYYY-MM-DD HH:mm').toDate();
      // @ts-ignore
      const finishedData = { hours: finished.hours = calculateRelativeTime(combinedDateTime).inHours, isFinished: details.status === TSE.done, isCanceled: details.status == TSE.canceled };

      setFinished(finishedData);
    }


  }, [details, started]);

  const handleChangeNavigation = (destinationInfo?: TimeAndDistance, newLocation?: Location) => {

    if(newLocation && newLocation.lat && newLocation.lng){
      setLocation({ latitude: newLocation.lat, longitude: newLocation.lng });
    }
  };

  useEffect(() => {
    if (details?.status === TSE.done) {
      return;
    }
    // finishOrder();

    if(location){
      if(details?.tripData?.original){
        checkArrivedButton(location);
      }
      if(details?.tripData){
        waypointsTrackingStatus(details?.tripData, location);
      }
      /*if(details){
        console.log(JSON.stringify(details.points, null, 2));
      }*/

    }

    if (state && location && location.latitude && location.latitude  && details && details.points.length > 0 && details.status === TSE.started) {
      const lastPosition = details.points[details.points.length - 1];
      const distance = getDistance(
        { latitude: location.latitude, longitude: location.longitude },
        { latitude: lastPosition.latitude, longitude: lastPosition.longitude }
      );

      const proximityThreshold = 100;
      const countPoints = details.points.length - 2;
      let donePoints = 0;
      details.points.forEach((e: any) => {
        if(e.status === TSEWAYPOINT.Done){
          donePoints += 1;
        }
      });

      if (distance <= proximityThreshold && (countPoints === donePoints ||  countPoints === savedWaypoints.length)) {
        finishOrder();
      }
    }

  }, [location, details]);

  const checkArrivedButton = (locationData: IGeoLocation) => {
    if(!locationData){
      return;
    }
    const originLocationCords = details?.tripData?.original?.location;
    let distance = null;

    if(originLocationCords?.lat && originLocationCords?.lng &&
    locationData?.latitude && locationData?.longitude){
      distance =
        getDistance(
          { latitude: locationData?.latitude, longitude: locationData?.longitude },
          { latitude: originLocationCords?.lat, longitude: originLocationCords?.lng }
        );
    }

    const proximityThreshold = 100;

    const checkDistance = (distance && distance <= proximityThreshold);

    if((checkDistance || checkDistance === 0) && details?.status === TSE.goingToStart){
      setShowArrivedButton(true);
    }
  };

  const showPassengerDetails = (id: string) => {

    if(details) {
      const findPassengerDetails = details.passengers.find((e:any) => e.id === id);
      setState({ selected: findPassengerDetails });
    }

  };

  const startWayDriver= () => {
    if(details){
      service.updateInstanceStatus(setState, { id: details.id, status: TSE.started });
    }
  };

  const waypointsTrackingStatus = (data: ITripData, locationDriver: IGeoLocation) => {

    if(!locationDriver.latitude || !locationDriver.longitude){
      return;
    }
    const proximityThreshold = 50;

    const findWayPoint = data.stops.find((e: any) => !e.done);

    if(findWayPoint){
      const destinationAddressDistance = getDistance(
        { latitude: locationDriver.latitude, longitude: locationDriver.longitude },
        { latitude: findWayPoint.location.location.lat, longitude: findWayPoint.location.location.lng }
      );

      const isSavedWaypoint = savedWaypoints.find((e) => e === findWayPoint.id);

      if((destinationAddressDistance || destinationAddressDistance === 0) && destinationAddressDistance <= proximityThreshold &&
        (findWayPoint.status === TSEWAYPOINT.GoToPoint || findWayPoint.status === TSEWAYPOINT.None) &&
        !state.statusLoading &&
        !isSavedWaypoint) {
        setSavedWaypoints([...savedWaypoints, findWayPoint.id]);
        service.updateInstanceWayPointStatus(setState, { id: findWayPoint.id, status: TSEWAYPOINT.Done });
      }
    }
  };

  const setArrivedDriver = async () => {
    if(details){
      await service.updateInstanceStatus(setState, { id: details.id, status: TSE.waitingStart });
    }
    setShowArrivedButton(false);
  };
  const onPointFinished = (point: IPoint, index: number) => {
    point.status = TSEWAYPOINT.Done;
    service.updateInstanceWayPointStatus(setState, { id: parseInt(point.id), status: TSEWAYPOINT.Done });
    const pointCount = details?.points.length || 0;
    if(index < (pointCount - 1)){
      service.updateInstanceWayPointStatus(setState, {
        id: parseInt(details!.points[index + 1].id),
        status: TSEWAYPOINT.GoToPoint
      });
    }
  };
  
  if (!details) return <Loader/>;

  return (<Containers.LayoutDriver scrollView={false} showHeader={false} navigateTo={navigateTo}>
    <VStack style={styles.container}>

      <GoogleMap
        points={details.points}
        customHeight={Platform.OS === 'ios' ? 0.75 : 0.84}
        driver={location}
        onLocationChanged={handleChangeNavigation}
        onPointFinished={onPointFinished}
        navigationStarted={isRunDriving}/>
      <OrderMapSheet setArrivedDriver={setArrivedDriver}
        startWayDriver={startWayDriver}
                     customerPrice={customerPrice}
        showArrivedButton={showArrivedButton}
        showPassengerDetails={showPassengerDetails}
                     savedWaypoints={savedWaypoints}
        details={details}
        driverLocation={location}/>
      {/*{details && <OrderMapActionPopup address={details.points[0]?.label} />}*/}
    
    </VStack>
  </Containers.LayoutDriver>);
}
