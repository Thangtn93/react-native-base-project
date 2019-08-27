import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/screens/index';
import store from './src/reducers/configureStore'
import { connect, Provider } from 'react-redux';
import { Router } from 'react-native-router-flux';

// let store = createStore(todoApp, applyMiddleware(thunk));
const RouterWithRedux = connect()(Router);


export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux scenes={Main} style={{ width: '100%', height: '100%', backgroundColor: '#fff', }} />

      </Provider>
    );
  }
}


