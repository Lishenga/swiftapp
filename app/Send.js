import React, { Component } from 'react'
import{
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    StatusBar, SafeAreaView,
    TouchableWithoutFeedback,
    Picker,
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

const searchIcon = (
    <TouchableOpacity style={{ marginLeft: 330, marginTop: -78, marginRight: 10}} >
        <Icon.Button
            name="search" 
            size={40} 
            color="black"
            backgroundColor="white" 
        />
    </TouchableOpacity>
        
)

export default class Send extends Component{
    static navigationOptions = {
        header:null
    }

    constructor() {
        super();
        this.state = {
          language: '',
        };
    }

    render(){
        return(
                <Swiper style={styles.wrapper} ref="swiper" showsPagination={false} loop={false}>
                    <SafeAreaView style={styles.container}>
                        <StatusBar barStyle="light-content"/>
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
                                onSubmitEditing={()=> this.refs.txtAmount.focus()}
                            > 
                            </TextInput>
                            {searchIcon}
                            <TouchableOpacity onPress={() => this.refs.swiper.scrollBy(1)} style={styles.buttonContainers}>
                                <Text style={styles.buttonText}>Next</Text>
                            </TouchableOpacity>
                    </SafeAreaView>
                    <SafeAreaView style={styles.container}>
                        <StatusBar barStyle="light-content"/>
                            <View style={styles.head}>
                                <Text style={{ marginLeft: 140, marginTop: 20, fontWeight: 'bold',fontSize: 18 }}>SEND MONEY</Text>
                                <TouchableOpacity style={{marginTop: -30, marginLeft: 10, width: 30}} onPress ={()=> this.props.navigation.dispatch(DrawerActions.openDrawer())}>
                                    {menuIcon}
                                </TouchableOpacity>
                            </View>
                            <View style={styles.forgot}>
                                <Text style={{color: 'black',fontWeight: 'bold',fontSize: 15, marginLeft: 80}}>
                                    Amount
                                </Text>
                            </View>
                            <TextInput style={styles.input}
                                placeholder='Amount'
                                placeholderTextColor="black"
                                keyboardType="numeric"
                                returnKeyType='next'
                                autoCorrect={false}
                                ref={"txtAmount"}
                                onSubmitEditing={()=> this.refs.txtCard.focus()}
                            />
                            <TouchableOpacity onPress={() => this.refs.swiper.scrollBy(1)} style={styles.buttonContainer}>
                                <Text style={styles.buttonText}>Next</Text>
                            </TouchableOpacity>
                    </SafeAreaView>
                    <SafeAreaView style={styles.container}>
                        <StatusBar barStyle="light-content"/>
                            <View style={styles.head}>
                                <Text style={{ marginLeft: 140, marginTop: 20, fontWeight: 'bold',fontSize: 18 }}>SEND MONEY</Text>
                                <TouchableOpacity style={{marginTop: -30, marginLeft: 10, width: 30}} onPress ={()=> this.props.navigation.dispatch(DrawerActions.openDrawer())}>
                                    {menuIcon}
                                </TouchableOpacity>
                            </View>
                            <View style={styles.forgot}>
                                <Text style={{color: 'black',fontWeight: 'bold',fontSize: 15, marginLeft: 70, marginBottom: 40}}>
                                    Card to Use
                                </Text>
                            </View>
                            <Picker
                                style={styles.inputs}
                                selectedValue={this.state.language}
                                style={{ height: 60, width: 390, backgroundColor: 'white', marginBottom: 20, marginLeft: 10, marginRight: 50 }}
                                onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                                <Picker.Item label="MasterCard" value="MS" />
                                <Picker.Item label="Visa" value="UK" />
                                <Picker.Item label="UnionPay" value="KE" />
                            </Picker>
                            <TouchableOpacity onPress={() => this.refs.swiper.scrollBy(1)} style={styles.buttonContainer}>
                                <Text style={styles.buttonText}>Next</Text>
                            </TouchableOpacity>
                    </SafeAreaView>
                    <SafeAreaView style={styles.container}>
                        <StatusBar barStyle="light-content"/>
                            <View style={styles.head}>
                                <Text style={{ marginLeft: 140, marginTop: 20, fontWeight: 'bold',fontSize: 18 }}>SEND MONEY</Text>
                                <TouchableOpacity style={{marginTop: -30, marginLeft: 10, width: 30}} onPress ={()=> this.props.navigation.dispatch(DrawerActions.openDrawer())}>
                                    {menuIcon}
                                </TouchableOpacity>
                            </View>
                            <View style={styles.forgot}>
                                <Text style={{color: 'black',fontWeight: 'bold',fontSize: 15, marginLeft: 70}}>
                                    Password
                                </Text>
                            </View>
                            <TextInput style={styles.input}
                                placeholder='Password'
                                placeholderTextColor="black"
                                secureTextEntry
                                returnKeyType='Send'
                                autoCorrect={false}
                            />
                            <TouchableOpacity onPress={() => this.submit()} style={styles.buttonContainer}>
                                <Text style={styles.buttonText}>Send</Text>
                            </TouchableOpacity>
                    </SafeAreaView>
                </Swiper>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
    },
    head: {
        backgroundColor: 'white',
        height: 70
    },
    forgot:{
        marginLeft: 90,
        marginTop: 150,
    },
    inputs:{
        backgroundColor: 'white',
        color: 'black',
        bottom: 20,
        position: 'absolute',
        right: 20,
        left: 20,
        height: 60,
        marginTop: 40,
        marginBottom: 20, 
        marginLeft: 10,
        marginRight: 10,
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
        borderRadius: 50,
        marginTop: 30
    },
    buttonContainers:{
        backgroundColor: '#ec407a',
        paddingVertical: 15,
        width: 100,
        marginLeft: 150,
        borderRadius: 50,
        marginTop: 50
    }
  })