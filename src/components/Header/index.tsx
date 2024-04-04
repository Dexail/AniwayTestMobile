import React from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import Text from 'components/Text';
import variables from 'assets/styles/variables';
import styles from './styles';

interface iProps {
  title: string;
  back?: () => void;
}

const Header: React.FC<iProps> = ({ title, back }) => {
  const navigation = useNavigation();
  return (
    <>
      <SafeAreaView />
      <LinearGradient style={styles.headerWrapper} colors={[variables.white, 'rgba(255,255,255,0)']}>
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
          <Icon name="menu-outline" size={34} color={variables.mineShaft} />
        </TouchableOpacity>
        <Text style={[styles.title, back && styles.withBackBtn]}>{title}</Text>
        {back && (<TouchableOpacity onPress={back}>
          <Icon name="arrow-back-outline" size={34} color={variables.mineShaft} />
        </TouchableOpacity>)}
      </LinearGradient>
    </>
  );
};

export default Header;
