import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './Home';
import AddDeck from './AddDeck';
import Details from './Details';
import TabNavigator from './TabNav';
import Deck from "./Deck";
import AddCard from "./AddCard";
import Quiz from "./Quiz";

const Stack = createStackNavigator({
    Main: {
        screen: TabNavigator,
    },
    Deck: {
        screen: Deck,
    },
    AddCard: {
        screen: AddCard,
    },
    Quiz: {
        screen: Quiz,
    },
    Details: {
        screen: Details,
        navigationOptions: {
            title: "See Details test",
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
        }
    }
})

export default createAppContainer(Stack);