import React, {Component} from 'react';
import {AppRegistry, Text, View, TextInput, Switch} from 'react-native';

export default class Test extends Component{
    constructor(){
        super();
        this.state = {
           textValue: 'Hello',
           switchValue: false
        }
    }

    onChangeText(value){
       this.setState({
         textValue:value
       })
    }

    onSubmit(){
      console.log('Input Submitted')
    }

    onsSwitchChange(value){
      this.setState({
        switchValue:value
      })
    }

    render(){
        return(
            <View>  
                <TextInput
                  placeholder='Enter Text' 
                  value={this.state.textValue}
                  onChangeText={(value) => this.onChangeText(value)}
                  onSubmitEditing={this.onSubmit}
                />
                <Text>{this.state.textValue}</Text> 
                <Switch
                  value={this.state.switchValue}
                  onValueChange={(value) => this.onsSwitchChange(value)}
                />
            </View>
        )
    }
}

AppRegistry.registerComponent('swift', () => swift);