import React, { Component } from 'react'
import{
    View,
    Text,
    StyleSheet
} from 'react-native';

class Contact extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Contact</Text>
            </View>
        )
    }
}

export default Contact;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
}) 