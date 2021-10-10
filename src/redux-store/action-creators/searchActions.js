import { actionTypes } from '../action-types/index';

const NPM_SEARCH_API_URL = 'https://registry.npmjs.org/-/v1/search?text=';

export const fetchSearchData = (term) => {
  return async (dispatch, getState) => {
    dispatch({
      type: actionTypes.WAIT_FOR_DATA_FETCHING,
    });
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
        payload: {
          term,
          result: 'Fetch error, please contact your system administrator',
        },
      });
    }
  };
};

export const deletePrevSearchResult = () => {
  return (dispatch) =>
    dispatch({
      type: actionTypes.DELETE_PREV_SEARCH_RESULT,
    });
};
