const SET_FORM_VALUES = 'SET_FORM_VALUES';

export const MODULE_NAME = 'formValues';
export const selectFormValues = state => state[MODULE_NAME].values;

const initialState = {
    values:{
        firstname:"",
        lastname:"",
        age:"",
        deliveryAddress:"",
        phoneNumber:""
    }
}

export function reducer(state = initialState, { type, payload }) {
    switch(type) {
        case SET_FORM_VALUES:
            return{
                ...state,
                values: payload
            }
        default:
            return state
    }
};

export const setFormValues = payload => ({
    type: SET_FORM_VALUES,
    payload
})