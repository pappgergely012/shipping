import  { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from "redux-thunk";

import ProductReducer from './ProductReducer';
import ProfileReducer from './ProfileReducer';

const rootReducer = combineReducers({
  products: ProductReducer,
  profile: ProfileReducer
});

let composeEnhancers = compose;

if (process.env.NODE_ENV) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
}

export default configureStore;

