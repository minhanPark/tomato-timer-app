import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timer from './Component/Timer';
import reducer from './reducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Timer />
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {

  },
});
