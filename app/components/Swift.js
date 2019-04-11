import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import AlbumDetail from './AlbumDetail'
import axios from 'axios';

export default class Swift extends Component{

  state = { albums: [ ] };
  
  componentWillMount(){
    console.log('componenet will mount')
    axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(
      response => this.setState({albums: response.data})
    )
  }

  renderAlbums(){
    return this.state.albums.map(album => 
      <AlbumDetail key={album.title} album={album}/> 
    )
  }

  render(){
    console.log(this.state)

    return(

      <ScrollView>

        {this.renderAlbums()}
        
      </ScrollView>

    )

  }

}
