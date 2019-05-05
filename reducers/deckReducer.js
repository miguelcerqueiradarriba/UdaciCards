import {ADD_DECK, UPDATE_DECK} from '../actions/DeckActions'

export function deckReducer(state = {}, action) {
    switch (action.type) {
        case ADD_DECK:
            return {
                ...state,
                [action.deck.uuid] : action.deck
            };
        case UPDATE_DECK:
            return {
                ...state,
                [action.deck.uuid] : action.deck
            };
        default:
            return state;
    }
}