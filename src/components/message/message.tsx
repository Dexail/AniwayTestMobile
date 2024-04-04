import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Animated, TouchableOpacity } from 'react-native';
import styles from './messageStyles';
import { RootState } from 'store/store';
import { VStack } from '@react-native-material/core';
import { BlurView } from '@react-native-community/blur';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import { TSE, TYPENOTIFICATION } from 'types/orders';
import { changeOrderIndependentStatus, changeOrderIndependentStatusCancel } from 'store/actions/ordersActions';
import DriverNotificationsElement, {
  typeOfNotification
} from 'screens/DriverNotifications/components/DriverNotificationsElement';
import Routes from 'app-enums/routes';
import { useNavigation } from '@react-navigation/native';
import { notificationsActions } from 'store/slices/notifications';
import Sound from 'react-native-sound';
Sound.setCategory('Playback');


const Message = () => {
  const message = useSelector((state: RootState) => state.message);
  const [fadeAnim] = useState(new Animated.Value(0));
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const driver = useSelector(({ user }: RootState): any => user);

  const catchingOrder = (isAccepted: boolean, id: string) => {
    if(driver && driver.driver_details && driver?.driver_details?.vehicle?.id) {
      const currentToDate = moment();
      const currentFromDate = moment();
      let newToDate = null;
      let newFromDate = null;

      newToDate = currentToDate;
      newFromDate = currentFromDate;

      const formattedFromDate = newFromDate ? newFromDate.format('YYYY-MM-DD') : '';
      const formattedToDate = newToDate ? newToDate.format('YYYY-MM-DD') : '';

      const myTravelsParams = {
        from: formattedFromDate,
        to: formattedToDate,
        status: `${TSE.started},${TSE.notDone},${TSE.goingToStart},${TSE.waitingStart}`,
        page_size: '999',
        driver: driver.id
      };
      if(isAccepted) {
        dispatch(changeOrderIndependentStatus(driver.id , +id, isAccepted, driver.driver_details.vehicle.id, driver.is_independent, myTravelsParams, acceptedIndependentOrder, true));

      } else {
        dispatch(changeOrderIndependentStatusCancel(+id, isAccepted, driver.driver_details.vehicle.id, driver.is_independent, myTravelsParams, () => {}, true));
      }
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        dispatch(notificationsActions.hideMessage({}));
      });
    }

  };

  const acceptedIndependentOrder = (result: any) => {

    if(result && result.first_instance_id) {
      // @ts-ignore
      navigation.navigate(Routes.driverMapView, { id: result.first_instance_id });
    }
  };

  const openOrder = (id: string) => {

    if(message.type !== TYPENOTIFICATION.assign_driver) {
      return null;
    }

    // @ts-ignore
    navigation.navigate(Routes.driverOrderMap, { id: id });
    notificationsActions.hideMessage({});
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      dispatch(notificationsActions.hideMessage({}));
    });
  };

  useEffect(() => {
    if (message?.isVisible) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        const sound = new Sound('cash_register.mp3', Sound.MAIN_BUNDLE, (error) => {
          if (error) {
            console.log('Failed to load the sound', error);
            return;
          }
          // Play the sound with an onEnd callback
          sound.play((success) => {
            if (success) {
              console.log('Successfully finished playing');
            } else {
              console.log('Playback failed due to audio decoding errors');
            }
          });
        });
      });
      const timer = setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }).start(() => {
          dispatch(notificationsActions.hideMessage({}));
        });
      }, 20000);

      return () => clearTimeout(timer);
    }
  }, [message.isVisible]);

  if (!message?.isVisible) return null;




  return (
    <Animated.View
      style={[
        styles.messageContainer,

        { opacity: fadeAnim }
      ]}
    >
      <VStack style={styles.messageBlockInfo}>
        {driver.is_independent ? <DriverNotificationsElement type={typeOfNotification.old} catchingOrder={catchingOrder} isShowCatchingRide={driver.is_independent} data={{id: message.idOrder, title: message.title, origin_address: message.origin_address,
          destination_address:message.destination_address}} /> :
          <TouchableOpacity style={styles.messageBlockInfoTouchble} onPress={() => openOrder(message.idOrder)}>
          <DriverNotificationsElement type={typeOfNotification.old} catchingOrder={catchingOrder} isShowCatchingRide={driver.is_independent} data={{id: message.idOrder, title: message.title, origin_address: message.origin_address,
            destination_address:message.destination_address}} />
        </TouchableOpacity>}

      </VStack>
    </Animated.View>
  );
};

export default Message;
