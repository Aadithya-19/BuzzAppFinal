import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import * as Linking from 'expo-linking';

export default class Instagram extends React.Component {
  handlePress = () => {
    Linking.openURL('https://www.instagram.com/');
  }; 
  render() {   
    return (
      <View>
        <TouchableOpacity
        style = {{marginTop:250, borderRadius:5, borderWidth: 5,width:205,height:30,alignContent:"center", alignSelf: "center"}}
          onPress={this.handlePress}
        >
          <Text>
            Check out your Instagram page
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
} 