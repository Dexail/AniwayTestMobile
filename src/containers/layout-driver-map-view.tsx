import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Box, HStack, VStack } from '@react-native-material/core';
import React, { ReactElement } from 'react';

//Css
import commonStyles from 'assets/styles/commonStyles';

// Components
import driverHeaderStyles from 'assets/styles/driverHeaderStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import Routes from 'app-enums/routes';

interface ILayoutDriverMapViewProps {
    children: ReactElement;
    title: string,
    navigateTo: (name: string) => void;
}

export default function LayoutDriverMapView({ children, title, navigateTo }: ILayoutDriverMapViewProps) {
  return <VStack style={commonStyles.layout}>
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <HStack style={driverHeaderStyles.contentMapView}>
          <TouchableOpacity onPress={() => navigateTo(Routes.driverTravels)}>
            <Box>
              <Icon name={'chevron-forward-outline'} style={driverHeaderStyles.menuIcon}/>
            </Box>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateTo(Routes.driverTravels)}>
            <Text style={[driverHeaderStyles.title, commonStyles.fontWeightMedium]}>
              {title}
            </Text>
          </TouchableOpacity>
          <Box>
            <Icon name={'ellipsis-horizontal'} style={driverHeaderStyles.additionalMenu} />
          </Box>
        </HStack>
      </View>
      <Box style={commonStyles.layoutContentScroll}>
        {children}
      </Box>
    </SafeAreaView>
  </VStack>;
}
