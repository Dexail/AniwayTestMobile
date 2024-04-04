import React from 'react';
import Toast, { BaseToast, ToastConfig } from 'react-native-toast-message';
import styles from './styles';

const config: ToastConfig = {
  info: (props) => (
    <BaseToast
      {...props}
      style={styles.commonStyle}
      contentContainerStyle={styles.info}
      text1Style={styles.textStyle}
      text2Style={styles.textStyle}
    />
  ),
  success: (props) => (
    <BaseToast
      {...props}
      style={styles.commonStyle}
      contentContainerStyle={styles.success}
      text1Style={styles.textStyle}
      text2Style={styles.textStyle}
    />
  ),
  error: (props) => (
    <BaseToast
      {...props}
      style={styles.commonStyle}
      contentContainerStyle={styles.error}
      text1Style={styles.textStyle}
      text2Style={styles.textStyle}
    />
  ),
};

const Notifications = () => <Toast visibilityTime={7000} config={config} />;

export default Notifications;
