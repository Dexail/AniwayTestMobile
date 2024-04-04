import { ScrollView } from 'react-native';
import React, { ReactElement } from 'react';
import travelsStyles from 'assets/styles/travelsStyles';
import { VStack } from '@react-native-material/core';
import { IInstances } from 'types/orders';
import Travel from 'components/Travel/Travel';

interface ITravelsOverProps {
    orders: IInstances[]
    openOrder: (id: number, status: string) => void;
}

export default function TravelsOver({ orders, openOrder }: ITravelsOverProps){
  return <ScrollView style={travelsStyles.scrollView}>
    <VStack style={travelsStyles.container}>
      {orders && orders.length > 0 && orders.map((order: IInstances, index: number): ReactElement => <Travel isUnClick={true} key={index} travel={order} openOrder={openOrder}/>)}
    </VStack>
  </ScrollView>;
}
