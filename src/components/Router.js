import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from './Login';
import SignUp from './SignUp';
import Home from './Home.js'

class RouterComponent extends Component {
    render() {
        return (
            <Router>
                <Scene key="root" hideNavBar>
                    <Scene key="auth" hideNavBar>
                        <Scene key="login" component={Login} initial />
                        <Scene key="signup" component={SignUp}/>
                    </Scene>
                    <Scene key="main" hideNavBar>
                        <Scene key="home" component={Home} initial />
                    </Scene>
                </Scene>
            </Router>

        );
    }
}

export default RouterComponent;