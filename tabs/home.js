import React from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    tabBarColor: '#f4511e',
    tabBarIcon: <Icon name="home" size={25} color="#eee" />
  }
  render() {
    const { flashcards } = this.props.screenProps
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{flashcards[0].question}</Text>
        <Text>{flashcards[0].answer}</Text>
      </View>
    );
  }
}
