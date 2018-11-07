import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, 
    TouchableWithoutFeedback, StatusBar,
    SafeAreaView, Keyboard, TouchableOpacity,} from 'react-native';

export default class Home extends Component{

    static navigationOptions = {
        header:null
    }

    onPress(){
        this.props.navigation.navigate('Login');
    }

    Press(){
        this.props.navigation.navigate('Create');
    }

    render(){
        return(
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="light-content"/>
                    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                        <View style={styles.container}>
                            <View style={styles.logoContainer}>
                                <Image style={styles.logo} source={require('../images/lady3.jpg')}>
                                    
                                </Image>
                            </View>
                            
                            <View style={styles.infoContainer}>
                            <Image style={styles.logos} source={require('../images/home.png')}>

                            </Image>
                                <TouchableOpacity style={styles.buttonContainer} onPress={() => {this.onPress()}}>
                                    <Text style={styles.buttonText}>LOGIN</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttonContainers} onPress={() => {this.Press()}}>
                                    <Text style={styles.buttonTexts}>CREATE ACCOUNT</Text>
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
        backgroundColor: 'rgb(219, 220, 221)',
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black'
    },
    logo:{
        width: 500,
        height: 700
    },
    logos:{
        width: 200,
        height: 200,
        marginTop: -400,
        marginLeft: 140
    },
    infoContainer:{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 100,
        padding: 20,
        flex: 1, 
        flexDirection: 'row'
    },
    buttonText:{
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15
    },
    buttonTexts:{
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15
    },
    buttonContainer:{
        backgroundColor: '#ec407a',
        paddingVertical: 15,
        width: 100,
        marginLeft: -300,
    },
    buttonContainers:{
        backgroundColor: '#1de9b6',
        paddingVertical: 15,
        width: 170,
        marginLeft: 110,
    }
})