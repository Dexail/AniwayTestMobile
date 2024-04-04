export type UserRole = 'Aniel Admin' | 'Aniel Customer Manager' | 'Customer Representor' | 'Driver' | 'Passenger'

export interface IUser {
  id: string;
  unmanaged_profile_id: string;
  first_name: string;
  last_name: string;
  email: string;
  group?: UserRole;
  customer: ICustomer;
  is_disabled: boolean;
  managementDetails: IManagementDetails;
  driver_details: IDriverDetails;
  phone_number: number;
  isLockedScreen: boolean;
  is_independent: boolean;
  isTrackGeoLocation: boolean;
}

export interface IManagementDetails {
  invoice_email: null | string;
  date_of_birth: string | null;
  has_glasses: boolean | null;
  approved: boolean;
  discount_percent: number;
}


export interface ICustomer{
  id: number;
  name: string;
  full_name: string;
}

export interface IDriverDetails {
  invoice_email: string;
  licenses: string[];
  vehicle: IVehicle;
  has_glasses: boolean;
  date_of_birth: string;
  approved: boolean;
  customer_id: number;
}

export interface IVehicle {
  id: number;
  type: number;
  code: string;
  color: string;
}
