import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import createAppStore from './src/store';
import App from './src/App';

const store = createAppStore();

class ProviderApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('childsongs', () => ProviderApp);
