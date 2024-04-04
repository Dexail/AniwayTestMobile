import { IMapLocation } from 'types/orders';

export const bearingBetweenCoordinates = (coord1: IMapLocation, coord2: IMapLocation) => {
  const lat1: number = coord1.latitude;
  const lon1: number = coord1.longitude;
  const lat2: number = coord2.latitude;
  const lon2: number = coord2.longitude;

  const dLon = lon2 - lon1;
  const y = Math.sin(dLon) * Math.cos(lat2);
  const x =
    Math.cos(lat1) * Math.sin(lat2) -
    Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);

  return (Math.atan2(y, x) * 180) / Math.PI;
};

export const calculateDistance = (coord1: IMapLocation, coord2: IMapLocation): number => {
  const lat1: number = coord1.latitude;
  const lon1: number = coord1.longitude;
  const lat2: number = coord2.latitude;
  const lon2: number = coord2.longitude;
  const earthRadiusKm = 6371;

  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
    Math.cos(toRadians(lat2)) *
    Math.sin(dLon / 2) *
    Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return earthRadiusKm * c;
};

export const toRadians = (degrees: number) => {
  return (degrees * Math.PI) / 180;
};
