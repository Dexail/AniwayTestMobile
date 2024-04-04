import React, { JSX } from 'react';
import { useRoute } from '@react-navigation/native';
import { HStack } from '@react-native-material/core';
import { useTranslation } from 'react-i18next';
import Routes from 'app-enums/routes';

//Styles
import driverFooterStyles from 'assets/styles/driverFooterStyles';

//Components
import FooterDriverElement from 'components/FooterDriver/Components/FooterDriverElement';

export interface IFooterNavigationProps {
    navigateTo: (name: string) => void;
}

export default function FooterDriver({ navigateTo }: IFooterNavigationProps): JSX.Element {
  const { t } = useTranslation();
  const route = useRoute();

  return <HStack style={driverFooterStyles.content}>
    <FooterDriverElement
      title={t('common:home')}
      onClick={navigateTo}
      namePage={Routes.driverHome}
      currentPage={route.name}
      disabled={false}
      icon={'home-sharp'} />
    <FooterDriverElement
      title={t('common:travels')}
      onClick={navigateTo}
      namePage={Routes.driverTravels}
      currentPage={route.name}
      icon={'car'} />
    <FooterDriverElement
      title={t('common:alerts')}
      onClick={navigateTo}
      namePage={Routes.driverAlerts}
      currentPage={route.name}
      disabled={true}
      icon={'notifications'} />
    <FooterDriverElement
      title={t('common:private-area')}
      onClick={navigateTo}
      namePage={Routes.driverPrivateArea}
      currentPage={route.name}
      disabled={true}
      icon={'person'} />
  </HStack>;
}
