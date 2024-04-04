export const actions = {
  ORDERS_GET_ORDER_INSTANCES: "ORDERS_GET_ORDER_INSTANCES",
  UPDATE_ORDERS_ORDER_INSTANCE_STATUS: "UPDATE_ORDERS_ORDER_INSTANCE_STATUS",
  UPDATE_ORDERS_ORDER_INSTANCE_UNASSIGNED_STATUS: "UPDATE_ORDERS_ORDER_INSTANCE_UNASSIGNED_STATUS",
  UPDATE_ORDERS_ORDER_INSTANCE_STATUS_CANCEL: "UPDATE_ORDERS_ORDER_INSTANCE_STATUS_CANCEL",
  ORDERS_GET_ORDER_INSTANCES_COUNT: "ORDERS_GET_ORDER_INSTANCES_COUNT",
  ORDERS_GET_ORDER_INSTANCES_DETAILS: "ORDERS_GET_ORDER_INSTANCES_DETAILS",
};

interface IOrderInstances{
  (queryParams: any,
   callback?: any,
   hasBusyIndicator?: any,
    isIndependentDriver?: boolean): any
}

export const getOrderInstances: IOrderInstances = (queryParams, callback, hasBusyIndicator) => ({
  type: actions.ORDERS_GET_ORDER_INSTANCES,
  queryParams,
  callback,
  hasBusyIndicator,
  isIndependentDriver: false
});

export const getOrderUnAssignedInstances: IOrderInstances = (queryParams, callback, hasBusyIndicator) => ({
  type: actions.UPDATE_ORDERS_ORDER_INSTANCE_UNASSIGNED_STATUS,
  queryParams,
  callback,
  hasBusyIndicator,
  isIndependentDriver: true
});

export const changeOrderIndependentStatus = (idOrder: string, idOrderTest: number, isAssignment: boolean, vehicleId: number, isIndependent: boolean, filters: any, callback: any, isNotification?: boolean) => ({
  type: actions.UPDATE_ORDERS_ORDER_INSTANCE_STATUS,
  driver: idOrder,
  filters,
  id: idOrderTest,
  isIndependentD: isIndependent,
  callbackNewOne: callback,
  vehicleId,
  isAssignment,
  isNotification
});

export const changeOrderIndependentStatusCancel = (idOrder: number, isAssignment: boolean, vehicleId: number, isIndependent: boolean, filters: any, callback: any, isNotification?: boolean) => ({
  type: actions.UPDATE_ORDERS_ORDER_INSTANCE_STATUS_CANCEL,
  id: idOrder,
  filters,
  vehicleId,
  isIndependentD: isIndependent,
  callbackNewOne: callback,
  isAssignment,
  isNotification
});


interface IOrderInstancesCount{
  (queryParams: any,
   callback?: any,
   hasBusyIndicator?: any): any
}

export const getOrderInstancesCount: IOrderInstancesCount = (queryParams, callback, hasBusyIndicator) => ({
  type: actions.ORDERS_GET_ORDER_INSTANCES_COUNT,
  queryParams,
  callback,
  hasBusyIndicator,
});

interface IOrderInstancesDetails{
  (queryParams: any,
   callback?: any,
   hasBusyIndicator?: any): any
}

export const getOrderInstancesDetails: IOrderInstancesDetails = (queryParams, callback, hasBusyIndicator) => ({
  type: actions.ORDERS_GET_ORDER_INSTANCES_DETAILS,
  queryParams,
  callback,
  hasBusyIndicator,
});
