import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';
import Settings from './Settings';
import Contact from './Contact';
import Profile from './Profile';
import Landing from './Landing';
import {createDrawerNavigator} from 'react-navigation';

const Draw = createDrawerNavigator({
  Landing:{
      screen: Landing
  },
  Profile:{
      screen: Profile
  },
  Settings:{
      screen: Settings
  },
  Contact:{
      screen: Contact
  }
})

export default class swift extends Component{
    render(){
        return(
          <Draw/>
        )
    }
}

/*
export default createStackNavigator({
  home:{
    screen: swift
  }
})
*/

AppRegistry.registerComponent('swift', () => swift);