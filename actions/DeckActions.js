import {AsyncStorage} from "react-native";
import v4 from 'uuid'

export const ADD_DECK = 'ADD_DECK';
export const UPDATE_DECK = 'UPDATE_DECK';

function addDeck(deck) {
    return {
        type: ADD_DECK,
        deck
    }
}

export function handleAddDeck(deck) {
    return (dispatch) => {
        deck.uuid = deck.uuid || v4();
        deck.questions = deck.questions || [];
        AsyncStorage.getItem('decks').then(results => {
            const decks = JSON.parse(results) || {};
            if (!decks[deck.uuid]) {
                decks[deck.uuid] = deck;
                AsyncStorage.setItem('decks', JSON.stringify(decks));
            }
        });
        dispatch(addDeck(deck));
    }
}

function updateDeck(deck) {
    return {
        type: UPDATE_DECK,
        deck
    }
}

export function handleUpdateDeck(deck) {
    return (dispatch) => {
        AsyncStorage.getItem('decks').then(results => {
            const decks = JSON.parse(results);
            decks[deck.uuid] = deck;
            dispatch(updateDeck(deck));
            AsyncStorage.setItem('decks', JSON.stringify(decks));
        })
    }
}