import React, {Component} from 'react';
import {AppRegistry, Text, View, ListView, StyleSheet} from 'react-native';

const users =[
    {name: 'John Doe'},
    {name: 'Mufwa'},
    {name: 'Steve Smith'},
    {name: 'Janet Williams'}
]

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

export default class Component4 extends Component{
    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          userdataSource: ds.cloneWithRows(users),
        };
    }

    renderRow(user, sectionId, rowId, highlightRow){
        return(
            <View style={styles.row}>
                <Text style={styles.rowText}>{user.name}</Text>
            </View>   
        )  
    }

    render(){
        return(
            <ListView
                dataSource={this.state.userdataSource}
                renderRow={this.renderRow.bind(this)}
            />
        )
    }
}

AppRegistry.registerComponent('swift', () => swift);