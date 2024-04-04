import { createSlice } from '@reduxjs/toolkit';
import { IInstances } from 'types/orders';
import detailsMock from './mock.json';

export interface IInitialState {
  myTravels: IInstances[];
  unAssignedTravels: IInstances[];
  hasMore: boolean;
  count: number;
  isLoading: boolean;
  details: any;//IInstance | null;
}

const initialState: IInitialState = {
  myTravels: [],
  unAssignedTravels: [],
  hasMore: false,
  details: detailsMock,
  isLoading: false,
  count: 0,
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    updateWaypointStatus: (state, { payload }) => {
      if (state.details && state.details.tripData && state.details.tripData?.stops > 0 && payload.id) {
        const data = { ...state.details };
        data.tripData?.stops.forEach((e: any) => {
          if (e.id === payload.id) {
            e.status = payload.status;
          }
        });
        const point = data.points.find((x:any) => x.id === payload.id);
        if(point) {
          point.status = payload.status;
        }
        state.details = {
          ...data
        };

      }

    },
    updateStatus: (state, action) => {
      if (state.details) state.details.status = action.payload.status;
      const index = state.myTravels.findIndex(item => item.id === action.payload.id);
      if (index >= 0) state.myTravels[index].status = action.payload.status;
    },
  },
});

export const ordersActions = ordersSlice.actions;

export default ordersSlice;
