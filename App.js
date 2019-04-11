import React, { Component } from 'react';
import { AppRegistry, View, SafeAreaView, ScrollView, Image } from 'react-native';
import Component4 from './app/components/Component4';
import Component6 from './app/components/Component6';
import Component5 from './app/components/Component5';
import Header from './app/components/header';
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
import { createStackNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';
import Swift from './app/components/Swift';

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{ flex: 1 }}>

    <View style={{ height: 150, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>

      <Image source={require('./images/swift.png')} style={{ height: 120, width: 120, borderRadius: 60 }}/>

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
  Create: Create,
  Home:  Home,
  Forgot: Forgot
},{
  contentComponent: CustomDrawerComponent
})

const App = createStackNavigator({
  Home:  Home,
  Login:  Login,
  Send: Send,
  Tabs:  {
    screen: Draw,
  },
  Tab: Draws,
  Tabing: Sender
},
{
  headerMode: 'none',
});

const Apps = () =>(
  <View style={{flex: 1}}>
    <Header headerText={'albums'} />
    <Swift />
  </View>
)

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