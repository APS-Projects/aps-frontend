import { createStore, compse } from 'redux';
import rootReducer from './Reducers/rootReducer';

// create and object for the default data

const store = createStore(rootReducer);

export default store;