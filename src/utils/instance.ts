import moment from 'moment';
import { head, pick } from 'lodash';
import {
  IInstance,
  iInstancePayload,
  IInstances,
  IInstancesPayload,
  IPoint,
  IStoppingPoint,
  TripStatus,
  TSE,
  TSEWAYPOINT
} from 'types/orders';
import { Alert, Linking } from 'react-native';
import i18next from 'i18next';

const roundMinutes = (duration: { value: number }) => {
  return Math.round(duration.value / 60);
};

export const repeatUnitText: any = {
  'Days': 'חזרה כל יום',
  'Weeks': 'חזרה כל שבוע',
};

export const calculateRelativeTime = (inputTime: any, timeFormat?: string) => {
  const format = timeFormat || 'YYYY/MM/DD HH:mm';
  const currentTime = moment();
  const targetTime = moment(inputTime, format);

  const diffWeeks = targetTime.diff(currentTime, 'week');
  const diffMinutes = targetTime.diff(currentTime, 'minutes');
  const diffDays = targetTime.diff(currentTime, 'days');
  const isToday = Math.abs(diffDays) === 0;

  let text = targetTime.format(format);
  let inHours = null;

  if (diffMinutes === 0 && isToday) {
    text = i18next.t('common:right-now');
  }
  if (diffMinutes > 0) {
    if (diffMinutes <= 60) {
      inHours = 0.1;
      text = i18next.t('common:in-minutes', { diffMinutes: diffMinutes });
    } else {
      inHours = Math.ceil(diffMinutes / 60);
      text = i18next.t('common:in-hours', { diffHours: inHours });
    }
  }
  if (diffMinutes < 0 && isToday) {
    if (diffMinutes >= -60) {
      text = i18next.t('common:minutes-ago', { diffMinutes: Math.abs(diffMinutes) });
    } else {
      inHours = Math.abs(Math.floor(diffMinutes / 60));
      text = i18next.t('common:hours-ago', { diffHours: inHours });
    }
  }
  if (diffDays === 1) {
    text = i18next.t('common:yesterday-at', { time: targetTime.format('HH:mm') });
  }
  if (diffDays === -1) {
    text = i18next.t('common:tomorrow-at', { diffMinutes: targetTime.format('HH:mm') });
  }
  if (diffDays >= 7) {
    text = i18next.t('common:in-weeks', { diffWeeks: diffWeeks });
  }
  if (diffDays > 0 && diffDays < 7 && inHours === null) {
    text = i18next.t('common:in-days', { diffDays: diffDays });
  }

  return { text, isToday, inHours };
};

export const IndexMapToDay: any = {
  0: 'ב',
  1: 'ג',
  2: 'ד',
  3: 'ה',
  4: 'ו',
  5: 'ש',
  6: 'א',
};

export const makeInstances = (instances: IInstancesPayload[]): any => {

  if(!instances) {
    return [];
  }

  return instances.map((instance) => {
    const { date, time, direction } = instance;
    const route = direction && direction.routes ? head(direction.routes) : null;
    const dateTime = moment(`${date} ${time}`);
    const startTime = dateTime.clone();
    const stoppingPoints = instance.stopping_points;
    const startPointValue = instance.start_point;
    const passengers = instance.passengers ? instance.passengers : [];
    const stopsAndPassengers = instance.stops_and_passengers;
    const startAddress = instance.start_point.label;
    const points = [];



    const findPassengerById = (id: string) => passengers.find(pass => pass.id === id);

    const startPoint = {
      label: startPointValue.label,
      latitude: startPointValue.location.lat,
      longitude: startPointValue.location.lng,
      placeholder: 'Start Point',
      passengers: stopsAndPassengers && stopsAndPassengers[0] ? stopsAndPassengers[0]?.map(id => findPassengerById(id)) : []
    };
    points.push(startPoint);

    stoppingPoints?.map((stop, index) => {
      points.push({
        id: stop.id,
        label: stop.address.label,
        latitude: stop.address.location.lat,
        longitude: stop.address.location.lng,
        passengers: stopsAndPassengers && stopsAndPassengers[0] ? stopsAndPassengers[index + 1]?.map(id => findPassengerById(id)) : []
      });
    });

    if (route?.legs?.length) {
      const duration = route.legs.reduce((prev, current) => prev + roundMinutes(current.duration), 0);
      dateTime.add(duration, 'm');
    }

    const endTime = dateTime.clone();
    const endAddress = instance.end_point.label;

    return {
      ...pick(instance, 'id', 'date', 'status', 'trip_name', 'trip_type', 'driver', 'vehicle'),
      priceDetails: instance.price_details,
      startTime: startTime.format('HH:mm'),
      startAddress,
      endTime: endTime.format('HH:mm'),
      passengers,
      endAddress,
      points,
      direction,
    };
  });
};

