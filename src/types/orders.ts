import { ICustomer } from 'types/user';
import { Moment } from 'moment';

export enum TSE {
  'started'= 'Started',
  'notDone' = 'Not Done',
  'approved' = 'Approved',
  'goingToStart' = 'GoingToStart',
  'waitingStart' = 'WaitingStart',
  'done' = 'Done',
  'canceled' = 'Canceled'
}

export enum TSEWAYPOINT {
  'Done'= 'Done',
  'GoToPoint' = 'GoToPoint',
  'None' = 'None'
}

export type WaypointStatus = TSEWAYPOINT.Done | TSEWAYPOINT.GoToPoint | TSEWAYPOINT.None;


export type TripStatus = TSE.started | TSE.notDone | TSE.done | TSE.canceled | TSE.goingToStart | TSE.waitingStart | TSE.approved;

export enum TYPENOTIFICATION {
  cancel_order = 'cancel_order',
  createorder = 'createorder',
  assign_driver = 'assign_driver'
}

export interface IInstances {
  id: number;
  date: string;
  trip_name: string;
  trip_type: string;
  startTime: string;
  endTime: string;
  status: TripStatus;
  startAddress: string;
  endAddress: string;
  passengers: any[];
  driver: IDriver | null;
  vehicle: IVehicle | null;
  priceDetails: IPriceDetails | null;
  points: IPoint[];
}

interface IDriver {
  id: string;
  first_name: string;
  last_name: string;
  phone_number?: string;
  unmanaged_profile_id: string;
}

export interface ILocation { lat: number; lng: number }

export interface IPassenger {
  id: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  address: {
    label: string;
    location: ILocation;
  };
  waypoint_order: number;
}

export interface IStoppingPoint {
  id: string;
  address: {
    label: string;
    location: ILocation;
  };
  waypoint_order: number;
  passengers: IPassenger;
  legs: any;
  status: TSEWAYPOINT
}

interface IVehicle {
  id: number;
  code: string;
  color: string;
  license_number: string;
  default_driver: IDriver;
  is_deleted: boolean;
  owner: {
    id: number;
    name: string;
    full_name: string;
  };
  type: {
    id: number;
    vehicle_type: string;
  };
}

export interface iInstancePayload {
  id: number;
  date: string;
  time: string;
  status: TripStatus;
  direction: Direction;
  customer: ICustomer;
  driver: IDriver;
  passengers: IPassenger[];
  stopping_points: IStoppingPoint[];
  stops_and_passengers: string[][];
  passenger_end_point: string | null;
  passenger_start_point: string | null;
  start_point: { label: string; location: ILocation };
  end_point: { label: string; location: ILocation };
  price_details: IPriceDetails | null;
  schedule: null | any;
  desired_vehicle: {
    id: number;
    vehicle_type: string;
  };
  driver_notes: string;
}

export interface ILocationContainer{
  label: string;
  location: ILocation
}

export interface IPoint {
  id: string;
  label: string;
  latitude: number;
  longitude: number;
  dateTime: string;
  passengers?: IPassenger[];
  location: ILocation;
  placeholder?: string;
  done?: boolean;
  status:TSEWAYPOINT;
}

export interface IMapLocation {
  latitude: number;
  longitude: number;
}

export interface IInstance {
  id: number;
  startTime: string;
  endTime: string;
  status: TripStatus;
  points: IPoint[];
  driver: IDriver;
  schedule: null | any;
  customer: ICustomer;
  direction: Direction;
  tripData: {
    original: any;
    stops: any;
    destination: any;
  }
  passengers: IPassenger[];
  carType: string,
  travelDate: Moment;
  dayOfWeek: any;
  driverNotes: string;
  priceDetails: IPriceDetails | null;
}

export interface IInstancesPayload {
  id:                   number;
  created_at:           Date;
  trip_name:            string;
  trip_type:            string;
  customer:             Customer;
  start_point:          IPoint;
  end_point:            IPoint;
  date:                 string;
  time:                 string;
  driver:               IDriver | null;
  driver_location:      null;
  driver_direction:     null;
  vehicle:              IVehicle | null;
  status:               TripStatus;
  direction:            Direction;
  is_editable:          boolean;
  is_cancelable:        boolean;
  stopping_points:      any[];
  passengers_count:     number;
  passengers:           any[];
  driver_price:         null;
  customer_price:       null;
  desired_vehicle:      null;
  driver_notes:         null;
  stops_and_passengers: string[][];
  price_details:        IPriceDetails | null;
  driver_details:       null;
}

export interface Customer {
  id:        number;
  name:      string;
  full_name: string;
}

export interface Direction {
  routes:             IRoute[];
  status:             string;
  geocoded_waypoints: IGeocodedWaypoint[];
}

export interface IGeocodedWaypoint {
  types:           string[];
  place_id:        string;
  geocoder_status: string;
}

export interface IRoute {
  legs:              ILeg[];
  bounds:            IBounds;
  summary:           string;
  warnings:          any[];
  copyrights:        string;
  waypoint_order:    number[];
  overview_polyline: IPolyline;
}

export interface IBounds {
  northeast: ILocation;
  southwest: ILocation;
}

export interface ILeg {
  steps:               IStep[];
  distance:            IDistance;
  duration:            IDistance;
  end_address:         string;
  end_location:        ILocation;
  via_waypoint:        any[];
  start_address:       string;
  start_location:      ILocation;
  traffic_speed_entry: any[];
}

export interface IDistance {
  text:  string;
  value: number;
}

export interface IStep {
  distance:          IDistance;
  duration:          IDistance;
  polyline:          IPolyline;
  travel_mode:       ITravelMode;
  end_location:      ILocation;
  start_location:    ILocation;
  html_instructions: string;
  maneuver?:         string;
}

export interface IPolyline {
  points: string;
}

export enum ITravelMode {
  Driving = 'DRIVING',
}

export interface IPriceDetails {
  price: string,
  tax: string,
  total: string,
  customer_discount: string,
  discount_percent: string,
  kilometer_price: string,
  minute_price: string,
  station_price: string,
  daytime_price: string,
  tax_rate: string,
  driver_price: string
}
