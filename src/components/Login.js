import React, { Component } from 'react';
import { Text, ImageBackground } from 'react-native';
import { Input, Button, CardSection } from './common';
import { Font } from 'expo';
import background from '../../assets/backgroundImage.jpg'

class Login extends Component {
    state = {
        fontLoaded: false,
    };

    async componentDidMount() {
        await Font.loadAsync({
            'lobstar': require('../../assets/fonts/Lobster-Regular.ttf'),
        });
        this.setState({ fontLoaded: true });
    }

    render() {
        const { container, headerTextStyle } = styles
        return (
            <ImageBackground source={background} style={container}>
                {this.state.fontLoaded ? <Text style={headerTextStyle}>Auna</Text> : null}
                <CardSection>
                    <Input placeholder="Email" label="hjdjj" iconName={"md-checkmark-circle"}/>
                </CardSection>

                <CardSection>
                    <Input
                        placeholder="Password"
                        iconName={"fa-user-circle"}
                        secureTextEntry
                    />
                </CardSection>

                <CardSection>
                    <Button>Login</Button>
                </CardSection>
                
            </ImageBackground>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTextStyle: {
        fontFamily: 'lobstar',
        color: 'purple',
        fontSize: 40,
    },
}

export default Login;