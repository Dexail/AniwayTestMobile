import { Box, HStack, AppBar } from '@react-native-material/core';
import React from 'react';
import Routes from 'app-enums/routes';
import { Text, TouchableOpacity, View } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';

//Images
import Icon from 'react-native-vector-icons/Ionicons';

//Styles
import driverHeaderStyles from 'assets/styles/driverHeaderStyles';
import commonStyles from 'assets/styles/commonStyles';

interface IDriverNotificationsHeaderProps {
  navigateTo: (name: string) => void;
  openThreeDots: () => void;
  title: string;
}

export default function DriverNotificationsHeader({
  navigateTo,
  openThreeDots,
  title
}: IDriverNotificationsHeaderProps) {
  const navigation = useNavigation();
  return <View>
    <HStack style={driverHeaderStyles.content}>
      <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
        <Box>
          <Icon name={'menu'} style={driverHeaderStyles.menuIcon}/>
        </Box>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateTo(Routes.driverTravels)}>
        <Text style={[driverHeaderStyles.title, commonStyles.fontWeightMedium]}>
          {title}
        </Text>
      </TouchableOpacity>
      <Box>
        <TouchableOpacity onPress={() => openThreeDots()}>
          <Icon name={'ellipsis-horizontal'} style={driverHeaderStyles.additionalMenu}/>
        </TouchableOpacity>
      </Box>
    </HStack>
  </View>;
}
