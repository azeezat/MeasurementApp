import React, { Component } from 'react';
import { Text, ImageBackground, KeyboardAvoidingView } from 'react-native';
import { Actions } from 'react-native-router-flux'
import { Input, Button, CardSection } from './common';
import background from '../../assets/images/backgroundImage.jpg'
import Colours from './common/Colours';

class Login extends Component {
    state = {
        fontLoaded: false,
    };

    _onSignupClick = () => {
        Actions.main()
    }
    render() {
        const { container, headerTextStyle, signUpLinkStyle } = styles
        return (
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
                <ImageBackground source={background} style={container}>
                    <Text style={headerTextStyle}>Auna</Text>

                    <CardSection>
                        <Input placeholder="Email" iconName={"md-person"} />
                    </CardSection>

                    <CardSection>
                        <Input placeholder="Password" iconName={"md-lock"} />
                    </CardSection>

                    <CardSection>
                        <Button>Login</Button>
                    </CardSection>

                    <CardSection>
                        <Text
                            onPress={this._onSignupClick}
                            style={signUpLinkStyle}
                        >
                            Sign Up
                    </Text>
                    </CardSection>



                </ImageBackground>
            </KeyboardAvoidingView>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        paddingRight: 20,
        alignItems: 'center',
        justifyContent: 'center',

    },
    headerTextStyle: {
        fontFamily: 'lobstar',
        color: Colours.button,
        fontSize: 40,
    },

    signUpLinkStyle: {
        color: Colours.button,
        textDecorationLine: 'underline',
        fontFamily: 'lobstar',
        fontSize: 16,
    },
}

export default Login;