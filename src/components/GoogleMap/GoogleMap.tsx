import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View, Platform, Image } from 'react-native';
import { Dimensions } from 'react-native';
import { IPoint, TSEWAYPOINT } from 'types/orders';
import { IconMap } from 'components/Icon';
import NavigationView from 'react-native-navigation-sdk/components/navigation/navigationView';
import { ArrivalEvent, NavigationViewController } from 'react-native-navigation-sdk/components/navigation/navigationView/types';
import { MapType, MapViewController } from 'react-native-navigation-sdk/components/maps/mapView/types';
import { CameraPosition, Marker } from 'react-native-navigation-sdk/components/maps/types';
import { AlternateRoutingStrategy, RouteStatus, RoutingStrategy, TimeAndDistance, TravelMode } from 'react-native-navigation-sdk/components/navigation/types';
import { PERMISSIONS, RESULTS, request } from 'react-native-permissions';
import { Location } from 'react-native-navigation-sdk/components/shared/types';

interface iProps {
  points: IPoint[] | null;
  customHeight: number;
  driver?: any;
  navigationStarted?: boolean;
  onNavigationFinished?: () => void;
  onPointFinished?: (point: IPoint, index: number) => void;
  onLocationChanged?: (destinationInfo?: TimeAndDistance, newLocation?: Location) => void;
}

