import React, { useEffect, useState } from 'react';
import { IInstances, TSE } from 'types/orders';
import { Text, TouchableOpacity, View } from 'react-native';
import travelStyles from 'assets/styles/travelStyles';
import { useTranslation } from 'react-i18next';
import dateToTime, { IDateToTime } from 'utils/dateToTime';
import FinishedTravel from 'components/Travel/components/FinishedTravel';
import AvailableTravel from 'components/Travel/components/AvailableTravel';
import { Box } from '@react-native-material/core';
import { IUser } from 'types/user';

interface ITravelProps {
    travel: IInstances;
    openOrder: (id: number, status: string) => void;
  isShowCatching: boolean;
  isIndependentStatus: boolean;
  driver: IUser;
  catchingOrder: (value: boolean, id: string) => void;
  isUnClick?: boolean;
}

export default function Travel({ travel, isShowCatching, isUnClick, catchingOrder, driver, isIndependentStatus, openOrder }: ITravelProps) {
  const { t } = useTranslation();
  const [date, setDate] = useState<IDateToTime | null>(null);

  useEffect(() => {
    setDate(() => dateToTime(`${travel.date}, ${travel.startTime}`));
  }, [travel]);

  return <View style={travelStyles.container}>
    {isUnClick ?<Box>
      {travel.status === TSE.done ? <FinishedTravel travel={travel} date={date} t={t}/> :
        <AvailableTravel isIndependentStatus={isIndependentStatus} driver={driver} catchingOrder={catchingOrder} isShowCatching={isShowCatching} travel={travel} date={date} t={t}/>}
    </Box> : (<TouchableOpacity onPress={() => openOrder(travel.id, travel.status)}>
      {travel.status === TSE.done ? <FinishedTravel travel={travel} date={date} t={t}/> :
        <AvailableTravel isIndependentStatus={isIndependentStatus} driver={driver} catchingOrder={catchingOrder} isShowCatching={isShowCatching} travel={travel} date={date} t={t}/>}
    </TouchableOpacity>)}

  </View>;
}
