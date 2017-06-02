import React, { Component } from 'react';
import { View,Text,ListView,Button} from 'react-native';

class DetailScreen extends Component {

   static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`,
  });
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Detail {params.title}</Text>
      </View>
    );
  }
}

export default DetailScreen