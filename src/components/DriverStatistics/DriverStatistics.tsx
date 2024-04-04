import React, { JSX } from 'react';
import { DriverStatisticElement } from 'components/DriverStatistics/components/DriverStatisticElement';
import { useTranslation } from 'react-i18next';
import { IDriverStatistics } from 'store/slices/driverStatistics';

export interface IDriverStatisticsProps {
  navigateTo: (name: string) => void;
  driverStatistics: IDriverStatistics;
}

export default function DriverStatistics({ navigateTo, driverStatistics }: IDriverStatisticsProps): JSX.Element {
  const { t } = useTranslation();

  return (<>
    <DriverStatisticElement title={t('common:total-income')} icon={'dollarIcon'} value={driverStatistics?.driver_total ? driverStatistics.driver_total : 0} symbol={'₪'}/>
    <DriverStatisticElement title={t('common:future-income-from-planned-travel')} icon={'walletPlusIcon'} value={driverStatistics?.driver_total_not_done ? driverStatistics?.driver_total_not_done : 0} symbol={'₪'}/>
    <DriverStatisticElement title={t('common:planned-trips')} icon={'carTwoIcon'} value={
      driverStatistics && driverStatistics.status_all && driverStatistics.status_canceled && driverStatistics.status_done ?
        driverStatistics.status_all - driverStatistics.status_canceled - driverStatistics.status_done : 0}/>
    <DriverStatisticElement title={t('common:travels-have-been-made')} icon={'carsIcon'} value={driverStatistics?.status_done ? driverStatistics.status_done : 0}/>
  </>);
}
