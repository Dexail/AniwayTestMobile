import React, { useEffect } from 'react';
import { Box, HStack, VStack } from '@react-native-material/core';
import travelStyles from 'assets/styles/travelStyles';
import { default as IconIon } from 'react-native-vector-icons/Ionicons';
import commonStyles from 'assets/styles/commonStyles';
import { Text } from 'react-native';
import IconComponent from 'components/Icon';
import { IInstances, TSE } from 'types/orders';
import DateTravel from 'components/Travel/components/DateTravel';
import { IDateToTime } from 'utils/dateToTime';
import Button from 'components/Button';
import { IUser } from 'types/user';
import moment from 'moment';

interface ITypeTravelProps {
  travel: IInstances;
  date: IDateToTime | null;
  driver: IUser;
  isShowCatching: boolean;
  isIndependentStatus: boolean;
  catchingOrder: (value: boolean, id: string) => void;
  t: any;
}

export default function AvailableTravel({ travel, isShowCatching, catchingOrder, date, driver, isIndependentStatus, t }: ITypeTravelProps) {
  let customerPrice = null;

  if(isIndependentStatus && travel && driver) {
    const { priceDetails } = travel;
    const price = parseFloat(priceDetails?.price || '0');
    const customerDiscount = parseFloat(priceDetails?.customer_discount || '0');
    const taxRate = parseFloat(priceDetails?.tax_rate || '0');
    const discount = parseFloat(`${driver.managementDetails?.discount_percent}` || '0');
    customerPrice = (Math.ceil(((price - (price * customerDiscount / 100)) * (taxRate + 1)) * 100) / 10) / 10 ;
    customerPrice = discount ? (customerPrice - (customerPrice - (customerPrice * (1 - discount / 100)))).toFixed(2) : customerPrice;
  }

  return (<VStack>
    {/*<Box style={travelStyles.regularContainer}>
                <Text style={[travelStyles.regularText, commonStyles.fontWeightLight]}>{t("common:regular-travels")}</Text>
            </Box>*/}
    <VStack style={travelStyles.travelInfoBlock}>
      <HStack style={travelStyles.originAddressContainer}>
        <Box>
          <IconComponent isSvg={true} name={'originAddress'}/>
        </Box>
        <Box style={travelStyles.containerAddressText}>
          <Text
            style={[travelStyles.containerAddressValue, commonStyles.fontWeightMedium]}>{(travel?.points && travel?.points[0]) && travel.points[0].label}</Text>
          <Text style={travelStyles.containerAddressTextName}>{t('common:origin-address')}</Text>
        </Box>
      </HStack>
      <Box style={travelStyles.addressLineContainer}>
        <IconComponent isSvg={true} name={'addressLine'}/>
      </Box>
      <HStack style={travelStyles.destinationAddressContainer}>
        <Box>
          <IconComponent isSvg={true} name={'finishAddress'}/>
        </Box>
        <Box style={travelStyles.containerAddressText}>
          <Text
            style={[travelStyles.containerAddressValue, commonStyles.fontWeightMedium]}>{travel.endAddress}</Text>
          <Text style={travelStyles.containerAddressTextName}>{t('common:destination-address')}</Text>
        </Box>
      </HStack>
      <HStack style={travelStyles.dateTravelContainer}>
        <IconComponent isSvg={true} name={'calendarAddress'}/>
        <Text
          style={[travelStyles.dateTravelValue, commonStyles.fontWeightLight]}>{travel.date ? moment(travel.date).format('DD-MM-YYYY') : ""} {travel.startTime}</Text>
      </HStack>

    </VStack>
    <HStack style={travelStyles.priceBlockContainer}>
      <HStack style={travelStyles.priceBlock}>
        <Box style={travelStyles.priceBlockCash}>
          <IconComponent isSvg={true} name={'cash'}/>
        </Box>
        <Box style={travelStyles.priceBlockPrices}>
          <Text
            style={[travelStyles.priceBlockTotal, commonStyles.fontWeightMedium]}>{
            isIndependentStatus ? customerPrice :
            travel.priceDetails && travel.priceDetails?.driver_price ? `₪ ${travel.priceDetails?.driver_price}` : '0'}</Text>
          <Text
            style={[travelStyles.priceBlockPricesName, commonStyles.fontWeightLight]}>{t('common:travel-price')}</Text>
        </Box>
      </HStack>
      <Box>
        {(date && (travel.status === TSE.notDone || travel.status === TSE.approved)) ? <DateTravel date={date}/> :
          // @ts-ignore
          travel.status !== TSE.notDone && <Box style={isIndependentStatus && travel.status === TSE.approved ? travelStyles.rideWasCaughtU : travelStyles.rideWasCaught}><Text
            style={isIndependentStatus && travel.status === TSE.approved ? travelStyles.rideWasCaughtTextU : travelStyles.rideWasCaughtText}>{
            isIndependentStatus ? travel.status == TSE.approved  ? t('common:rideWasCaught') : t('common:rideWasCaught') : t('common:rideWasCaught')}</Text></Box> }
      </Box>
    </HStack>

    {isShowCatching && <HStack style={travelStyles.catchingContainer}>
      <Button wrapperStyle={travelStyles.catchingContainerButton} textStyle={travelStyles.priceBlockContainerButton} onClick={() => catchingOrder(false, `${travel.id}`)} type={'danger'} title={t('common:cancelRide')}/>
      <Button wrapperStyle={travelStyles.catchingContainerButton} textStyle={travelStyles.priceBlockContainerButton} onClick={() => catchingOrder(true, `${travel.id}`)} type={'primary'} title={t('common:confirmTrip')}/>
    </HStack>}


  </VStack>);
}
