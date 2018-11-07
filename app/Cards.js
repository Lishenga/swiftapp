import React, { Component } from 'react'
import{
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    StatusBar, SafeAreaView,
    TouchableHighlight
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

const deleteIcon = (
    <Icon
        name="delete" 
        size={30} 
        color="black" 
    />
)

export default class Cards extends Component{
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
                                <Text style={{ marginLeft: 180, marginTop: 20, fontWeight: 'bold',fontSize: 18 }}>CARD</Text>
                                <TouchableOpacity style={{marginTop: -30, marginLeft: 10, width: 30}} onPress ={()=> this.props.navigation.dispatch(DrawerActions.openDrawer())}>
                                    {menuIcon}
                                </TouchableOpacity>
                            </View>
                            <View style={styles.forgot}>
                                <Text style={{color: 'black',fontWeight: 'bold',fontSize: 15, marginLeft: 90}}>
                                    Add Your Debit Card
                                </Text>
                            </View>
                            <TextInput style={styles.input}
                                placeholder='1234 5678 1234 5678'
                                placeholderTextColor="black"
                                keyboardType="numeric"
                                returnKeyType='next'
                                autoCorrect={false}
                                onSubmitEditing={()=> this.refs.txtYear.focus()}
                            /> 
                            <TouchableOpacity onPress={() => this.refs.swiper.scrollBy(1)} style={styles.buttonContainer}>
                                <Text style={styles.buttonText}>Next</Text>
                            </TouchableOpacity>
                            <View style={styles.forgot}>
                                <Text style={{color: 'black',fontWeight: 'bold',fontSize: 15, marginLeft: 120}}>
                                    My Cards
                                </Text>
                            </View>
                            <View style={styles.v3}>
                                <Text style={{marginLeft: 50, marginTop: 20}}>Visa</Text>
                                <Text style={{marginLeft: 140, marginTop: -20}}>6798</Text>
                                <Text style={{marginLeft: 240, marginTop: -20}}>{deleteIcon}</Text>
                                <Text style={{ marginLeft: 50,}}>debit</Text>
                            </View>
                    </SafeAreaView>
                    <SafeAreaView style={styles.container}>
                        <StatusBar barStyle="light-content"/>
                            <View style={styles.head}>
                                <Text style={{ marginLeft: 180, marginTop: 20, fontWeight: 'bold',fontSize: 18 }}>CARD</Text>
                                <TouchableOpacity style={{marginTop: -30, marginLeft: 10, width: 30}} onPress ={()=> this.props.navigation.dispatch(DrawerActions.openDrawer())}>
                                    {menuIcon}
                                </TouchableOpacity>
                            </View>
                            <View style={styles.forgot}>
                                <Text style={{color: 'black',fontWeight: 'bold',fontSize: 15, marginLeft: 90}}>
                                    Debit Card's Expiry Year
                                </Text>
                            </View>
                            <TextInput style={styles.input}
                                placeholder='YY'
                                placeholderTextColor="black"
                                keyboardType="numeric"
                                returnKeyType='next'
                                autoCorrect={false}
                                ref={"txtYear"}
                                onSubmitEditing={()=> this.refs.txtMonth.focus()}
                            />
                            <TouchableOpacity onPress={() => this.refs.swiper.scrollBy(1)} style={styles.buttonContainer}>
                                <Text style={styles.buttonText}>Next</Text>
                            </TouchableOpacity>
                            <View style={styles.forgot}>
                                <Text style={{color: 'black',fontWeight: 'bold',fontSize: 15, marginLeft: 120}}>
                                    My Cards
                                </Text>
                            </View>
                            <View style={styles.v3}>
                                <Text style={{marginLeft: 50, marginTop: 20}}>Visa</Text>
                                <Text style={{marginLeft: 140, marginTop: -20}}>6798</Text>
                                <Text style={{marginLeft: 240, marginTop: -20}}>{deleteIcon}</Text>
                                <Text style={{ marginLeft: 50,}}>debit</Text>
                            </View>
                    </SafeAreaView>
                    <SafeAreaView style={styles.container}>
                        <StatusBar barStyle="light-content"/>
                            <View style={styles.head}>
                                <Text style={{ marginLeft: 180, marginTop: 20, fontWeight: 'bold',fontSize: 18 }}>CARD</Text>
                                <TouchableOpacity style={{marginTop: -30, marginLeft: 10, width: 30}} onPress ={()=> this.props.navigation.dispatch(DrawerActions.openDrawer())}>
                                    {menuIcon}
                                </TouchableOpacity>
                            </View>
                            <View style={styles.forgot}>
                                <Text style={{color: 'black',fontWeight: 'bold',fontSize: 15, marginLeft: 90}}>
                                    Debit Card's Expiry Month
                                </Text>
                            </View>
                            <TextInput style={styles.input}
                                placeholder='MM'
                                placeholderTextColor="black"
                                keyboardType="numeric"
                                returnKeyType='next'
                                autoCorrect={false}
                                ref={"txtMonth"}
                                onSubmitEditing={()=> this.refs.txtCVC.focus()}
                            />
                            <TouchableOpacity onPress={() => this.refs.swiper.scrollBy(1)} style={styles.buttonContainer}>
                                <Text style={styles.buttonText}>Next</Text>
                            </TouchableOpacity>
                            <View style={styles.forgot}>
                                <Text style={{color: 'black',fontWeight: 'bold',fontSize: 15, marginLeft: 120}}>
                                    My Cards
                                </Text>
                            </View>
                            <View style={styles.v3}>
                                <Text style={{marginLeft: 50, marginTop: 20}}>Visa</Text>
                                <Text style={{marginLeft: 140, marginTop: -20}}>6798</Text>
                                <Text style={{marginLeft: 240, marginTop: -20}}>{deleteIcon}</Text>
                                <Text style={{ marginLeft: 50,}}>debit</Text>
                            </View>
                    </SafeAreaView>
                    <SafeAreaView style={styles.container}>
                        <StatusBar barStyle="light-content"/>
                            <View style={styles.head}>
                                <Text style={{ marginLeft: 180, marginTop: 20, fontWeight: 'bold',fontSize: 18 }}>CARD</Text>
                                <TouchableOpacity style={{marginTop: -30, marginLeft: 10, width: 30}} onPress ={()=> this.props.navigation.dispatch(DrawerActions.openDrawer())}>
                                    {menuIcon}
                                </TouchableOpacity>
                            </View>
                            <View style={styles.forgot}>
                                <Text style={{color: 'black',fontWeight: 'bold',fontSize: 15, marginLeft: 90}}>
                                    Debit Card's Expiry cvc
                                </Text>
                            </View>
                            <TextInput style={styles.input}
                                placeholder='CVC'
                                placeholderTextColor="black"
                                keyboardType="numeric"
                                returnKeyType='next'
                                autoCorrect={false}
                                ref={"txtCVC"}
                            />
                            <TouchableOpacity onPress={() => this.submit()} style={styles.buttonContainer}>
                                <Text style={styles.buttonText}>Send</Text>
                            </TouchableOpacity>
                            <View style={styles.forgot}>
                                <Text style={{color: 'black',fontWeight: 'bold',fontSize: 15, marginLeft: 120}}>
                                    My Cards
                                </Text>
                            </View>
                            <View style={styles.v3}>
                                <Text style={{marginLeft: 50, marginTop: 20}}>Visa</Text>
                                <Text style={{marginLeft: 140, marginTop: -20}}>6798</Text>
                                <Text style={{marginLeft: 240, marginTop: -20}}>{deleteIcon}</Text>
                                <Text style={{ marginLeft: 50,}}>debit</Text>
                            </View>
                    </SafeAreaView>
                </Swiper>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
    },
    v3:{
        backgroundColor:'white',
        padding:10,
        height: 100,
        marginTop: 40,
        marginLeft: 20,
        marginRight: 20,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    head: {
        backgroundColor: 'white',
        height: 70
    },
    forgot:{
        marginLeft: 50,
        marginTop: 30,
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
        marginLeft: 160,
        borderRadius: 50,
    }
  })