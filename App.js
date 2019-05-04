import React, {Component} from 'react';
import {StyleSheet, View, AsyncStorage} from 'react-native';
import NewDeck from "./components/NewDeck";
import DeckList from "./components/DeckList";
import { black, white } from './utils/colors';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons'
import DeckDetails from "./components/DeckDetails";
import Deck from "./components/Deck";
import AddCard from "./components/AddCard";
import Card from "./components/Card";

export default class App extends Component {

    componentDidMount() {

        const sampleDeck = [{
                title: 'Sample deck',
                questions: [
                    {
                        question: 'What is React?',
                        answer: 'A library for managing user interfaces'
                    },
                    {
                        question: 'Where do you make Ajax requests in React?',
                        answer: 'The componentDidMount lifecycle event'
                    }
                ]
            }];

        AsyncStorage.setItem('decks', sampleDeck);
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <MainNavigator/>
            </View>
        );
    }
}

const Tabs = TabNavigator({
    Decks: {
        screen: DeckList,
        navigationOptions: {
            tabBarLabel: 'DECKS',
            tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
        },
    },
    NewDeck: {
        screen: NewDeck,
        navigationOptions: {
            tabBarLabel: 'NEW DECK',
            tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
        },
    }
}, {
    navigationOptions: {
        header: null
    },
    tabBarOptions: {
        activeTintColor: black,
        style: {
            height: 56,
            backgroundColor: white,
            shadowColor: 'rgba(0, 0, 0, 0.24)',
            shadowOffset: {
                width: 0,
                height: 3
            },
            shadowRadius: 6,
            shadowOpacity: 1
        }
    }
});

const MainNavigator = StackNavigator({
    Home: {
        screen: Tabs
    },
    DeckList: {
        screen: DeckList
    },
    DeckDetails: {
        screen: DeckDetails
    },
    Deck: {
        screen: Deck
    },
    AddCard: {
        screen: AddCard
    },
    Card: {
        screen: Card
    }
});

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%'
    }
});