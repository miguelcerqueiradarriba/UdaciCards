import {ADD_DECK, UPDATE_DECK} from '../actions/DeckActions'

export function deckReducer(state = [], action) {
    switch (action.type) {
        case ADD_DECK:
            state.push(action.deck);
            return state;
        case UPDATE_DECK:
            return state.map(deck => {
                if (deck.title === action.deck.title) {
                    return action.deck;
                }
            });
        default:
            return state;
    }
}