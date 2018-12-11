import React from 'react';
import { AsyncStorage } from 'react-native'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import HomeScreen from './tabs/home'
import NewCard from './tabs/newcard'
import EditCard from './editcard'
import PracticeCard from './tabs/practice'

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Edit: EditCard
  },
  {
    defaultNavigationOptions: {
      title: 'Native Flash Cards'
    },
    navigationOptions: {
      tabBarIcon: <Icon name="home" size={25} color="#eee" />
    }
  }
)

const CreateStack = createStackNavigator(
  {
    Create: NewCard
  },
  {
    defaultNavigationOptions: {
      title: 'Native Flash Cards'
    },
    navigationOptions: {
      tabBarIcon: <Ionicons name="ios-add-circle-outline" size={25} color="#eee" />
    }
  }
)

const PracticeStack = createStackNavigator(
  {
    Practice: PracticeCard
  },
  {
    defaultNavigationOptions: {
      title: 'Native Flash Cards'
  },
    navigationOptions: {
      tabBarIcon: <Entypo name="book" size={25} color="#eee" />
    }
  }
)

const RootStack = createMaterialBottomTabNavigator(
  {
    Home : HomeStack,
    Create: CreateStack,
    Practice: PracticeStack
  },
  {
    initialRouteName: 'Home',
    shifting: true,
    barStyle: {
      backgroundColor: '#25872f'
    }
  }
);

const flashcards = [
  {
    question: 'What are closures in JavaScript?',
    answer: 'Closures make it possible for a function to have "private" variables. A closure is a function having access to the parent scope, even after the parent function has closed.',
    id: 1
  },
  {
    question: 'What does AJAX stand for?',
    answer: '1) Better interactivity. New content from the server can be changed dynamically without the need to reload the entire page.2) Reduce connections to the server since scripts and stylesheets only have to be requested once. 3) State can be maintained on a page. JavaScript variables and DOM state will persist because the main container page was not reloaded.',
    id: 2
  },
  {
    question: 'Explain how prototypal inheritance works',
    answer: 'This is an extremely common JavaScript interview question. All JavaScript objects have a prototype property defined as __proto__, that is a reference to another object. When a property is accessed on an object and if the property is not found on that object, the JavaScript engine looks at the object\'s prototype linkage via __proto__, and that prototype\'s prototype and so on, until it finds the property defined on one of the prototypes or until it reaches the end of the prototype chain which is when an object in the chain has its __proto__ set equal to null. This behaviour simulates classical inheritance, but it is really more of delegation than inheritance.',
    id: 3
  }
]

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      flashcards,
      id: 4,
      selectedCard: null
    }
    this.saveCard = this.saveCard.bind(this)
    this.editCard = this.editCard.bind(this)
    this.updateCard = this.updateCard.bind(this)
    this.deleteCard = this.deleteCard.bind(this)
  }
  saveCard(flashcard) {
    const updatedFlashCard = Object.assign(flashcard, {id: this.state.id})
    const flashcards = [...this.state.flashcards, updatedFlashCard]
    const newState = Object.assign({}, {flashcards}, {id: this.state.id++})
    AsyncStorage.setItem('flashcards', JSON.stringify(newState))
    this.setState({flashcards})
  }
  editCard(id) {
    const selectedCard = this.state.flashcards.filter(flashcard => flashcard.id === id)
    this.setState({selectedCard: selectedCard[0]})
  }
  updateCard(flashcard) {
    const flashcards = [...this.state.flashcards]
    const { id } = this.state
    const index = flashcards.findIndex(item => item.id === flashcard.id)
    flashcards.splice(index, 1, flashcard)
    const newState = Object.assign({}, {flashcards, id})
    AsyncStorage.setItem('flashcards', JSON.stringify(newState))
    this.setState({flashcards})
  }
  deleteCard(cardID) {
    const flashcards = [...this.state.flashcards]
    const { id } = this.state
    const updatedCards = flashcards.filter(item => item.id !== cardID)
    const newState = Object.assign({}, {flashcards: updatedCards, id})
    AsyncStorage.setItem('flashcards', JSON.stringify(newState))
    this.setState({flashcards: updatedCards})
  }
  componentDidMount() {
    AsyncStorage.getItem('flashcards')
      .then(item => {
        if(item) {
          const parsedItem = JSON.parse(item)
          this.setState({flashcards: parsedItem.flashcards, id: parsedItem.id})
        }
      })
  }
  render() {
    return (
      <AppContainer
        screenProps = {{
          flashcards: this.state.flashcards,
          saveCard: this.saveCard,
          editCard: this.editCard,
          selectedCard: this.state.selectedCard,
          updateCard: this.updateCard,
          deleteCard: this.deleteCard
        }}
      />
    );
  }
}
