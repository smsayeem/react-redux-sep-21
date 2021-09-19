import { actionTypes } from '../action-types';

export const fetchProductsAction = () => async (dispatch, getState) => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    dispatch({
      type: actionTypes.FETCH_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.error('Error in fetching products.', error);
    dispatch({
      type: actionTypes.FETCH_PRODUCTS_ERROR,
    });
  }
};

export const fetchSingleProduct = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      dispatch({
        type: actionTypes.FETCH_SINGLE_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.error('error in fetching single product', error);
      dispatch({
        type: actionTypes.FETCH_SINGLE_PRODUCT_ERROR,
      });
    }
  };
};

export const removeSelectedProductAction = () => {
  return {
    type: actionTypes.REMOVE_PRODUCT,
  };
};
