import { createStore, applyMiddleware, combineReducers } from 'redux';

import { createLogger } from 'redux-logger';
import ThunkMiddleware from 'redux-thunk';

import tasks from './task';

const loggerMiddleware = createLogger();
const createStoreWithMiddleware = applyMiddleware(ThunkMiddleware, loggerMiddleware)(createStore);

const reducer = combineReducers({
    tasks
});

const configureStore = initialState => createStoreWithMiddleware(reducer, initialState);

export default configureStore;
