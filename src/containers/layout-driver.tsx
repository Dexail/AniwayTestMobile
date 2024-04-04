import React, { ReactElement } from 'react';
import commonStyles from 'assets/styles/commonStyles';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import DriverHeader from 'components/DriverHeader/DriverHeader';
import FooterDriver from 'components/FooterDriver/FooterDriver';
import { Box, VStack } from '@react-native-material/core';

interface ILayoutDriverProps {
    children: ReactElement;
    navigateTo: (name: string) => void;
    scrollView?: boolean;
  showHeader?: boolean;
}

export default function LayoutDriver({ children, navigateTo, scrollView = true, showHeader = true }: ILayoutDriverProps) {
  
  return <VStack style={commonStyles.layout}>
    <SafeAreaView style={{ flex: 1 }}>
      <DriverHeader navigateTo={navigateTo}/>
      {scrollView ? <ScrollView style={commonStyles.layoutContentScroll}>
        {children}
      </ScrollView> : <View style={commonStyles.layoutContent}>{children}</View>}
    </SafeAreaView>

  </VStack>;
}
