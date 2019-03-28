import { createStore, compse } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router-dom';

import rootReducer from './reducers/index';

// create and object for the default data

const defaultState = {
    userInfo: {        
        email: "",
        firstName: "",
        lastName: "",
        password: ""
    },
    accessToken: ""
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;