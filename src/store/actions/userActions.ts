export const actions = {
  CHANGE_TRACKING_STATE: 'CHANGE_TRACKING_STATE',
};

interface IChangeTrackingState {
  (state: boolean): any
}

export const changeTrackingState: IChangeTrackingState = (state: boolean) => ({
  type: actions.CHANGE_TRACKING_STATE,
  payload: state
});
