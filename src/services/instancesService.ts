import Toast from 'react-native-toast-message';
import { ClbFn, SetStateFn } from 'types/common';
import { ordersActions } from 'store/slices/orders';
import store from 'store/store';
import i18n from 'services/i18n';

export interface IUpdateInstanceData {
  id: number;
  driver: string;
  vehicle: number;
}

const updateInstanceStatus = async (setState: SetStateFn, data: { id: number, status: string }) => {
  setState({ statusLoading: true });
  // const { id, status } = data;
  // const response = await request({ key: 'status_update_instance', params: { id }, data: { status }});

  // if (response?.status === 200) {
  //   store.dispatch(ordersActions.updateStatus({ id, status }));
  // } else {
  //   Toast.show({ type: 'error', text1: `${i18n.t('toasts:error')}`, text2: `${i18n.t(response.data)}` });
  // }
  setState({ popup: false });
  setState({ statusLoading: false });
};

const updateInstanceWayPointStatus = async (setState: SetStateFn, data: { id: number, status: string }) => {
  setState({ statusLoading: true });
  // const { id, status } = data;
  // let success = id < 0;
  // let responseData = null;
  // if(!success){
  //   const response = await request({ key: 'status_update_waypoint_instance', params: { id }, data: { status }});
  //   success = response?.status === 200;
  //   responseData = response.data;
  // }
  // if (success) {
  //   store.dispatch(ordersActions.updateWaypointStatus({ id, status }));
  // } else {
  //   Toast.show({ type: 'error', text1: `${i18n.t('toasts:error')}`, text2: `${i18n.t(responseData)}` });
  // }
  setState({ popup: false });
  setState({ statusLoading: false });
};

const updateInstance = async (setState: SetStateFn, data: IUpdateInstanceData) => {
  setState({ statusLoading: true });
 // const { id, driver, vehicle } = data;
 // const response = await request({ key: 'update_instance', params: { id }, data: { driver, vehicle } });
  setState({ popup: false });
  setState({ statusLoading: false });
};

export default {
  updateInstanceStatus,
  updateInstanceWayPointStatus,
  updateInstance,
};

