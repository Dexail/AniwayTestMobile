export const modalsActionsType = {
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
};
export const openPopupMenu = () => ({
  type: modalsActionsType.OPEN_MODAL,
});

export const closePopupMenu = () => ({
  type: modalsActionsType.CLOSE_MODAL,
});
