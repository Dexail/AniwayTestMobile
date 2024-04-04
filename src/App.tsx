import React from 'react';
import { Linking, I18nManager, Platform } from 'react-native';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import moment from 'moment/moment';
import { NavigationContainer } from '@react-navigation/native';
import Notifications from 'components/Notifications';
import { requestLocationPermission } from 'utils/permission';
import Router from 'screens/Router';
import i18n from 'services/i18n';
import { Amplify } from 'aws-amplify';
import store from './store/store';
import 'moment/locale/he';
// import { withAuthenticator } from 'aws-amplify-react-native';

// // Get the aws resources configuration parameters
//import { enableLatestRenderer } from 'react-native-maps';
import firebase from '@react-native-firebase/app';
import { awsconfig } from './services/aws';
import Message from 'components/message/message';

const RNIOSfirebaseConfig = {
  apiKey: 'AIzaSyDCQY1v1FGIacOh3Lymjin4yEI6yjoavOs',
  authDomain: 'aniway-mobility.firebaseapp.com',
  projectId: 'aniway-mobility',
  storageBucket: 'aniway-mobility.appspot.com',
  messagingSenderId: '1085922084610',
  appId: '1:1085922084610:ios:b661663532757cbdee641b',
  databaseURL: '1085922084610'
};
const RNAndroidfirebaseConfig = {
  apiKey: 'AIzaSyBVJwksxXz3YZh0P0g-WUynPwCq4dO7-Ks',
  authDomain: 'aniway-mobility.firebaseapp.com',
  projectId: 'aniway-mobility',
  storageBucket: 'aniway-mobility.appspot.com',
  messagingSenderId: '1085922084610',
  appId: '1:1085922084610:ios:b661663532757cbdee641b',
  databaseURL: '1085922084610'
};
const RNfirebaseConfig = Platform.OS === 'android' ? RNAndroidfirebaseConfig : RNIOSfirebaseConfig;
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(RNfirebaseConfig, { name: '[DEFAULT]' });
} else {
  app = firebase.app();
}

//enableLatestRenderer();
Amplify.configure(awsconfig);

const App = () => {
  const navigationRef = React.createRef<any>();
  moment.locale('he');

  React.useEffect(() => {
    I18nManager.forceRTL(true);
    requestLocationPermission();
  }, []);

  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <NavigationContainer ref={navigationRef}>
          <Router/>
        </NavigationContainer>
      </I18nextProvider>
    </Provider>
  );
};
export default App;
// export default withAuthenticator(App,{
//   authenticatorComponents: [MyComponents]
// });
