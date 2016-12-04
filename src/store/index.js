import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from '../reducers';

export default function createAppStore(initialData = {}) {
  return createStore(rootReducers, initialData, applyMiddleware(thunk));
}