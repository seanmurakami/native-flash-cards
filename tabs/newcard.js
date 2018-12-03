import React from 'react'
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native'
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
    this.saveCard = this.saveCard.bind(this)
  }
  saveCard() {
    const { question, answer } = this.state
    if (!question || !answer) return alert('YEET')
    const flashcard = Object.assign({}, this.state)
    this.setState({question: '', answer: ''})
    this.props.navigation.navigate('Home', { flashcard })
  }
  render() {
    return (
      <View style={ styles.main }>
        <View style={ styles.card }>
          <Text style={ styles.header }>Create a New Card</Text>
          <Text style={ styles.labels }>Question</Text>
          <TextInput
            style={ styles.input }
            placeholder="Enter question here"
            value={ this.state.question }
            onChangeText={question => this.setState({question})}
          />
          <Text style={ styles.labels }>Answer</Text>
          <TextInput
            style={ [styles.input, styles.answer] }
            multiline={ true }
            numberofLines={5}
            placeholder="Enter answer here"
            value={ this.state.answer }
            onChangeText={answer => this.setState({answer})}
          />
          <TouchableHighlight
            style={ styles.button }
            onPress={ this.saveCard }
            underlayColor='grey'>
            <View>
              <Text style={{ color: 'white' }}>Save</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '90%',
    height: 330,
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 9,
    shadowOpacity: 0.2,
    shadowOffset: {width: 2, height: 2}
  },
  header: {
    marginVertical: 20,
    fontSize: 30,
    fontWeight: 'bold'
  },
  input: {
    height: 40,
    width: '80%',
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#f4f4f4',
    borderRadius: 5,
    borderColor: 'rgba(0, 0, 0, 0.125)',
    borderWidth: 1
  },
  answer: {
    height: 80,
    paddingTop: 10
  },
  labels: {
    fontSize: 20,
    alignItems: 'flex-start'
  },
  button: {
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: 'green',
    marginVertical: 5
  }
})
