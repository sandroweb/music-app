import { applyMiddleware, compose, createStore, Store, StoreEnhancer } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { getReducer } from './Reducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
  }
}

const devTools: Function = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware: StoreEnhancer = applyMiddleware(thunk, promiseMiddleware);

const getMiddleware = () => {
  return devTools(middleware);
};

const getStore = (): Store => {
  return createStore(getReducer(), getMiddleware());
};

export { getStore };
