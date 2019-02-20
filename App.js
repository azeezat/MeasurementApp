import React from 'react';
import RootComponent from './src/components/RootComponent';
import { AppLoading, Asset, Font } from 'expo';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  //Load application resources
  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/splash.png'),
        require('./assets/images/icon.png'),
      ]),
      Font.loadAsync({
        'lobstar': require('./assets/fonts/Lobster-Regular.ttf'),
      }),
    ]);
  };

  // In this case, you might want to report the error to your error
  // reporting service, for example Sentry
  _handleLoadingError = error => {
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } 
    else {
      return (
        <RootComponent />
      );
    }
  }

}

