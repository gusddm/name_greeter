import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router'
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';


/*
  Store

  Redux apps have a single store which takes
  1. All Reducers which we combined into `rootReducer`
  2. An optional starting state - similar to React's getInitialState
*/

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const configStore = function configureStore(initialState) {
  return createStore(
      rootReducer,
      initialState,
      applyMiddleware(thunk)
  );
}

const store = configStore();

/*
  Enable Hot Reloading for the reducers
  We re-require() the reducers whenever any new code has been written.
  Webpack will handle the rest
*/

if(module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export const history = syncHistoryWithStore(browserHistory, store);
export default store;
