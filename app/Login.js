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
        this.props.navigation.navigate('Home');
    }

    render(){
        return(
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="light-content"/>
                    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                        <View style={styles.container}>
                            <View style={styles.logoContainer}>
                                <Image style={styles.logo} source={require('../images/swift.png')}>

                                </Image>
                            </View>
                            <View style={styles.infoContainer}>
                                <TextInput style={styles.input}
                                    placeholder='Email Address'
                                    placeholderTextColor="black"
                                    keyboardType="email-address"
                                    returnKeyType='next'
                                    autoCorrect={false}
                                    onSubmitEditing={()=> this.refs.txtPassword.focus()}
                                />
                                <TextInput style={styles.input}
                                    placeholder='Password'
                                    placeholderTextColor="black"
                                    secureTextEntry
                                    returnKeyType='next'
                                    autoCorrect={false}
                                    ref={"txtPassword"}
                                />
                                <TouchableOpacity style={styles.buttonContainer}  onPress={() => {this.Landing()}}>
                                    <Text style={styles.buttonText}>LOGIN</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => {this.Press()}}>
                                    <View style={styles.forgot}>
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
    logo:{
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
        marginLeft: 80,
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
        width: 200,
        marginLeft: 90,
        borderRadius: 50
    }

})