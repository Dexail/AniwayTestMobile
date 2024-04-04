import React, { useEffect, useState } from 'react';
import { IInstance, ILocation } from 'types/orders';
import { Text, View } from 'react-native';
import orderMapRouteDetailsStyles from 'assets/styles/orderMapRouteDetailsStyles';
import { Box, HStack, VStack } from '@react-native-material/core';
import commonStyles from 'assets/styles/commonStyles';
import IconComponent from 'components/Icon';
import styles from 'components/DrawerContent/styles';

interface IOrderMapRouteDetailsProps {
  details: IInstance;
  indexPassenger: number;
  customerPrice: number | string | null;
}

export default function OrderMapRouteDetails({
  details,
  customerPrice,
  indexPassenger = 0,
}: IOrderMapRouteDetailsProps) {
  return (<View>
    <VStack style={orderMapRouteDetailsStyles.container}>
      <HStack style={orderMapRouteDetailsStyles.headerContainer}>
        <HStack style={orderMapRouteDetailsStyles.headerAddress}>
          <HStack style={orderMapRouteDetailsStyles.headerAddressBlock}>
            <Box  style={orderMapRouteDetailsStyles.headerAddressBlockLogo}>
              <IconComponent style={styles.userPhoto} isSvg={true} name={'avatarIcon'}/>
            </Box>
            <Text
              style={[commonStyles.fontWeightMedium, orderMapRouteDetailsStyles.originAddressTitle]}>
              {details?.passengers[indexPassenger]?.first_name}</Text>

          </HStack>
          <Text style={[commonStyles.fontWeightMedium, orderMapRouteDetailsStyles.originAddressValue]}>
            ₪{customerPrice ? customerPrice : details.priceDetails?.driver_price}</Text>
        </HStack>
      </HStack>
    </VStack>
  </View>);
}
