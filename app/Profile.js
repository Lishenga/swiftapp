import React, { Component } from 'react'
import{
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    StatusBar, SafeAreaView,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {createDrawerNavigator, DrawerActions} from 'react-navigation';
import Swiper from 'react-native-swiper';

const menuIcon = (
    <Icon
        name="menu" 
        size={40} 
        color="black" 
    />
)

class Profile extends Component{
    static navigationOptions = {
        header:null
    }
    render(){
        return(
                <Swiper style={styles.wrapper} ref="swiper" showsPagination={false} loop={false}>
                    <SafeAreaView style={styles.container}>
                        <View style={styles.head}>
                            <Text style={{ marginLeft: 140, marginTop: 20, fontWeight: 'bold',fontSize: 18 }}>SEND MONEY</Text>
                            <TouchableOpacity style={{marginTop: -30, marginLeft: 10, width: 30}} onPress ={()=> this.props.navigation.dispatch(DrawerActions.openDrawer())}>
                                {menuIcon}
                            </TouchableOpacity>
                        </View>
                        <View style={styles.forgot}>
                            <Text style={{color: 'black',fontWeight: 'bold',fontSize: 15, marginLeft: 30}}>
                                Receiver's Phone Number
                            </Text>
                        </View>
                        <TextInput style={styles.input}
                            placeholder='Phone Number'
                            placeholderTextColor="black"
                            keyboardType="numeric"
                            returnKeyType='next'
                            autoCorrect={false}
                            onSubmitEditing={()=> this.refs.txtPassword.focus()}
                        />
                        <TouchableOpacity onPress={() => this.refs.swiper.scrollBy(1)} style={styles.buttonContainer}>
                            <Text style={styles.buttonText}>Next</Text>
                        </TouchableOpacity>
                    </SafeAreaView>
                    <SafeAreaView style={styles.slide2}>
                        <Text style={styles.text}>Beautiful</Text>
                    </SafeAreaView>
                    <SafeAreaView style={styles.slide3}>
                        <Text style={styles.text}>And simple</Text>
                    </SafeAreaView>
                </Swiper>
        )
    }
}

export default Profile;

const styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB',
    },
    head: {
        backgroundColor: 'white',
        height: 70
    },
    forgot:{
        marginLeft: 90,
        marginTop: 150,
    },
    input:{
        height: 60,
        backgroundColor: 'white',
        color: 'black',
        marginBottom: 20,
        paddingHorizontal: 20,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 40,
    },
    container:{
        flex: 1,
        backgroundColor: 'rgb(219, 220, 221)',
        flexDirection: 'column'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5',
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9',
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    },
    buttonText:{
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    buttonContainer:{
        backgroundColor: '#ec407a',
        paddingVertical: 15,
        width: 100,
        marginLeft: 150,
        borderRadius: 50
    }
  })