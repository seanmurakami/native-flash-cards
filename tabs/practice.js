import React from 'react'
import { StyleSheet, ScrollView, Text, View } from 'react-native'

export default class PracticeCard extends React.Component {
  render() {
    return (
      <View style={ styles.main }>
        <View style={ styles.container }>
          <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
            {
              this.props.screenProps.flashcards.map((item, i) => {
              return (
              <View key={i} style={ styles.card }>
                <Text style={ styles.values }>{item.question}</Text>
              </View>
              )
            })
            }
          </ScrollView>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    width: '100%'
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    paddingHorizontal: 10,
    height: 200,
    width: 355,
    borderRadius: 9,
    backgroundColor: '#eee',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.2
  },
  values: {
    fontSize: 20,
  }
})
