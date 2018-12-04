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
        {question: 'Explain how prototypal inheritance works', answer: 'This is an extremely common JavaScript interview question. All JavaScript objects have a prototype property defined as __proto__, that is a reference to another object. When a property is accessed on an object and if the property is not found on that object, the JavaScript engine looks at the object\'s prototype linkage via __proto__, and that prototype\'s prototype and so on, until it finds the property defined on one of the prototypes or until it reaches the end of the prototype chain which is when an object in the chain has its __proto__ set equal to null. This behaviour simulates classical inheritance, but it is really more of delegation than inheritance.'}
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
