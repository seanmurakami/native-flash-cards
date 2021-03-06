import React from 'react'
import { StyleSheet, Text, TextInput, TouchableHighlight, View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'

export default class NewCard extends React.Component {
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
    if (!question || !answer) return alert('Please fill in the question and answer input areas')
    const flashcard = Object.assign({}, this.state)
    this.props.screenProps.saveCard(flashcard)
    this.setState({question: '', answer: ''})
    this.props.navigation.navigate('Home')
  }
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} enabled={false}>
        <KeyboardAvoidingView style={ styles.main } behavior="padding" enabled>
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
              numberofLines={6}
              placeholder="Enter answer here"
              value={ this.state.answer }
              onChangeText={answer => this.setState({answer})}
            />
            <TouchableHighlight
              style={ styles.button }
              onPress={ this.saveCard }
              underlayColor='grey'>
              <View>
                <Text style={ styles.buttonText }>Save</Text>
              </View>
            </TouchableHighlight>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    marginTop: 25
  },
  card: {
    width: '90%',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 9,
    shadowOpacity: 0.2,
    shadowOffset: {width: 1, height: 1}
  },
  header: {
    marginVertical: 20,
    fontSize: 30,
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
    height: 100,
    paddingTop: 10
  },
  labels: {
    fontSize: 20
  },
  button: {
    width: 150,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#00C164',
    marginTop: 5,
    marginBottom: 12
  },
  buttonText: {
    color: 'white',
    fontSize: 18
  }
})
