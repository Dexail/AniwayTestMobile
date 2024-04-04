import React, { useEffect, useState } from 'react';
import { IInstance, ILocation } from 'types/orders';
import { Text, TouchableOpacity, View } from 'react-native';
import orderMapRouteDetailsStyles from 'assets/styles/orderMapRouteDetailsStyles';
import { Box, HStack, VStack } from '@react-native-material/core';
import commonStyles from 'assets/styles/commonStyles';
import IconComponent from 'components/Icon';
import styles from 'components/DrawerContent/styles';
import orderSty from './styles';

interface IOrderMapRouteDetailsProps {
  details: IInstance;
  indexPassenger: number;
  resultCallPosition: any;

  callPassengerDetails: any;
}

export default function OrderMapRouteDetailsNav({
  details,
  indexPassenger = 0,
  resultCallPosition,
  callPassengerDetails,
}: IOrderMapRouteDetailsProps) {
  return (<View>
    <VStack style={orderMapRouteDetailsStyles.container}>
      <HStack style={orderMapRouteDetailsStyles.headerContainer}>
        <HStack style={orderMapRouteDetailsStyles.headerAddress}>
          <HStack style={orderMapRouteDetailsStyles.headerAddressBlock}>
            <Box style={orderMapRouteDetailsStyles.headerAddressBlockLogo}>
              <IconComponent style={styles.userPhoto} isSvg={true} name={'avatarIcon'}/>
            </Box>
            <VStack>
              <Text
                style={[commonStyles.fontWeightMedium, orderMapRouteDetailsStyles.originAddressTitle]}>
                {details?.passengers[indexPassenger]?.first_name}</Text>
            </VStack>
          </HStack>
          <Box style={[orderSty.callElement]}>
            <TouchableOpacity onPress={() => callPassengerDetails(details?.passengers[indexPassenger] ? indexPassenger : indexPassenger - 1)}>
              <IconComponent style={[commonStyles.Icon, orderSty.callElementIcon]}
                             name={'call'} isSvg={true}/>
            </TouchableOpacity>
          </Box>
        </HStack>
      </HStack>
    </VStack>
  </View>);
}
