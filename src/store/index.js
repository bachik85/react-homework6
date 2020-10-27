import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import {reducer as productReducer, MODULE_NAME as productsModuleName} from './productListReduser';
import {reducer as emergeReducer, MODULE_NAME as emergeModuleName} from './emergeReduser';
import {reducer as formReducer, MODULE_NAME as formModuleName} from './formValues';


const rootReducer = combineReducers({
  [productsModuleName]: productReducer,
  [emergeModuleName]: emergeReducer,
  [formModuleName]: formReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));