import React from 'react'
import {Text, View, StyleSheet} from "react-native";

class Deck extends React.Component {
    render() {
        return (
            <View style={styles.deckContainer}>
                <Text style={styles.deckTitle}>Ula</Text>
                <Text style={styles.deckSubtitle}>Ula</Text>
            </View>
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
    titleInput: {
        color: 'lightgray',
        fontSize: 15
    }
});

export default Deck;