import React, { useEffect, useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useTranslation } from 'react-i18next';
import DrawerContent from 'components/DrawerContent';
import DriverOrderMap from 'screens/DriverOrderMap/DriverOrderMap';
import styles from './styles';
import Routes from 'app-enums/routes';

const Drawer = createDrawerNavigator();
// Temp solution

const Private: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      initialRouteName={Routes.driverOrderMap}
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        drawerPosition: 'right',
        drawerStyle: styles.drawer,
        unmountOnBlur: true,
      }}
    >

      <Drawer.Screen
        name={Routes.driverOrderMap}
        component={DriverOrderMap}
        options={{
          unmountOnBlur: true,
        }}
      />
    </Drawer.Navigator>
  );
};

export default Private;
