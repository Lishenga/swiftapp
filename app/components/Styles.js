import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, TouchableHighlight, TouchableOpacity} from 'react-native';

export default class Styles extends Component{

    onPress(){
        console.log('Area Pressed')
    }

    onPress2(){
        console.log('Area 2 Pressed')
    }

  render(){
    console.log('hello');

    return(
        <View>
            <View style={styles.myView}>
                <Text style={styles.myText}>Hello Leon</Text>
            </View>
            <View style={styles.container}>
                <TouchableHighlight 
                    onPress={this.onPress} 
                    style={styles.v1}
                    underlayColor='blue'
                    >

                    <View>
                        <Text>View 1</Text>
                    </View>
                </TouchableHighlight>
                <TouchableOpacity
                    style={styles.v2}
                    onPress={this.onPress2}
                    >
                    <View>
                        <Text>View 2</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.v3}>
                    <Text>View 3</Text>
                </View>
            </View>
        </View>

    )

  }

}

const styles = StyleSheet.create({
    myView: {
        backgroundColor: 'blue'
    },
    myText:{
        color:'red'
    },
    container:{
        flexDirection:'row',
        height: 100,
    },
    v1:{
        flex:1,
        backgroundColor:'red',
        padding:10
    },
    v2:{
        flex:1,
        backgroundColor:'green',
        padding:10
    },
    v3:{
        flex:1,
        backgroundColor:'yellow',
        padding:10
    }
});

AppRegistry.registerComponent('Home', () => Home);