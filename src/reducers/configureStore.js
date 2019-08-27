import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native


import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';


// Load middleware
let middleware = [
  thunk, // Allows action creators to return functions (not just plain objects)
];

if (__DEV__) {
  // Dev-only middleware
  middleware = [
    ...middleware,
    createLogger(), // Logs state changes to the dev console
  ];
}


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userData' ]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, undefined, compose(applyMiddleware(...middleware)));

persistStore(store);

export default store;