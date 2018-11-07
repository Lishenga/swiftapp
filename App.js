import React, {Component} from 'react';
import {AppRegistry, Text, View, SafeAreaView, ScrollView, Dimensions, Image} from 'react-native';
import Component4 from './app/components/Component4';
import Component6 from './app/components/Component6';
import Component5 from './app/components/Component5';
import Home from './app/Home';
import Login from './app/Login';
import Splash from './app/Splash';
import Create from './app/Create';
import Forgot from './app/Forgot';
import Landing from './app/Landing';
import Profile from './app/Profile';
import Settings from './app/Settings';
import Contact from './app/Contact';
import Send from './app/Send';
import Cards from './app/Cards';
import Styles from './app/components/Styles';
import {createStackNavigator} from 'react-navigation';
import {createDrawerNavigator, DrawerItems} from 'react-navigation';

const CustomDrawerComponent = (props) =>(
  <SafeAreaView style={{flex: 1}}>
    <View style={{height: 150, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
      <Image source={require('./images/swift.png')} style={{height: 120, width: 120, borderRadius: 60}}/>
    </View>
    <ScrollView>
      <DrawerItems {...props}/>
    </ScrollView>
  </SafeAreaView>
)

const Draw = createDrawerNavigator({
    Home:{
      screen: Landing,
    },
    Profile:{
        screen: Profile
    },
    Settings:{
        screen: Settings
    },
    Contact:{
        screen: Contact
    },
},{
  contentComponent: CustomDrawerComponent
})

const Sender = createDrawerNavigator({
  Home:{
    screen: Landing,
  },
  Send:{
    screen: Send
  },
  Cards:{
    screen: Cards
  }
},{
contentComponent: CustomDrawerComponent
})

const Draws = createDrawerNavigator({
  Index:  Home,
  Create: Create,
  Forgot: Forgot
},{
  contentComponent: CustomDrawerComponent
})

const App = createStackNavigator({
  Index:  Home,
  Login:  Login,
  Tabs:  {
    screen: Draw,
  },
  Tab: Draws,
  Tabing: Sender
},
{
  headerMode: 'none',
});

export default class SwiftApp extends Component{
    render(){
        return(
          <App/>
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

AppRegistry.registerComponent('SwiftApp', () => SwiftApp);