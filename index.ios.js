import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import App from './app';

export default class FreeKick extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('FreeKick', () => FreeKick);
