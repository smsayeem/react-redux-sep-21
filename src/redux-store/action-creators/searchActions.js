import { actionTypes } from '../action-types/index';

const NPM_SEARCH_API_URL = 'https://registry.npmjs.org/-/v1/search?text=';

export const fetchSearchData = (term) => {
  return async (dispatch, getState) => {
    try {
      const api = NPM_SEARCH_API_URL + term;
      const response = await fetch(api);
      const data = await response.json();
      const payload = { term, result: data.objects };

      dispatch({
        type: actionTypes.FETCH_SEARCH_SUCCESS,
        payload,
      });
    } catch (error) {
      console.log('Error:', error);
      dispatch({
        type: actionTypes.FETCH_SEARCH_ERROR,
      });
    }
  };
};
