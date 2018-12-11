import React from 'react'
import { StyleSheet, FlatList, Text, View, Dimensions } from 'react-native'

export default class PracticeCard extends React.Component {
  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.main }>
          <FlatList
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            data={this.props.screenProps.flashcards}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) =>
              <View style={ styles.currentCard }>
                <View style={ styles.card }>
                  <Text style={ styles.values }>{item.question}</Text>
                </View>
              </View>
              }/>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  main: {
    width: '100%'
  },
  currentCard: {
    width: Dimensions.get('window').width
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    height: 200,
    margin: 12,
    borderRadius: 9,
    backgroundColor: '#eee',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.2
  },
  values: {
    fontSize: 20,
  }
})
