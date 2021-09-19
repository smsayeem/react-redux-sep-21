import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(thunk))
// );

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
