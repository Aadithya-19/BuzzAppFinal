import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';


import inst from './screens/inst';
import fb from './screens/fb';

import { createBottomTabNavigator } from 'react-navigation-tabs';


export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}



const TabNavigator = createBottomTabNavigator({
  inst: { screen: inst },
  fb: { screen: fb },
},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const routeName = navigation.state.routeName;
        console.log(routeName)
        if (routeName === "fb") {
          return (
            <Image
              source={require("./assets/facebook.jpg")}
              style={{ width: 40, height: 40 }}
            />
          )

        }
        else if (routeName === "inst") {
          return (
            <Image
              source={require("./assets/instagram.jpg")}
              style={{ width: 40, height: 40 }}
            />)

        }
      }
    })
  }
);

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

