import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux'; // we need this for react-router
import countries from './countries';
import greets from './greets';

// Combine all our reducers togeher
const rootReducer = combineReducers({ countries, greets, routing: routerReducer });

export default rootReducer;
