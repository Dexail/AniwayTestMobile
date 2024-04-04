import { useEffect, useState } from 'react';
import { Platform, PermissionsAndroid } from 'react-native';
import { requestTrackingPermission } from 'react-native-tracking-transparency';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { request as requestP, PERMISSIONS, RESULTS } from 'react-native-permissions';

const useLocationPermissions = () => {
  const [locationPermission, setLocationPermission] = useState<string | null>(null);

  useEffect(() => {
    checkLocationPermissions();
  }, []);
  const checkLocationPermissions = async () => {
    if (Platform.OS === 'android') {
      try {
        const result = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION,
          {
            title: 'הרשאת מיקום',
            message: 'אפליקציה זו דורשת גישה למיקום כדי לתפקד כראוי. הפעל גישה למיקום בהגדרות המכשיר שלך.',
            buttonNeutral: 'שאל אותי מאוחר יותר',
            buttonNegative: 'ביטול',
            buttonPositive: 'בסדר',
          },
        );

        if (result === PermissionsAndroid.RESULTS.GRANTED) {
          setLocationPermission('granted');
        } else {
          setLocationPermission('denied');
        }
      } catch (error) {
        console.error('Error requesting location permission:', error);
        setLocationPermission('denied');
      }
    } else if (Platform.OS === 'ios') {
      const locationStatus = await requestP(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      const trackingStatus = await requestTrackingPermission();

      if (locationStatus === RESULTS.GRANTED && (trackingStatus === 'authorized' || trackingStatus === 'unavailable')) {
        setLocationPermission('granted');
      } else if (locationStatus === RESULTS.DENIED && trackingStatus === 'denied') {
        const permissionStatus = await AsyncStorage.getItem('locationPermissionStatus');
        if (permissionStatus === 'granted') {
          setLocationPermission('granted');
        } else {
          setLocationPermission('denied');
        }
      } else {
        setLocationPermission('denied');
      }
    }
  };

  return locationPermission;
};

export default useLocationPermissions;
