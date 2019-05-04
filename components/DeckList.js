import React from 'react'
import {View, StyleSheet, AsyncStorage} from "react-native";
import Deck from "./Deck";

class DeckList extends React.Component {

    state = {
        decks: []
    };

    componentDidMount() {
        AsyncStorage.getItem('decks').then((results) => {
            this.setState({
                decks: JSON.parse(results)
            })
        });
    }

    render() {
        const { navigate } = this.props.navigation;
        const { decks } = this.state;

        return (
            <View style={styles.deckListContainer}>
                {decks && decks.map(deck => (
                    <Deck deck={deck} navigate={navigate}/>
                ))}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    deckListContainer: {
        height: '25%',
        textAlign: 'center',
        alignItems: 'center',
    }
});

export default DeckList;