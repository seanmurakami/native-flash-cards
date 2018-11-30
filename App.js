import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'


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

class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Create Card',
    tabBarColor: 'green',
    tabBarIcon: <Icon name="plus" size={25} color="#eee" />
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Create Card Screen</Text>
      </View>
    );
  }
}

const RootStack = createMaterialBottomTabNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
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
