import React, {Component} from 'react';
import {AppRegistry, Text, View, ListView, StyleSheet, TouchableHighlight, Button} from 'react-native';

const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent:'center',
        padding:10,
        backgroundColor: '#f4f4f4',
        marginBottom:3
    },
    rowText:{
        flex:1
    }
})

export default class Component5 extends Component{

    static navigationOptions = {
        header:null
    }

    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          userDataSource: ds,
        };
    }

    componentDidMount(){
        this.fetchusers();
    }

    fetchusers(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((response) => {
                this.setState({
                    userDataSource: this.state.userDataSource.cloneWithRows(response)
                })
            });
    }

    onPress(user){
        console.log(user);
        this.props.navigation.navigate('Component6', user);
    }

    renderRow(user, sectionId, rowId, highlightRow){
        return(
            <TouchableHighlight onPress={() => {this.onPress(user)}}>
                <View style={styles.row}>
                    <Text style={styles.rowText}>{user.name}: {user.email}</Text>
                </View> 
            </TouchableHighlight>
              
        )  
    }

    render(){
        return(
            <ListView
                dataSource={this.state.userDataSource}
                renderRow={this.renderRow.bind(this)}
            />
        )
    }
}

AppRegistry.registerComponent('swift', () => swift);