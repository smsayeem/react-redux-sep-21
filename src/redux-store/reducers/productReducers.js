import { actionTypes } from '../action-types';

const initialState = {
  products: [],
};

export const allProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return { ...state, products: payload };
    case actionTypes.FETCH_PRODUCTS_ERROR:
    default:
      return state;
  }
};

export const selectProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_SINGLE_PRODUCT_SUCCESS:
      return { ...state, ...payload };
    case actionTypes.REMOVE_PRODUCT:
      return {};

    default:
      return state;
  }
};
