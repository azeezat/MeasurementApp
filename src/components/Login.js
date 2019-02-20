import React, { Component } from 'react';
import { Text, ImageBackground, KeyboardAvoidingView } from 'react-native';
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux';
import { Input, Button, CardSection } from './common';
import { loginUser, handleChange } from './actions';
import background from '../../assets/images/backgroundImage.jpg'
import Colours from './common/Colours';

class Login extends Component {

    onSignupClick = () => {
        Actions.signup()
    }

    loginUser = () => {
        const { email, password } = this.props
        this.props.loginUser({ email, password })
    }

    render() {
        console.log(this.props)
        const { container, headerTextStyle, signUpLinkStyle } = styles
        return (
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
                <ImageBackground source={background} style={container}>
                    <Text style={headerTextStyle}>Auna</Text>

                    <CardSection>
                        <Input 
                            placeholder="Email" 
                            iconName={"md-person"}
                            value={this.props.email}
                            onChangeText={text => this.props.handleChange({ prop: "email", value: text })}
                        />
                    </CardSection>

                    <CardSection>
                        <Input 
                            placeholder="Password" 
                            iconName={"md-lock"}
                            value={this.props.password}
                            onChangeText={text => this.props.handleChange({ prop: "password", value: text })}
                        />
                    </CardSection>

                    <CardSection>
                        <Button onPress={this.loginUser}>Login</Button>
                    </CardSection>

                    <CardSection>
                        <Text
                            onPress={this.onSignupClick}
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

const mapStateToProps = state => {
    const { email, password } = state.auth
    return { email, password }
}

export default connect(mapStateToProps, { loginUser, handleChange })(Login);