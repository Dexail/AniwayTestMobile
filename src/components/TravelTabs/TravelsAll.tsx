import { ScrollView } from 'react-native';
import React, { ReactElement } from 'react';
import travelsStyles from 'assets/styles/travelsStyles';
import { IInstances } from 'types/orders';
import Travel from 'components/Travel/Travel';
import { VStack } from '@react-native-material/core';
import { IUser } from 'types/user';

interface ITravelsAllProps {
    orders: IInstances[];
  unAssignedOrders:IInstances[] ;
  isShowCatching: boolean;
  isIndependentStatus: boolean;
  driver: IUser;
  catchingOrder: (value: boolean, id: string) => void;
    openOrder: (id: number, status: string) => void;
}

export default function TravelsAll({ orders, isShowCatching, catchingOrder, unAssignedOrders, driver, isIndependentStatus, openOrder }: ITravelsAllProps) {

  return <ScrollView style={travelsStyles.scrollView}>
    <VStack style={travelsStyles.container}>
      {orders && orders.length > 0 && orders.map((order: IInstances, index: number): ReactElement =>
        <Travel key={index} driver={driver} isIndependentStatus={isIndependentStatus} travel={order} catchingOrder={catchingOrder} isShowCatching={false} openOrder={openOrder}/>)}
      {(isShowCatching && unAssignedOrders) && unAssignedOrders.map((order: IInstances, index: number): ReactElement =>
        <Travel key={index} driver={driver} isUnClick={isShowCatching} isIndependentStatus={isIndependentStatus} travel={order} catchingOrder={catchingOrder} isShowCatching={isShowCatching} openOrder={openOrder}/>)}
    </VStack>
  </ScrollView>;
}
