import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';

import registerReducer from './registerReducer';

const rootReducer = combineReducers({registerReducer});

export default rootReducer;