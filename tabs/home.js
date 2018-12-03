import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    tabBarColor: '#f4511e',
    tabBarIcon: <Icon name="home" size={25} color="#eee" />
  }
  render() {
    const { flashcards } = this.props.screenProps
    if (!flashcards[0]) {
      return (
        <View style={ styles.main }>
          <Text>You have no cards....</Text>
        </View>
      )
    }
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={ styles.main }>
          <View style={ styles.card }>
            <View style={ styles.line }>
              <Text style={ styles.values }>{flashcards[0].question}</Text>
            </View>
            <Text style={ styles.values }>{flashcards[0].answer}</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  card: {
    width: '80%',
    height: 200,
    borderRadius: 9,
    backgroundColor: '#eee',
    padding: 12,
    paddingTop: 5,
    shadowOpacity: 0.2,
    shadowOffset: {width: 1, height: 1}
  },
  header: {
    fontWeight: 'bold',
    fontSize: 22
  },
  values: {
    fontSize: 20,
    marginVertical: 5,
    paddingVertical: 5
  },
  line: {
    borderBottomColor: 'rgba(0,0,0,0.125)',
    borderBottomWidth: 1
  }
})
