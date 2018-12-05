import React from 'react'
import { StyleSheet, Text, View, FlatList, Button } from 'react-native'
import Swipeout from 'react-native-swipeout'

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.editCard = this.editCard.bind(this)
    this.deleteCard = this.deleteCard.bind(this)
  }
  editCard(id) {
    this.props.screenProps.editCard(id)
    this.props.navigation.navigate('Edit')
  }
  deleteCard(id) {
    alert(id)
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
        <View style={ styles.main }>
          <FlatList
            data={ flashcards }
            showsVerticalScrollIndicator={false}
            keyExtractor={ item => item.question }
            renderItem={({item}) =>
              <View style={ styles.container }>
                <Swipeout
                  right={[
                    {
                      text: 'Delete',
                      type: 'delete',
                      onPress: () => this.deleteCard(item.id)
                    }
                  ]}
                  autoClose
                  sensitivity={45}
                  style={ styles.swipeButton }>
                  <View style={ styles.card }>
                    <Text style={ styles.values }>{item.question}</Text>
                    <View style={ styles.line }>
                      <Text style={ styles.values }>{item.answer}</Text>
                    </View>
                    <View style={{position: 'absolute', right: 0, bottom: 0}}>
                      <Button title="Edit" id={ item.id } onPress={() => this.editCard(item.id)}/>
                    </View>
                  </View>
                </Swipeout>
              </View>
            }/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    width: 350,
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 4
  },
  card: {
    width: '100%',
    borderRadius: 9,
    backgroundColor: '#eee',
    padding: 14,
    paddingTop: 5,
    paddingBottom: 3,
    shadowOpacity: 0.2,
    shadowOffset: {width: 1, height: 1}
  },
  values: {
    fontSize: 20,
    marginVertical: 5,
    paddingVertical: 7
  },
  line: {
    borderTopColor: 'rgba(0,0,0,0.125)',
    borderTopWidth: 1,
    marginBottom: 18
  },
  swipeButton: {
    borderRadius: 9
  }
})
