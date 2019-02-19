import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from './Login';
import SignUp from './SignUp';

class RouterComponent extends Component {
    render() {
        return (
            <Router>
                <Scene key="root" hideNavBar>
                    <Scene key="auth" hideNavBar>
                        <Scene key="login" component={Login} initial />
                    </Scene>
                    <Scene key="main" hideNavBar>
                        <Scene key="signup" component={SignUp}/>
                    </Scene>
                </Scene>
            </Router>

        );
    }
}

export default RouterComponent;