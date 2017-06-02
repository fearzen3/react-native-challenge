import React, { Component } from 'react';
import { View,Text,ListView,ActivityIndicator,StyleSheet,Image,Button} from 'react-native';
import {connect} from 'react-redux';    


const styles = StyleSheet.create({
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  gray: {
    backgroundColor: '#cccccc',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8,
  },
  alignListItem:{
    flexDirection: 'row',
  }
});



class AnimeList extends Component {
        constructor(props){
        super(props)
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([]),
      animating: true
    };
        }    

        


 componentWillReceiveProps(newProps) {
   
    console.log(newProps.animes)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.setState({
        dataSource : ds.cloneWithRows(newProps.animes),
    })
}

    render(){
      const { navigate } = this.props.navigation;
        if(this.props.animes.length===0){
            return(
                <ActivityIndicator
        animating={this.state.animating}
        style={[styles.centering, {height: 80}]}
        size="large"
      />
            )
        }else{
                    return (
                <View>
            
      <ListView
      
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <View style={styles.alignListItem}><Image
          style={{width: 100, height: 100}}
          source={{uri: rowData.image_url_lge}}
        /><Text>{rowData.title_english}</Text>
                     <Button
          onPress={() => navigate('DetailScreen',{title:rowData.title_english})}
          title="Detail Anime"
        /></View>}
      />
      </View>
        );


        }
        

    }
}


const mapStateToProps = (state) => {
  return{
    animes : state.animes
  }
}

export default connect(mapStateToProps,null)(AnimeList);