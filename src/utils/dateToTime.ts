import moment from 'moment';

export interface IDateToTime{
    type: string;
    value: string;
    leftMinutes: number;
}

export enum DateToTimeTypes {
    Days = 'Days',
    Hours = 'Hours',
    Minutes = 'Minutes'
}

export default function dateToTime (inputDate: string): IDateToTime | null  {
  // const inputDate = '2023-09-18, 14:13';
  const currentDate = moment();
  const targetDate = moment(inputDate, 'YYYY-MM-DD, HH:mm');
  const duration = moment.duration(targetDate.diff(currentDate));
  const days = duration.days();
  const hours = duration.hours();
  const minutes = duration.minutes();

  if (duration.asSeconds() <= 0) {
    return null;
  } else if (days >= 1) {
    return { type: DateToTimeTypes.Days, value: `בעוד ${days} ${days === 1 ? 'יום' : 'ימים'}`, leftMinutes: (days * 60) * 60 };
  } else if (hours >= 1) {
    return { type: DateToTimeTypes.Hours, value: `בעוד ${hours} ${hours === 1 ? 'שעה' : 'שעות'}`, leftMinutes: hours * 60 };
  } else {
    return { type: DateToTimeTypes.Minutes, value: `בעוד ${minutes} ${minutes === 1 ? 'דקה' : 'דקות'}`, leftMinutes: minutes };
  }
}

export const formatTravelTime = (distance: number, speed = 60): IDateToTime => {
  const hours = distance / speed;
  const minutes = hours * 60;
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return { type: DateToTimeTypes.Days, value: `${days} ימים ליעד`, leftMinutes: (days * 60) * 60 };
  } else if (hours >= 1) {
    return { type: DateToTimeTypes.Hours, value: `${Math.floor(hours)} שעות ליעד`, leftMinutes: hours * 60 };
  } else {
    return { type: DateToTimeTypes.Minutes, value: `${Math.floor(minutes)} דקות ליעד`, leftMinutes: minutes };
  }
};
