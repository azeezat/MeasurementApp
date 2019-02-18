import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from './Login';

class RouterComponent extends Component {
    render() {
        return (
            <Router>
                <Scene key="root" hideNavBar>
                    <Scene key="auth" hideNavBar>
                        <Scene key="login" component={Login} initial />
                    </Scene>
                </Scene>
            </Router>

        );
    }
}

export default RouterComponent;