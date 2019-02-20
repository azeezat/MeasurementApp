import React, { Component } from 'react';
import { Text, ImageBackground, KeyboardAvoidingView } from 'react-native';
import { Actions } from 'react-native-router-flux'
import { Input, Button, CardSection } from './common';
import background from '../../assets/images/backgroundImage.jpg'
import Colours from './constants/Colours';

class SignUp extends Component {
    state = {
        fontLoaded: false,
    };

    _onBackClick = () => {
        Actions.auth()
    }

    render() {
        const { container, headerTextStyle, signUpLinkStyle } = styles
        return (
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>

                <ImageBackground source={background} style={container}>
                    <Text style={headerTextStyle}>Sign Up</Text>

                    <CardSection>
                        <Input placeholder="Full names" iconName={"md-person"} />
                    </CardSection>

                    <CardSection>
                        <Input placeholder="Email" iconName={"md-mail"} />
                    </CardSection>

                    <CardSection>
                        <Input placeholder="Password" iconName={"md-lock"} />
                    </CardSection>

                    <CardSection>
                        <Input placeholder="Confirm Password" iconName={"md-lock"} />
                    </CardSection>

                    <CardSection>
                        <Button>Sign Up</Button>
                    </CardSection>

                    <CardSection>
                        <Text
                            onPress={this._onBackClick}
                            style={signUpLinkStyle}
                        >
                            Back to Login
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

export default SignUp;