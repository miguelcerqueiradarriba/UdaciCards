import React from 'react'
import {Text, StyleSheet, TouchableOpacity} from "react-native";

class Deck extends React.Component {

    render() {
        const { deck } = this.props;
        return (
            <TouchableOpacity style={styles.deckContainer}
                onPress={() => this.props.navigate('DeckDetails', {deckId: deck.uuid})}
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
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#000000',
        margin: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    deckTitle: {
        fontSize: 20
    },
    deckSubtitle: {
        color: 'gray',
        fontSize: 15
    }
});

export default Deck;