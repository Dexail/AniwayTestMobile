import React, { useMemo } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { Dimensions, Platform, Text, TouchableOpacity, View } from 'react-native';
import { IInstance, TSE, TSEWAYPOINT } from 'types/orders';
import OrderMapRouteDetails from 'screens/DriverOrderMap/components/OrderMapRouteDetails';
import { Box, HStack } from '@react-native-material/core';
import Waypoints from 'components/Waypoints/Waypoints';
import { useTranslation } from 'react-i18next';
import ButtonSheetCustom from 'components/ButtonSheetCustom/ButtonSheetCustom';
import commonStyles from 'assets/styles/commonStyles';
import IconComponent from 'components/Icon';
import styles from 'screens/DriverOrderMap/components/styles';
import OrderMapRouteDetailsNav from 'screens/DriverOrderMap/components/OrderMapRouteDetailsNav';
import travelStyles from 'assets/styles/travelStyles';
import DateTravel from 'components/Travel/components/DateTravel';

const deviceHeight = Dimensions.get('screen').height;

interface iProps {
  details: IInstance;
  driverLocation?: any;
  showPassengerDetails: (id: string) => void;
  showArrivedButton: boolean;
  savedWaypoints: any;
  setArrivedDriver: () => void;
  customerPrice: string | number | null;
  startWayDriver: () => void;
}

const PointsBottomSheet: React.FC<iProps> = ({
  details,
  setArrivedDriver,
  showPassengerDetails,
  savedWaypoints,
  startWayDriver,
  customerPrice,
  showArrivedButton
}) => {
  const [index, setIndex] = React.useState(1);
  const { t } = useTranslation();
  const bottomSheetRef = React.useRef<BottomSheet>(null);
  const isShowButton = details.status === TSE.waitingStart || showArrivedButton;


  const donePoints = useMemo(() => {
    let count = 0;
    details.points.forEach((e) => {
      if (e.status === TSEWAYPOINT.Done) {
        count += 1;
      }
    });
    return count;
  }, [details.points, TSEWAYPOINT.Done]);
  const indexPassenger = savedWaypoints > donePoints ? savedWaypoints : donePoints;

  const showButton = React.useMemo(
    () => details.status !== 'Done',
    [details.status],
  );

  const snapPoints = Platform.select({
    ios: (isShowButton) ? ['23%', '23%', '90%'] : ['10%', '10%', '90%'],
    android: (isShowButton) ? ['31%', '32%', '90%'] : ['20%', '20%', '90%']
  });

  const viewHeight = useMemo(() => {
    const height = Dimensions.get('window').height;

    switch (index) {
    case 0:
      return snapPoints ? Number(snapPoints[index]) - 60 : 0;
    default:
      return snapPoints ? height * (parseFloat(snapPoints[index].toString()) / 100) - 60 : 1;
    }
  }, [index]);

  const callPassengerDetails = (indexCurrentPassenger: number) => {
    if(details && details.points && details.points[indexCurrentPassenger] && details.points[indexCurrentPassenger].passengers != null) {
      const result = details.points[indexCurrentPassenger].passengers;
      if(result && result[0].id) {
        showPassengerDetails(result[0].id);
      }
    }
  };

  const resultCallPosition = Platform.OS === 'ios' ? { marginTop: index === 2 ? 50 : (isShowButton) ? deviceHeight - 280 : deviceHeight - 160 } :
    { marginTop: index === 2 ? 30 : (isShowButton) ? deviceHeight - 290 : deviceHeight - 210 };

  return (<>
      <BottomSheet
        index={index}
        onChange={setIndex}
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        enableContentPanningGesture={true}
        style={styles.bottomSheet}>
        <View style={{ height: viewHeight }}>

        <Box style={styles.headerBlock}>
          {details && <OrderMapRouteDetailsNav callPassengerDetails={callPassengerDetails} resultCallPosition={resultCallPosition}
                                            indexPassenger={details?.passengers[indexPassenger] ? indexPassenger : indexPassenger - 1}
            details={details}/>}
        </Box>
        <Box style={styles.divideElement}></Box>

        <Box style={styles.infoWaypoints}>
          <Waypoints details={details}
            savedWaypoints={savedWaypoints}
            showArrivedButton={showArrivedButton}
            handleOnClick={showPassengerDetails}
            points={details.points}/>
          <HStack style={travelStyles.priceBlockContainer}>
            <HStack style={travelStyles.priceBlock}>
              <Box style={travelStyles.priceBlockCash}>
                <IconComponent isSvg={true} name={'cash'}/>
              </Box>
              <Box style={travelStyles.priceBlockPrices}>
                <Text
                  style={[travelStyles.priceBlockTotalNav, commonStyles.fontWeightMedium]}>{details?.priceDetails?.driver_price ? `₪ ${customerPrice ? customerPrice : details.priceDetails?.driver_price}` : '0'}</Text>
                <Text
                  style={[travelStyles.priceBlockPricesName, commonStyles.fontWeightLight]}>{t('common:travel-price')}</Text>
              </Box>
            </HStack>

          </HStack>
        </Box>
      </View>
    </BottomSheet>

    {isShowButton &&
        <ButtonSheetCustom handleOnStart={setArrivedDriver} title={t('common:you-have-arrived')}
          isDisabled={showButton}/>
    }
    {details.status === TSE.waitingStart &&
        <ButtonSheetCustom handleOnStart={startWayDriver} title={t('common:start-of-the-travel-route')}
          isDisabled={showButton}/>
    }
  </>
  );
};

export default PointsBottomSheet;
