import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, 
    TouchableWithoutFeedback, StatusBar,
    TextInput, SafeAreaView, Keyboard, TouchableOpacity,
    KeyboardAvoidingView} from 'react-native';

export default class Login extends Component{
    
    static navigationOptions = {
        header:null
    }

    Press(){
        this.props.navigation.navigate('Forgot');
    }

    Landing(){
        this.props.navigation.navigate('Landing');
    }

    render(){

        const {
            container, 
            logoContainer, 
            logo, 
            infoContainer, 
            input, 
            buttonContainer, 
            buttonText, 
            forgot, 
        } = styles;

        return(
            <SafeAreaView style={container}>
                <StatusBar barStyle="light-content"/>
                    <TouchableWithoutFeedback style={container} onPress={Keyboard.dismiss}>
                        <View style={container}>
                            <View style={logoContainer}>
                                <Image style={logo} source={require('../images/swift.png')}>

                                </Image>
                            </View>
                            <View style={infoContainer}>
                                <TextInput style={input}
                                    placeholder='Email Address'
                                    placeholderTextColor="black"
                                    keyboardType="email-address"
                                    returnKeyType='next'
                                    autoCorrect={false}
                                    onSubmitEditing={()=> this.refs.txtPassword.focus()}
                                />
                                <TextInput style={input}
                                    placeholder='Password'
                                    placeholderTextColor="black"
                                    secureTextEntry
                                    returnKeyType='next'
                                    autoCorrect={false}
                                    ref={"txtPassword"}
                                />
                                <TouchableOpacity style={buttonContainer}  onPress={() => {this.Landing()}}>
                                    <Text style={buttonText}>SIGN IN</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => {this.Press()}}>
                                    <View style={forgot}>
                                        <Text style={{color: 'black',fontWeight: 'bold',fontSize: 13}}>
                                            Forgot Password or Email Address?
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'rgb(219, 220, 221)',
        flexDirection: 'column'
    },
    logoContainer:{
        marginTop: -200,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    logo: {
        width: 300,
        height: 100
    },
    infoContainer:{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 300,
        padding: 20,
    },
    forgot:{
        marginLeft: 55,
        marginTop: 30,
    },
    input:{
        height: 60,
        backgroundColor: 'white',
        color: 'black',
        marginBottom: 20,
        fontSize: 17,
        paddingHorizontal: 20
    },
    buttonText:{
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    buttonContainer:{
        backgroundColor: '#1de9b6',
        paddingVertical: 15,
        width: 100,
        marginTop:10,
        paddingTop:15,
        paddingBottom:15,
        marginLeft: 120,
        borderRadius: 50
    }

})