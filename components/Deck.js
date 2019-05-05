import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";

class Deck extends React.Component {

    render() {
        const { deck } = this.props;
        return (
            <TouchableOpacity style={styles.deckContainer}
                onPress={() => this.props.navigate('DeckDetails', {deck: deck})}
            >
                <Text style={styles.deckTitle}>{deck.title}</Text>
                <Text style={styles.deckSubtitle}>{deck.questions.length} cards</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    deckContainer: {
        fontWeight: 'bold',
        fontSize: 30,
        width: '95%',
        height: '100%',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#000000',
        margin: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    deckTitle: {
        fontSize: 20
    },
    deckSubtitle: {
        color: 'lightgray',
        fontSize: 15
    }
});

export default Deck;