import React from 'react';
import { Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'

class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.detailsPage = this.detailsPage.bind(this)
  }
  detailsPage() {
    this.props.navigation.navigate('Details')
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Details Page"
          onPress={this.detailsPage}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Home Screen"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Add to Stack"
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button
          title="Restart"
          onPress={() => this.props.navigation.popToTop()}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
      title: 'Native Flash Cards'
    }
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
