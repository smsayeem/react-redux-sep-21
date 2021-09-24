import { actionTypes } from '../action-types/index';

const initialState = {
  searchTerm: '',
  searchResult: [],
};

export const serachReducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.FETCH_SEARCH_SUCCESS:
      return {
        ...state,
        searchTerm: payload.term,
        searchResult: payload.result,
      };

    default:
      return state;
  }
};
