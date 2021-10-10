import { actionTypes } from '../action-types/index';

const initialState = {
  searchTerm: '',
  searchResult: [],
  loading: false,
};

export const serachReducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.FETCH_SEARCH_SUCCESS:
      return {
        ...state,
        searchTerm: payload.term,
        searchResult: [...payload.result],
        loading: false,
      };
    case actionTypes.FETCH_SEARCH_ERROR:
      return {
        ...state,
        searchTerm: payload.term,
        searchResult: payload.result,
        loading: false,
      };
    case actionTypes.WAIT_FOR_DATA_FETCHING:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.DELETE_PREV_SEARCH_RESULT:
      return {
        ...state,
        searchResult: [],
        loading: false,
      };
    default:
      return state;
  }
};
