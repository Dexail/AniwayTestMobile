import React from 'react';
import { Box, HStack, VStack } from '@react-native-material/core';
import travelStyles from 'assets/styles/travelStyles';
import { default as IconIon } from 'react-native-vector-icons/Ionicons';
import commonStyles from 'assets/styles/commonStyles';
import { Text } from 'react-native';
import IconComponent from 'components/Icon';
import { IInstances } from 'types/orders';
import DateTravel from 'components/Travel/components/DateTravel';
import { IDateToTime } from 'utils/dateToTime';

interface ITypeTravelProps{
    travel: IInstances;
    date: IDateToTime | null;
    t: any;
}

export default function FinishedTravel ({ travel, date, t }: ITypeTravelProps) {
  return <VStack>
    <VStack>
      <HStack style={travelStyles.originAddressContainer}>
        <Box>
          <IconIon style={[commonStyles.Icon, travelStyles.originAddressIcon, travelStyles.originAddressIconDisabled]} name={'location-sharp'}/>
        </Box>
        <Box style={travelStyles.containerAddressText}>
          <Text
            style={[travelStyles.containerAddressValue, commonStyles.fontWeightMedium]}>{travel.points[0].label}</Text>
          <Text style={travelStyles.containerAddressTextName}>{t('common:origin-address')}</Text>
        </Box>
      </HStack>
      <Box style={travelStyles.addressLineContainer}>
        <IconComponent isSvg={true} name={'addressLine'}/>
      </Box>
      <HStack style={travelStyles.destinationAddressContainer}>
        <Box>
          <IconComponent isSvg={true} name={'disabledFinishAddress'}/>
        </Box>
        <Box style={travelStyles.containerAddressText}>
          <Text
            style={[travelStyles.containerAddressValue, commonStyles.fontWeightMedium]}>{travel.endAddress}</Text>
          <Text style={travelStyles.containerAddressTextName}>{t('common:destination-address')}</Text>
        </Box>
      </HStack>

    </VStack>
    <HStack style={travelStyles.priceBlockContainer}>
      <HStack style={travelStyles.priceBlock}>
        <Box style={travelStyles.priceBlockCash}>
          <IconComponent isSvg={true} name={'gotMoneyIcon'}/>
        </Box>
        <Box style={travelStyles.priceBlockPrices}>
          <Text
            style={[travelStyles.priceBlockTotal, commonStyles.fontWeightMedium]}>{travel.priceDetails && travel.priceDetails?.driver_price ? `₪ ${travel.priceDetails?.driver_price}` : ''}</Text>
          <Text
            style={[travelStyles.priceBlockPricesName, commonStyles.fontWeightLight]}>{t('common:income-from-travel')}</Text>
        </Box>
      </HStack>
      <Box>
        {date && <DateTravel date={date} />}
      </Box>
    </HStack>

  </VStack>;
}
