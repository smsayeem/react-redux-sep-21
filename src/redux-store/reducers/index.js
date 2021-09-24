import { combineReducers } from 'redux';
import { allProductReducer, selectProductReducer } from './productReducers';
import { serachReducers } from './searchReducers';

export default combineReducers({
  allProducts: allProductReducer,
  product: selectProductReducer,
  searchNpm: serachReducers,
});
