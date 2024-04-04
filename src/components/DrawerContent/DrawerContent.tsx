import React, { useEffect, useState } from 'react';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import {
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import Text from 'components/Text';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { Box, HStack, VStack } from '@react-native-material/core';
import { useTranslation } from 'react-i18next';
import commonStyles from 'assets/styles/commonStyles';
import { IUser } from 'types/user';
import IconComponent from 'components/Icon';
import DrawerMenuItem from './DrawerMenuItem';
import styles from './styles';
import { default as IconIon } from 'react-native-vector-icons/Ionicons';

const DrawerContent: React.FC<DrawerContentComponentProps> = props => {
  const { t } = useTranslation();
  const [menu,] = useState([
    {
      'name': 'drawerMain',
      'key': 'drawerMain-mIno74LLeVQFSevys2jMZ',
      options: {
        title: `${t('common:travels')}`,
        drawerIcon: () => (
          <IconIon style={commonStyles.Icon} name="car"/>
        ),
      }
    },
    {
      'name': 'driverTravels',
      'key': 'driverTravels-J9mEzCbflFnLhPim_Tax1',
      options: {
        title: `${t('common:travels')}`,
        drawerIcon: () => (
          <IconComponent style={commonStyles.Icon} isSvg={true} name={'calendarTrips'}/>
        ),
      }
    },
    {
      'name': 'myWallet',
      'key': 'myWallet-z6lyw8fbS2I2C60JRAnSI',
      options: {
        title: `${t('common:myWallet')}`,
        drawerIcon: () => (
          <IconComponent style={commonStyles.Icon} isSvg={true} name={'myWalletTrips'}/>
        ),
      }
    },
    {
      'name': 'historyTravels',
      'key': 'historyTravels-5UWLudMZyzBHHLjBhlq3S',
      options: {
        title: `${t('common:historyTravel')}`,
        drawerIcon: () => (
          <IconComponent style={commonStyles.Icon} isSvg={true} name={'historyTrips'}/>
        ),
      }
    },
    {
      'name': 'notifications',
      'key': 'notifications-pMh0cSuCnJedMByHEgxDv',
      options: {
        title: `${t('common:notifications')}`,
        drawerIcon: () => (
          <IconComponent style={commonStyles.Icon} isSvg={true} name={'notificationsTrips'}/>
        ),
      }
    },
    {
      'name': 'updates',
      'key': 'updates-Hai6wvtMNFjeFZ9HMiMRT',
      options: {
        title: `${t('common:updates')}`,
        drawerIcon: () => (
          <IconComponent style={commonStyles.Icon} isSvg={true} name={'updatesTrips'}/>
        ),
      }
    },
    {
      'name': 'settings',
      'key': 'settings-cY9E8u2YEMYzhVSUHMAk4',
      options: {
        title: `${t('common:settings')}`,
        drawerIcon: () => (
          <IconComponent style={commonStyles.Icon} isSvg={true} name={'settingsTrips'}/>
        ),
      }
    }
  ]
  );

  const navigate = (route: any) => {
    props.navigation.navigate(route.name);
  };

  const logOut = async () => {
    //await loginService.logOut();
  };

  return (
    <SafeAreaView>
      <View style={styles.drawerItemsContainer}>
        
          <View>
            <HStack style={styles.userContainer}>
              <Box>
                <IconComponent style={styles.userPhoto} isSvg={true} name={'avatarIcon'}/>
              </Box>
              <VStack>
                <HStack style={styles.userInfoName}>
                  <Text
                    style={[commonStyles.fontWeightMedium, styles.userInfoNameFull]}>User Test</Text>
                </HStack>
                <HStack style={styles.userInfoVehicle}>
                  <Text
                    style={[commonStyles.fontWeightLight, styles.userInfoVehicleNumber]}>{t('common:editProfile')}</Text>
                </HStack>
              </VStack>
            </HStack>
          </View>
        
        <Box style={styles.drawerMenuContainer}>
          {props.state.routes.map((route, index) => (
            // @ts-ignore
            (index !== 0 && !props.descriptors[route.key].options.isHide) &&
            <DrawerMenuItem
              key={route.key}
              action={() => navigate(route)}
              title={props.descriptors[route.key].options.title}
              icon={props.descriptors[route.key].options.drawerIcon}
              focused={props.state.index === index}
            />
          ))}

          <Box style={styles.exit}>
            <TouchableOpacity onPress={() => logOut()}>
              <HStack style={styles.exitContainer}>
                <IconComponent style={styles.exitIcon} isSvg={true} name={'exitIcon'}/>
                <Text style={styles.exitText}>{t('common:disconnection')}</Text>
              </HStack>
            </TouchableOpacity>
          </Box>
        </Box>
      </View>
    </SafeAreaView>
  );
};

export default DrawerContent;