const GoogleMap: React.FC<iProps> = ({ points, driver, customHeight = 1,
  navigationStarted = false, onNavigationFinished, onLocationChanged, onPointFinished  }) => {

  const [currentDriverPosition, setCurrentDriverPosition] = useState({ latitude: 0, longitude: 0 });
  const driverLoaded = React.useRef<boolean>(false);
  const [mapLoaded, setMapLoaded] = useState<boolean>(false);
  const [navLoaded, setNavLoaded] = useState<boolean>(false);
  const [directionBuilded, setDirectionBuilded] = useState<boolean>(false);
  const [arePermissionsApproved, setArePermissionsApproved] = useState(false);
  const navRef = useRef<NavigationView | undefined>(null);

  const [markers, setMarkers] = useState<Marker[]>([]);
  const [currentPointIndex, setCurrentPointIndex] = useState<number>(0);
  const [mapViewController, setMapViewController] =
    useState<MapViewController | null>(null);
  const [navigationViewController, setNavigationViewController] =
    useState<NavigationViewController | null>(null);

  const checkPermissions = async () => {
    const result = await request(
      Platform.OS == 'android'
        ? PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION
        : PERMISSIONS.IOS.LOCATION_ALWAYS,
    );
    if (result == RESULTS.GRANTED) {
      setArePermissionsApproved(true);
    } else {

      setArePermissionsApproved(false);
    }
  };
  useEffect(() => {
    if(!points || !mapViewController || !navigationViewController
      || !mapLoaded || !navLoaded || !arePermissionsApproved) {
      setMarkers([]);
      return;
    }
    (async () => {
      navigationViewController.clearDestinations();
      navigationViewController.stopGuidance();
      const existsMarkers = markers || [];
      const newMarkers: Marker[] = [];
      let hasAnyChanges = false;
      for(const ptIndex in points) {
        const m: (Marker | undefined) = existsMarkers[ptIndex];
        const pt = points[ptIndex];
        const hasChanges = !!m && (pt.latitude != m?.position?.lat || pt.longitude != m?.position?.lng);
        const isFirst = parseInt(ptIndex) === 0;
        const isLast = parseInt(ptIndex) == (points.length - 1);
        let imgPath = "waypoint";
        if(isFirst){
          imgPath = "waypoint_origin_address";
        }
        if(isLast){
          imgPath = "waypoint_destination_address";
        }
        if(hasChanges) {
          mapViewController.removeMarker(m.id[0]);
        }
        if(!m || hasChanges) {
          const markerOptions = {
            position: Platform.OS === 'ios' ? {
              lat: Number(pt.latitude || 0),
              lng: Number(pt.longitude || 0),
            }: {
              lat: pt.latitude || 0,
              lng: pt.longitude || 0,
            },
            //imgPath: imgPath,
            title: pt.label,
            visible: true,
          };
          console.group(markerOptions);
          const newMarker = await mapViewController.addMarker(markerOptions as any);
          existsMarkers[ptIndex] = newMarker;
          hasAnyChanges = true;
        }
        newMarkers.push(existsMarkers[ptIndex]);
      }
      for(let i = points.length; i < existsMarkers.length; i++){
        mapViewController.removeMarker(existsMarkers[i].id);
        hasAnyChanges = true;
      }
      if(!hasAnyChanges) {
        // if(points && points.length) {
        //   points.filter(p => p.status == TSEWAYPOINT.Done).forEach(() => {
        //     navigationViewController.continueToNextDestination();
        //   });
        // }
        return;
      }
      setMarkers(newMarkers);
      if(points.length > 0) {
        const pts = points.map(pt => ({
          placeId: '',
          position: {
            lat: Number(pt.latitude || 0),
            lng: Number(pt.longitude || 0),
          },
          title: pt.label,
          vehicleStopover: false,
          preferSameSideOfRoad: false
        }));
        navigationViewController.clearDestinations();
        navigationViewController.setDestinations(pts, {
          travelMode: TravelMode.DRIVING,
          routingStrategy: RoutingStrategy.DEFAULT_BEST,
          alternateRoutesStrategy: AlternateRoutingStrategy.SHOW_ONE,
        });
        // if(navigationStarted) {
        //   navigationViewController.showRouteOverview();
        //   navigationViewController.continueToNextDestination();
        //   navigationViewController.startGuidance();
        //   navigationViewController.startUpdatingLocation();
        // }
        setDirectionBuilded(false);
      }
      const center: CameraPosition = {
        target: {
          lat: points[0].latitude,
          lng: points[0].longitude
        },
        zoom: 16,
      };
      mapViewController.moveCamera(center);
    })();
  }, [mapLoaded, navLoaded, points, mapViewController, navigationViewController, arePermissionsApproved]);

  useEffect(() => {
    if(!mapLoaded || !navLoaded || !arePermissionsApproved){
      return;
    }
    // if (currentDriverPosition) {
    //   fitToCoordinates();
    //   driverLoaded.current = true;
    //   setMapCamera(currentDriverPosition.latitude, currentDriverPosition.longitude, 19);
    //   if(driverMarker) {
    //     mapViewController?.removeMarker(driverMarker.id[0]);
    //   }
    //   (async () => {

    //     const newMarker = await mapViewController?.addMarker({
    //       position: {
    //         lat: currentDriverPosition.latitude || 0,
    //         lng: currentDriverPosition.longitude || 0,
    //       },
    //  //     imgPath: `${IconMap.driverMarker}`,
    //       title: "Driver's location",
    //       visible: true,
    //     });
    //     setDriverMarker(newMarker);
    //   })();
    // }
  }, [currentDriverPosition, mapLoaded, navLoaded, arePermissionsApproved]);

  useEffect(() => {
    if(driver && (currentDriverPosition?.latitude !==  driver.latitude
      || currentDriverPosition?.longitude !==  driver.longitude)){
      setCurrentDriverPosition({ latitude: driver.latitude, longitude: driver.longitude });
    }
  }, [driver]);

  useEffect(() => {
    checkPermissions();
    return () => {
      setArePermissionsApproved(false);
      if(navLoaded && navigationViewController) {
        navigationViewController.stopGuidance();
        navigationViewController.stopUpdatingLocation();
        navigationViewController.clearDestinations();
      }
      if(mapLoaded && mapViewController) {
        mapViewController.clearMapView();
      }
    };
  }, []);
  const onMapReady = () => {
    if(!mapViewController) {
      return;
    }
    mapViewController.setMapType(MapType.NORMAL);
    mapViewController.clearMapView();
    setMapLoaded(true);
  };
  const onNavReady = () => {
    if(!navigationViewController) {
      return;
    }
    setNavLoaded(true);
    navigationViewController.clearDestinations();
    navigationViewController.stopGuidance();

  };

  const onLocationChange = useCallback(async (currentLocation?: Location) => {
    if(!navigationViewController) {
      return;
    }
    let destinationInfo: (TimeAndDistance | undefined) = undefined;
    try {
      destinationInfo = await navigationViewController.getCurrentTimeAndDistance();
    } catch(ex) {
      console.log(ex);
    }
    if(onLocationChanged){
      onLocationChanged(destinationInfo, currentLocation);
    }
  }, [navigationViewController]);

  const onRouteStatusResult = useCallback((args: RouteStatus) => {
    if(!navigationViewController) {
      return;
    }
    if(args == RouteStatus.OK) {
      navigationViewController.showRouteOverview();
      setDirectionBuilded(true);
      onLocationChange(undefined);
      setCurrentPointIndex(0);
      (async () => {
        const items = await navigationViewController.getRouteSegments();
      })();
    }
  }, [navigationViewController]);
  useEffect(() => {
    if(!navigationViewController || !mapViewController || !mapLoaded || !navLoaded){
      return;
    }
    if(navigationStarted && !directionBuilded) {
      return;
    }

    if(navigationStarted) {
      navigationViewController.startUpdatingLocation();
      if(points && points.length) {
        points.filter(p => p.status == TSEWAYPOINT.Done).forEach(() => {
          navigationViewController.continueToNextDestination();
        });
      }
      navigationViewController.startGuidance();
    } else {
      navigationViewController.stopGuidance();
      navigationViewController.stopUpdatingLocation();
    }
  }, [navigationStarted, navigationViewController, mapViewController, directionBuilded, mapLoaded, navLoaded]);

  const onArrival = useCallback((event: ArrivalEvent) => {
    if (event.isFinalDestination) {
      navigationViewController?.stopGuidance();
      if(onNavigationFinished) {
        onNavigationFinished();
      }
    } else {
      navigationViewController?.continueToNextDestination();
      navigationViewController?.startGuidance();
      navigationViewController?.showRouteOverview();
    }
    if(onPointFinished){
      onPointFinished(points![currentPointIndex], currentPointIndex);
    }
    setCurrentPointIndex(currentPointIndex + 1);
  }, [points, setCurrentPointIndex, onPointFinished, navigationViewController]);
  return arePermissionsApproved && (<View>
    <NavigationView
      ref={navRef as any}
      width={Dimensions.get('screen').width}
      height={Dimensions.get('screen').height * customHeight}
      androidStylingOptions={{
        primaryDayModeThemeColor: '#34eba8',
        headerDistanceValueTextColor: '#76b5c5',
        headerInstructionsFirstRowTextSize: '20f',
      }}
      iOSStylingOptions={{
        navigationHeaderPrimaryBackgroundColor: '#34eba8',
        navigationHeaderDistanceValueTextColor: '#76b5c5',
        navigationHeaderGuidanceRecommendedLaneColor: "#ff0000",
      }}
      navigationViewCallbacks={{ onNavigationReady: onNavReady,
        onRouteStatusResult: onRouteStatusResult,
        onArrival,
        onLocationChanged: (args) => onLocationChange(args) }
      }
      mapViewCallbacks={{ onMapReady : onMapReady }}

      onMapViewControllerCreated={setMapViewController}
      onNavigationViewControllerCreated={setNavigationViewController}
      termsAndConditionsDialogOptions={{
        title: 'Aniway',
        companyName: 'Aniway',
        showOnlyDisclaimer: true,
      }}
    />

  </View>);
};

export default GoogleMap;
