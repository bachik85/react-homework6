const HANDLE_MODAL = 'HANDLE_MODAL';
const HANDLE_MODAL_DEL = 'HANDLE_MODAL_DEL';

export const MODULE_NAME = 'emerge';
export const selectModal = state => state[MODULE_NAME].stateModal;
export const selectModalDel = state => state[MODULE_NAME].stateModalDel;


const initialState = {
  stateModal: false,
  stateModalDel: false
}

export function reducer (state = initialState, { type, payload}) {
  switch (type) {
    case HANDLE_MODAL:
      return {
        ...state,
        stateModal: payload
      }
    case HANDLE_MODAL_DEL:
      return {
        ...state,
        stateModalDel: payload
      }
    default:
      return state
  }
}

export const setStateModal = payload => ({
  type: HANDLE_MODAL,
  payload
});

export const setStateModalDel = payload => ({
  type: HANDLE_MODAL_DEL,
  payload
})