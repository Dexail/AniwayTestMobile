export enum Modules {
  USERS = '/users/api/v1',
  MANAGEMENT = '/management/api/v1',
  LOCATION = '/location/api/v1',
}

export enum Methods {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DEL = 'delete',
  PATCH = 'PATCH'
}

export type ApiMapValueType = {
  url: string;
  method: Methods;
  service: Modules;
};

export type ApiMapType = {
    [key: string]: ApiMapValueType;
};

export type ApiParamsTypeSaga = {
  apiMapRequest?: ApiMapValueType;
  params?: any;
  data?: any;
};
export type ApiParamsType = {
  key: string;
  params?: any;
  data?: any;
  isWithoutUser?: boolean;
};

export type ApiResponseType = {
  data: any;
  status: number;
};