export const calcStatusOriginPoint = (orderStatus: TSE): TSEWAYPOINT => {
  if(orderStatus == TSE.started) {
    return TSEWAYPOINT.Done;
  }
  if(orderStatus == TSE.goingToStart || orderStatus == TSE.waitingStart) {
    return TSEWAYPOINT.GoToPoint;
  }
  return TSEWAYPOINT.None;
};
export const calcStatusDestinationPoint = (orderStatus: TSE, prevPointStatus: TSEWAYPOINT): TSEWAYPOINT => {
  if(orderStatus == TSE.done) {
    return TSEWAYPOINT.Done;
  }
  if(prevPointStatus == TSEWAYPOINT.Done) {
    return TSEWAYPOINT.GoToPoint;
  }
  return TSEWAYPOINT.None;
};

export const makeInstance = (instance: iInstancePayload): IInstance => {
  const {
    id,
    status,
    direction,
    date,
    time,
    start_point,
    end_point,
    driver,
    customer,
    passengers,
    stopping_points,
    desired_vehicle,
    price_details,
    schedule,
    driver_notes,
    stops_and_passengers,
  } = instance;
  const dateTime = moment(`${date} ${time}`);
  const startTime = dateTime.format('HH:mm');
  const dayOfWeek = dateTime.format('dddd');
  const points: IPoint[] = [];
  const lastPointIndex = (stopping_points.legs || 0) + 1;

  const findPassengerById = (id: string) => passengers.find(pass => pass.id === id);

  const startPoint = {
    id: -1,
    label: start_point.label,
    latitude: start_point.location.lat,
    longitude: start_point.location.lng,
    placeholder: 'Start Point',
    dateTime: '',
    location: { lat: 0, lng: 0 },
    status: calcStatusOriginPoint(status),
    passengers: stops_and_passengers[0]?.map((id: string) => findPassengerById(id))
  };
  points.push(startPoint);

  stopping_points?.map((stop: IStoppingPoint, index: number): void => {
    points.push({
      id: stop.id,
      label: stop.address.label,
      latitude: stop.address.location.lat,
      longitude: stop.address.location.lng,
      dateTime: '',
      location: { lat: 0, lng: 0 },
      status: stop.status,
      passengers: stops_and_passengers[index + 1]?.map((id: string) => findPassengerById(id))
    });
  });
  const lastPoint = points[points.length - 1];

  const endPoint = {
    id: -2,
    label: end_point.label,
    latitude: end_point.location.lat,
    longitude: end_point.location.lng,
    placeholder: 'End Point',
    status: calcStatusDestinationPoint(status, lastPoint.status),
    passengers: stops_and_passengers[lastPointIndex]?.map(id => findPassengerById(id))
  };
  points.push(endPoint);

  const endTime = dateTime.format('HH:mm');

  const tripData = {
    original: { ...start_point, coordinates: start_point?.location },
    stops: stopping_points.map(el => ({ ...el, location: el?.address, coordinates: el?.address?.location })),
    destination: { ...end_point, coordinates: end_point?.location }
  };

  const scheduleInfo = schedule ? {
    excludeDays: schedule.days?.map((dayIndex: any) => IndexMapToDay[dayIndex]),
    type: repeatUnitText[schedule.repeat_unit],
    startDate: dateTime,
    endDate: moment(schedule.ending_date),
  } : null;

  return {
    id,
    startTime,
    endTime,
    customer,
    points,
    driver,
    tripData,
    passengers,
    status,
    dayOfWeek,
    direction,
    priceDetails: price_details,
    carType: desired_vehicle?.vehicle_type,
    travelDate: dateTime,
    schedule: scheduleInfo,
    driverNotes: driver_notes
  };
};

export const handlePhone = (phone?: string) => {
  if (!phone) return;
  const phoneLink = `tel:${phone}`;
  Linking.canOpenURL(phoneLink).then(supported => {
    if (!supported) {
      Alert.alert('Phone number is not available');
    } else {
      return Linking.openURL(phoneLink);
    }
  }).catch(err => console.log(err));
};

export const getStatus = (status: TripStatus) => {
  switch (status) {
  case 'Done':
    return 'הסתיימה';
  case 'Started':
    return 'החלה';
  default:
    return 'טרם החלה';
  }
};
