import React from 'react'
import { Text, View, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default class NewCard extends React.Component {
  static navigationOptions = {
    title: 'Create Card',
    tabBarColor: 'green',
    tabBarIcon: <Icon name="ios-create" size={25} color="#eee" />
  }
  constructor(props) {
    super(props)
    this.state = {
      question: '',
      answer: ''
    }
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={{width: '90%', height: 220, backgroundColor: '#eee', alignItems: 'center', justifyContent: 'center'}}>
          <Text>Question</Text>
          <TextInput style={{height: 40}} placeholder="Enter question here" onChangeText={(question) => this.setState({question})}/>
          <Text>Answer</Text>
          <TextInput style={{height: 40}} placeholder="Enter answer here" onChangeText={(answer) => this.setState({answer})}/>
        </View>
      </View>
    )
  }
}
