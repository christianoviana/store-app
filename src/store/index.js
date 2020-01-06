import {createStore} from 'redux';
import {appReducers} from '../reducers/appReducers';

export const Store = createStore(appReducers, 
                          window.__REDUX_DEVTOOLS_EXTENSION__ && 
                          window.__REDUX_DEVTOOLS_EXTENSION__());

