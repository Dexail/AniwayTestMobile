import { Box, HStack, AppBar } from '@react-native-material/core';
import React, { useCallback } from 'react';
import Routes from 'app-enums/routes';
import { TouchableOpacity, View } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';

//Images
import Icon from 'react-native-vector-icons/Ionicons';
import IconComponent from 'components/Icon';
import { changeTrackingState } from 'store/actions/userActions';

//Styles
import driverHeaderStyles from 'assets/styles/driverHeaderStyles';
import { IUser } from 'types/user';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';

interface IDriverHeaderProps {
  navigateTo: (name: string) => void;
}

export default function DriverHeader({ navigateTo }: IDriverHeaderProps) {
//  const currentUser: IUser = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  return <View>
    <HStack style={driverHeaderStyles.content}>
      <TouchableOpacity onPress={() => {}}>
        <Box>
          <Icon name={'arrow-forward-outline'} style={driverHeaderStyles.menuIcon}/>
        </Box>
      </TouchableOpacity>
      <Box>
        <IconComponent name={'logo'} style={driverHeaderStyles.logoIcon} isSvg={true}/>
      </Box>
      <TouchableOpacity onPress={() => {}}>
        <Box>
          <IconComponent name={ 'activeCarIcon' } isSvg={true}
                         style={driverHeaderStyles.statusIcon}/>
        </Box>
      </TouchableOpacity>
    </HStack>
  </View>;
}
