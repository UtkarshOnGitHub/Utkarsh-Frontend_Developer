import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducer';

export const Store = createStore(reducers, applyMiddleware(thunk));