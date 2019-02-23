import React, { Component } from 'react';
import { Text, ImageBackground, KeyboardAvoidingView} from 'react-native';
import { Actions } from 'react-native-router-flux'
import { Input, Button, CardSection, Message, Spinner } from '../common';
import { connect } from 'react-redux'
import { createUser, handleChange } from '../../actions';
import background from '../../../assets/images/backgroundImage.jpg'
import Colours from '../../constants/Colours';

class SignUp extends Component {
    _onBackClick = () => {
        Actions.auth()
    }

    signUpUser = () => {
        const { fullName, email, password } = this.props
        this.props.createUser({ fullName, email, password })
    }

    renderButton = () => {
        if (this.props.loading) {
            return <Spinner colour={Colours.button} />
        }
        else {
            return <Button onPress={this.signUpUser}>Sign Up</Button>
        }
    }

    renderError = () => {
        if (this.props.error) {
            return (
                <Message content={this.props.error} />
            )
        }
        if (this.props.password !== this.props.confirmPassword) {
            return (
                <Message content={"The passwords do not match"} />
            )
        }
    }

    render() {
        console.log(this.props)
        const { container, headerTextStyle, signUpLinkStyle } = styles
        return (
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>

                <ImageBackground source={background} style={container}>
                    <Text style={headerTextStyle}>Sign Up</Text>

                    <CardSection>
                        <Input
                            placeholder="Full names"
                            iconName={"md-person"}
                            onChangeText={text => this.props.handleChange({ prop: "fullName", value: text })}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            placeholder="Email"
                            iconName={"md-mail"}
                            onChangeText={text => this.props.handleChange({ prop: "email", value: text })}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            secureTextEntry
                            placeholder="Password" 
                            iconName={"md-lock"}
                            onChangeText={text => this.props.handleChange({ prop: "password", value: text })}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                        secureTextEntry
                            placeholder="Confirm Password"
                            iconName={"md-lock"}
                            onChangeText={text => this.props.handleChange({ prop: "confirmPassword", value: text })}
                        />
                    </CardSection>

                    {this.renderError()}

                    <CardSection>
                        {this.renderButton()}
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

mapStateToProps = (state) => {
    const { fullName, email, password,confirmPassword, error } = state.signUp
    const { loading } = state.activity
    return { fullName, email, password,confirmPassword, loading, error }

}

export default connect(mapStateToProps, { handleChange, createUser })(SignUp);