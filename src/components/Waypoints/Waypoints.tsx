import React from 'react';
import { IInstance, IPassenger, IPoint, TSE, TSEWAYPOINT } from 'types/orders';
import { Box, HStack, VStack } from '@react-native-material/core';
import IconComponent from 'components/Icon';
import commonStyles from 'assets/styles/commonStyles';
import Text from 'components/Text';
import { TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import waypointsStyles from 'assets/styles/waypointsStyles';

interface IWaypointsProps{
  details: IInstance;
  savedWaypoints: any;
  points: IPoint[];
  showArrivedButton: boolean;
  handleOnClick: (idPassenger: string) => void;
}

export default function Waypoints({ points, handleOnClick, showArrivedButton, savedWaypoints, details }: IWaypointsProps) {
  const { t } = useTranslation();

  return <View>
    <HStack style={waypointsStyles.originAddressContainer}>
      <HStack style={(details.status === TSE.waitingStart || details.status === TSE.started || showArrivedButton) ?
        { ...waypointsStyles.originAddressBlock, ...waypointsStyles.originAddressBlockDisable } : waypointsStyles.originAddressBlock}>
        <Box>
          <IconComponent style={[commonStyles.Icon,  waypointsStyles.originAddressIcon]}
                         name={'waypointBlue'} isSvg={true}/>
        </Box>
        <Box style={waypointsStyles.containerAddressText}>
          <Text
            style={[waypointsStyles.containerAddressTextName, commonStyles.fontWeightLight]}>{t('common:origin-address')}</Text>
          <Text
            style={[waypointsStyles.containerAddressValue, commonStyles.fontWeightLight]}>{points[0].label}</Text>
        </Box>
      </HStack>
      <Box>
        <Text
          style={[waypointsStyles.originAddressTime, commonStyles.fontWeightLight]}>{points[0].dateTime}</Text>
      </Box>
    </HStack>
    {points.map((point: IPoint, indexPoint: number) => {
      return (
        (indexPoint > 0 && indexPoint < points.length - 1) ?
          <View key={indexPoint}>
            <Box style={waypointsStyles.waypointLineSmini}>
            </Box>
            <HStack style={(point.status === TSEWAYPOINT.Done || (savedWaypoints || []).find((e: any) => e === point.id)) ? { ...waypointsStyles.waypoint, ...waypointsStyles.originAddressBlockDisable } : waypointsStyles.waypoint} key={indexPoint}>
              <HStack style={waypointsStyles.waypointBlock}>
                <Box style={waypointsStyles.waypointImage}>
                  <IconComponent style={[commonStyles.Icon]}
                                 name={'waypointBlue'} isSvg={true}/>
                </Box>
                <VStack style={waypointsStyles.waypointPassengers}>
                  <Text
                    style={[waypointsStyles.waypointTitle, commonStyles.fontWeightLight]}>{point.label}
                  </Text>
                  {point.passengers && point.passengers.map((passenger: IPassenger, index: number) => <TouchableOpacity key={index}
                    onPress={() => handleOnClick(passenger.id)}>
                    <HStack
                      style={waypointsStyles.passengers}
                    >
                      <IconComponent style={waypointsStyles.passengersContactIcon} isSvg={true} name={'passengerIcon'} />
                      <Text style={waypointsStyles.passengersContactTitle}>{t('common:there-goes')}</Text>
                      <Text>{passenger.first_name}</Text>
                    </HStack>
                  </TouchableOpacity>)}
                </VStack>
              </HStack>
              <Box><Text
                style={[waypointsStyles.originAddressTime, commonStyles.fontWeightLight]}>{point.dateTime}</Text></Box>
            </HStack>
          </View> : <Box key={indexPoint}></Box>);
    })}
    <Box style={points?.length > 2 ? waypointsStyles.waypointLineS : waypointsStyles.waypointLineSmini}>
    </Box>
    <HStack style={waypointsStyles.finishedAddressContainer}>
      <HStack style={points[points.length - 1].done ? { ...waypointsStyles.originAddressBlock, ...waypointsStyles.originAddressBlockDisable } : waypointsStyles.originAddressBlock}>
        <Box>
          <IconComponent style={[waypointsStyles.originDestinationIcon]}
            name={'addressYellowFlag'} isSvg={true}/>
        </Box>
        <Box style={waypointsStyles.containerAddressText}>
          <Text
            style={[waypointsStyles.containerAddressTextName, commonStyles.fontWeightLight]}>{t('common:endPoint')}</Text>
          <Text
            style={[waypointsStyles.containerAddressValue, commonStyles.fontWeightLight]}>{points[points.length - 1].label}</Text>
        </Box>
      </HStack>
      <Box>
        <Text
          style={[waypointsStyles.originAddressTime, commonStyles.fontWeightLight]}>
          {points[points.length - 1].dateTime}</Text>
      </Box>
    </HStack>
  </View>;
}
