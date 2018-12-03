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
      flashcards: [
        {question: 'What are closures in JavaScript?', answer: 'Closures make it possible for a function to have "private" variables. A closure is a function having access to the parent scope, even after the parent function has closed.'},
        {question: 'What does AJAX stand for?', answer: '1) Better interactivity. New content from the server can be changed dynamically without the need to reload the entire page.2) Reduce connections to the server since scripts and stylesheets only have to be requested once. 3) State can be maintained on a page. JavaScript variables and DOM state will persist because the main container page was not reloaded.'},
        {question: 'What does AJAX for?', answer: '1) Better interactivity. New content from the server can be changed dynamically without the need to reload the entire page.2) Reduce connections to the server since scripts and stylesheets only have to be requested once. 3) State can be maintained on a page. JavaScript variables and DOM state will persist because the main container page was not reloaded.'}
      ]
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
