import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

export default class Component6 extends Component{
    render(){
        const{name, email, username, address} = this.props.navigation.state.params;
        return(
            <View>  
                <Text>{name}</Text>
                <Text>{email}</Text>
            </View>
        )
    }
}

AppRegistry.registerComponent('swift', () => swift);