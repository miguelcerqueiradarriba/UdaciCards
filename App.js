import React, {Component} from 'react';
import {StyleSheet, View, AsyncStorage, StatusBar} from 'react-native';
import NewDeck from "./components/NewDeck";
import DeckList from "./components/DeckList";
import { black, white } from './utils/colors';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons'
import DeckDetails from "./components/DeckDetails";
import Deck from "./components/Deck";
import AddCard from "./components/AddCard";
import Card from "./components/Card";
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import middleware from './middleware';
import reducer from './reducers/index';
import v4 from 'uuid';
import {setLocalNotification} from "./utils/notifications";

export default class App extends Component {

    componentDidMount() {
        setLocalNotification();
    }

    render() {

        const store = createStore(reducer, middleware);

        return (
            <Provider store={store}>
                <View style={styles.mainContainer}>
                    <MainNavigator/>
                </View>
            </Provider>
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
            marginTop: StatusBar.currentHeight,
            height: 56,
            backgroundColor: white
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