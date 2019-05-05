import {AsyncStorage} from "react-native";

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
        AsyncStorage.getItem('decks', (results) => {
            const decks = JSON.parse(results) || [];
            decks.push(deck);
            AsyncStorage.setItem('decks', decks);
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
    AsyncStorage.getItem('decks').then(results => {
        const decks = JSON.parse(results);
        decks.map(deckToUpdate => {
            if (deckToUpdate.title === deck.title) {
                deckToUpdate.questions.push({
                    question: this.state.question,
                    answer: this.state.answer
                });
                this.props.dispatch(updateDeck(deckToUpdate));
            }
        });
        AsyncStorage.setItem('decks', JSON.stringify(decks)).then(() => {
            this.props.navigation.goBack();
        });
    })
}