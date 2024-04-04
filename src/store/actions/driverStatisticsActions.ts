export const actions = {
  DRIVER_STATISTICS_GET: 'DRIVER_STATISTICS_GET',
};


interface IDriverStatistics{
  (queryParams: any,
    callback?: any,
    hasBusyIndicator?: any,
  price_details?: any,
  ): any
}


export const getDriverStatistics: IDriverStatistics = (queryParams, callback, hasBusyIndicator, price_details) => ({
  type: actions.DRIVER_STATISTICS_GET,
  queryParams,
  callback,
  hasBusyIndicator,
  priceDetails: price_details,
});
