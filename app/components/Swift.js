import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

export default class Swift extends Component{

  constructor(props){
      super(props);
      this.state = {
        name:'leon',
        showName: true,
        message: this.props.message
      }
  }

  static defaultProps = {
    message: 'Hi There'
  }

  render(){
    let name = this.state.showName ? this.state.name : 'No name';
    console.log('hello');

    return(

      <View>

        <Text>{this.state.message}</Text>
        <Text>{name}</Text>
        
      </View>

    )

  }

}

AppRegistry.registerComponent('Home', () => Home);