import React from 'react'
import { StyleSheet, Text, TextInput, TouchableHighlight, View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'

export default class EditCard extends React.Component {
  constructor(props) {
    super(props)
    const { question, answer, id } = this.props.screenProps.selectedCard
    this.state = {
      question,
      answer,
      id
    }
    this.updateCard = this.updateCard.bind(this)
  }
  updateCard() {
    this.props.screenProps.updateCard(this.state)
    this.props.navigation.navigate('Home')
  }
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAvoidingView style={ styles.main } behavior="padding" enabled>
          <View style={ styles.card }>
            <Text style={ styles.header }>Edit Card</Text>
            <Text style={ styles.labels }>Question</Text>
            <TextInput
              style={ styles.input }
              value={ this.state.question }
              onChangeText={question => this.setState({question})}
            />
            <Text style={ styles.labels }>Answer</Text>
            <TextInput
              style={ [styles.input, styles.answer] }
              multiline={ true }
              numberofLines={5}
              value={ this.state.answer }
              onChangeText={answer => this.setState({answer})}
            />
            <TouchableHighlight
              style={ styles.button }
              onPress={ this.updateCard }
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
    paddingTop: 15,
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 9,
    shadowOpacity: 0.2,
    shadowOffset: {width: 1, height: 1}
  },
  header: {
    fontSize: 30,
    marginBottom: 15
  },
  input: {
    height: 40,
    width: '90%',
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
