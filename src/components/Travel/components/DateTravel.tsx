import React from 'react';
import { Text, View } from 'react-native';
import { DateToTimeTypes, IDateToTime } from 'utils/dateToTime';
import travelStyles from 'assets/styles/travelStyles';
import commonStyles from 'assets/styles/commonStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import { HStack } from '@react-native-material/core';
import IconComponent from 'components/Icon';

export interface IDateTravelProps {
    date: IDateToTime;
}

export default function DateTravel({ date }: IDateTravelProps) {

  const transformDate = () => {
    switch(date.type) {
    case DateToTimeTypes.Days:
      return (<HStack style={travelStyles.dateInfoContainer}>
        <IconComponent style={travelStyles.dateMinutesIcon} name={'ellipseBlue'} isSvg={true} />
        <Text style={[travelStyles.dateDaysText, commonStyles.fontWeightMedium]}>{date.value}</Text>
      </HStack>);
    case DateToTimeTypes.Hours:
      return (<HStack style={travelStyles.dateInfoContainer}>
        <IconComponent style={travelStyles.dateMinutesIcon} name={'ellipseOrange'} isSvg={true} />
        <Text style={[travelStyles.dateHoursText, commonStyles.fontWeightMedium]}>{date.value}</Text>
      </HStack>);
    case DateToTimeTypes.Minutes:
      return (<HStack style={travelStyles.dateInfoContainer}>
        <IconComponent style={travelStyles.dateMinutesIcon} name={'CircleIcon'} isSvg={true} />
        <Text style={[travelStyles.dateMinutesText, commonStyles.fontWeightMedium]}>{date.value}</Text>
      </HStack>);

    }
  };
  return (<View>
    {transformDate()}
  </View>);
}
