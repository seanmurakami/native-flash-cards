import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 50}}>Hello, World</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#CFCFCF',
    padding: 10,
    paddingTop: 40
  },
});
