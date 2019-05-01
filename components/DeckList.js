import React from 'react'
import {View, StyleSheet} from "react-native";
import Deck from "./Deck";

class DeckList extends React.Component {
    render() {
        return (
            <View style={styles.deckListContainer}>
                <Deck/>
                <Deck/>
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