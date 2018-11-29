import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#eee'}}>
        <View style={styles.container}>
          <Text style={{fontSize: 50}}>Hello, World</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10
  },
});
