import React from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default class NewCard extends React.Component {
  static navigationOptions = {
    title: 'Create Card',
    tabBarColor: 'green',
    tabBarIcon: <Icon name="ios-create" size={25} color="#eee" />
  }
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Hello There</Text>
      </View>
    )
  }
}
