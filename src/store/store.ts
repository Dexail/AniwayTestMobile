import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
// import authSlice from './slices/auth';
// import userSlice from './slices/user';
// import popupMenuSlice from './slices/popupMenu';
import ordersSlice from './slices/orders';
// import driverStatisticsSlice from './slices/driverStatistics';
// import notificationsSlice from './slices/notifications';
//import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    orders: ordersSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ serializableCheck: false }),
 //   sagaMiddleware,
  ],
});

export type RootState = ReturnType<typeof store.getState>;

//sagaMiddleware.run(sagas);

export default store;

