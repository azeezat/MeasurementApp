import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase'
import Router from './Router';
// import Navigator from './navigation/AppNavigator';
import reducers from '../reducers';

class RootComponent extends Component {

    componentWillMount() {
        const config = {
            apiKey: "AIzaSyDNowCH72TU5LjVXo9ocpZ8MBZUyz_x48o",
            authDomain: "measurementapp-aziziraheem.firebaseapp.com",
            databaseURL: "https://measurementapp-aziziraheem.firebaseio.com",
            projectId: "measurementapp-aziziraheem",
            storageBucket: "measurementapp-aziziraheem.appspot.com",
            messagingSenderId: "761925007405"
        };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        )
    }
}

export default RootComponent;