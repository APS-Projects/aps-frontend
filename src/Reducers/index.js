import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';

import registerReducer from './registerReducer';

const rootReducer = combineReducers({
    register: registerReducer
});

export default rootReducer;