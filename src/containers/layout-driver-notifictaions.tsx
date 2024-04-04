import React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import FooterDriver from 'components/FooterDriver/FooterDriver';
import { VStack } from '@react-native-material/core';
import { ReactElement } from 'react';

//Css
import commonStyles from 'assets/styles/commonStyles';

// Components
import DriverNotificationsHeader from 'components/DriverNotificationsHeader/DriverNotificationsHeader';

interface ILayoutDriverNotificationsProps {
    children: ReactElement;
    title: string,
    openThreeDots: () => void;
    navigateTo: (name: string) => void;
}

export default function LayoutDriverNotifications({ children, title, openThreeDots, navigateTo }: ILayoutDriverNotificationsProps) {
  return <VStack style={commonStyles.layout}>
    <SafeAreaView style={{ flex: 1 }}>
      <DriverNotificationsHeader openThreeDots={openThreeDots} navigateTo={navigateTo} title={title}/>
      <ScrollView style={commonStyles.layoutContentScroll}>
        {children}
      </ScrollView>
    </SafeAreaView>
  </VStack>;
}
