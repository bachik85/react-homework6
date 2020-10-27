import axios from 'axios';

const SET_PRODUCTS = 'SET_ITEMS';
const SET_FAVORITES = 'SET_FAVORITES';
const SET_CART = 'SET_CART';
const CLEAR_CART = 'CLEAR_CART';


export const MODULE_NAME = 'productList';
export const selectProductList = state => state[MODULE_NAME].products;
export const selectProductFavorites = state => state[MODULE_NAME].favorites;
export const selectProductCart = state => state[MODULE_NAME].cart;

const initialState = {
  products: [],
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],
  cart: JSON.parse(localStorage.getItem('cart')) || []
}

export function reducer(state = initialState, {type, payload}) {
  switch (type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: payload
      }
    case SET_FAVORITES:
      return {
        ...state,
        favorites: [...payload]
      }
    case SET_CART:
      return {
        ...state,
        cart: [...payload]
      }
    case CLEAR_CART:
      return {
        ...state,
        cart: []
      }
    default:
      return state
  }
}

export const setProducts = payload => ({
  type: SET_PRODUCTS,
  payload
});

export const setFavorites = payload => ({
  type: SET_FAVORITES,
  payload
});

export const setCart = payload => ({
  type: SET_CART,
  payload
});

export const clearCart = payload => ({
  type: CLEAR_CART,
  payload
});

export const getProducts = () => async dispatch => {
  try {
    const {data} = await axios.get('GUNS_DATA.json');
    dispatch(setProducts(data))
  } catch (error) {
    console.log(error);
  }
}

export const deleteCart = () => dispatch => {
  dispatch(clearCart());
  console.log('ЗАКАЗАНЫЕ ТОВАРЫ:', localStorage.getItem('cart'));
  localStorage.removeItem('cart');
}

