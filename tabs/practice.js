import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class PracticeCard extends React.Component {
  render() {
    return (
      <View style={ styles.main }>
        <View style={ styles.container }>
          <View style={ styles.card }>
            <Text style={ styles.values }>Hello there</Text>
          </View>
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
    width: '90%',
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    borderRadius: 9,
    backgroundColor: '#eee',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.2
  },
  values: {
    fontSize: 20,
  }
})
