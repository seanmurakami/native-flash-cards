import React from 'react';
import { createAppContainer } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import HomeScreen from './tabs/home'
import NewCard from './tabs/newcard'

const RootStack = createMaterialBottomTabNavigator(
  {
    Home: HomeScreen,
    Create: NewCard,
  },
  {
    initialRouteName: 'Home',
    shifting: true
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      flashcards: []
    }
    this.saveCard = this.saveCard.bind(this)
  }
  saveCard(flashcard) {
    const flashcards = [...this.state.flashcards, flashcard]
    this.setState({ flashcards })
  }
  render() {
    return (
      <AppContainer
        screenProps = {{
          flashcards: this.state.flashcards,
          saveCard: this.saveCard
        }}
      />
    );
  }
}
