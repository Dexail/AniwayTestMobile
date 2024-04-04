import React from 'react';
import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { HStack, VStack } from '@react-native-material/core';
import commonStyles from 'assets/styles/commonStyles';
import orderMapActionPopupStyles from 'assets/styles/orderMapActionPopupStyles';
import Button from 'components/Button';
import Icon from 'react-native-vector-icons/Ionicons';

interface IOrderMapRouteDetailsProps {
  address: string;
}

export default function OrderMapRouteDetails({ address }: IOrderMapRouteDetailsProps) {
  const { t } = useTranslation();
  return (<View style={orderMapActionPopupStyles.container}>
    <HStack style={orderMapActionPopupStyles.block}>
      <Icon style={commonStyles.Icon} name={'location-sharp'} />
      <VStack style={orderMapActionPopupStyles.blockInfo}>
        <Text style={[orderMapActionPopupStyles.title, commonStyles.fontWeightMedium]}>{t('common:you-have-reached-the-starting-address')}</Text>
        <VStack style={orderMapActionPopupStyles.blockAddressInfo}>
          <Text style={orderMapActionPopupStyles.text}>{t('common:you-can-start-the-travel-route')}</Text>
          <Text style={orderMapActionPopupStyles.text}>{address}:{t('common:next-stop-address')}</Text>
        </VStack>
        <Button style={orderMapActionPopupStyles.actionButton} title={t('common:start-of-the-travel-route')}></Button>
      </VStack>
    </HStack>
  </View>);
}
