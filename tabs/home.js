import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    tabBarColor: '#f4511e',
    tabBarIcon: <Icon name="home" size={25} color="#eee" />
  }
  render() {
    const { flashcards } = this.props.screenProps
    if (flashcards.length === 0) {
      return (
        <View style={ styles.main }>
          <Text>You have no cards....</Text>
        </View>
      )
    }
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={ styles.main }>
          <FlatList
            data={ flashcards }
            showsVerticalScrollIndicator={false}
            keyExtractor={ item => item.question }
            renderItem={({item}) =>
            <View style={ styles.container }>
              <View style={ styles.card }>
                <View style={ styles.line }>
                  <Text style={ styles.values }>{item.question}</Text>
                </View>
                <Text style={ styles.values }>{item.answer}</Text>
              </View>
            </View>
            }/>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    marginTop: 18,
    justifyContent: 'center'
  },
  container: {
    width: 350,
    alignItems: 'center',
    paddingTop: 12,
    paddingHorizontal: 4
  },
  card: {
    width: '100%',
    borderRadius: 9,
    backgroundColor: '#eee',
    padding: 14,
    paddingTop: 5,
    shadowOpacity: 0.2,
    shadowOffset: {width: 1, height: 1},
    marginBottom: 12
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
