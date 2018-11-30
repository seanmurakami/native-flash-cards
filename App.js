import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'
import NewCard from './newcard'


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    tabBarColor: '#f4511e',
    tabBarIcon: <Icon name="home" size={25} color="#eee" />
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>There are no cards to be viewed...</Text>
      </View>
    );
  }
}

const RootStack = createMaterialBottomTabNavigator(
  {
    Home: HomeScreen,
    Create: NewCard,
  },
  {
    initialRouteName: 'Home',
    barStyle: {
        backgroundColor: '#f4511e'
    },
    shifting: true
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}
