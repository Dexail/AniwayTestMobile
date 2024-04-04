import { useEffect, useState } from 'react';
import Geolocation, { GeoPosition } from 'react-native-geolocation-service';
import { Alert, PermissionsAndroid, Platform } from 'react-native';
import { PERMISSIONS, request as requestP, RESULTS } from 'react-native-permissions';
import { requestTrackingPermission } from 'react-native-tracking-transparency';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import userService from 'services/userService';

export interface IGeoLocation {
  latitude: number;
  longitude: number;
}

const useGeolocation = (interval = 10003) => {
  const [location, setLocation] = useState<any>(null);
  const currentUser = useSelector((state: RootState) => state.user);
  const isTrackGeolocation = useSelector((state: RootState) => state.user.isTrackGeoLocation);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        if (Platform.OS === 'android') {
          const granted = await PermissionsAndroid.requestMultiple([
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
          ]);
          if (
            granted['android.permission.ACCESS_FINE_LOCATION'] === PermissionsAndroid.RESULTS.GRANTED &&
            granted['android.permission.ACCESS_COARSE_LOCATION'] === PermissionsAndroid.RESULTS.GRANTED
          ) {
            getCurrentLocation();
          } else {
            console.warn('Location permission denied');
          }
        } else if (Platform.OS === 'ios') {
          const locationStatus = await requestP(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
          const trackingStatus = await requestTrackingPermission();
          if (locationStatus === RESULTS.GRANTED && (trackingStatus === 'authorized' || trackingStatus === 'unavailable')) {
            getCurrentLocation();
          } else {
            console.warn('Location permission denied');
          }
        } else {
          console.warn('Location permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    };

    requestLocationPermission();
  }, []);

  useEffect(() => {
    if (isTrackGeolocation) {
      const id = setInterval(() => {
        getCurrentLocation();
      }, interval);
      setIntervalId(id);
    } else {
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(null);
      }
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isTrackGeolocation]);

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position: GeoPosition) => {
        if (position.coords.longitude && currentUser) {

          userService.updateDriverCoords(currentUser,
            { location: { lat: position.coords.latitude, lng: position.coords.longitude }, label: '', reported_datetime:'' });
          setLocation({ latitude: position.coords.latitude, longitude: position.coords.longitude });
        }
      },
      (error) => {
       // Alert.alert(JSON.stringify(error));
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  return location;
};

export default useGeolocation;
