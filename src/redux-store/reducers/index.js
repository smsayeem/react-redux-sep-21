import { combineReducers } from 'redux';
import { allProductReducer, selectProductReducer } from './productReducers';

export default combineReducers({
  allProducts: allProductReducer,
  product: selectProductReducer,
});
