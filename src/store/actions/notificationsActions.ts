export const SHOW_MESSAGE = 'SHOW_MESSAGE';

export const showMessage = (logo: string, title: string, description: string) => ({
  type: SHOW_MESSAGE,
  payload: { logo, title, description },
});
