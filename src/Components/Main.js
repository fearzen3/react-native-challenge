import React, { Component } from 'react';
import { View,Text,ListView,Button} from 'react-native';
import {connect} from 'react-redux';    
import { StackNavigator } from 'react-navigation';


import {initAnime} from '../Actions/AnimeAction.js'
import AnimeList from './AnimeList.js'
import DetailScreen from './DetailScreen.js'




class Main extends Component {
    constructor(props){
        super(props)
        console.log(this.props.navigation)
    }

      static navigationOptions = {
    title: 'List Anime',
  };

    state = {  }

      componentDidMount(){
        this.props.initAnime()
  }


    render() {
        return (
            <View>
            <AnimeList navigation={this.props.navigation}/>
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
  return{
    initAnime:()=>{
      dispatch(initAnime())
    }
    
  }
}



export default connect(null,mapDispatchToProps)(Main);