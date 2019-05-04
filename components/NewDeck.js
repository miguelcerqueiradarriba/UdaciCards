import React from 'react';
import {StyleSheet, Text, TextInput, View, AsyncStorage, TouchableOpacity} from "react-native";

class NewDeck extends React.Component {

    state = {
        deckTitle: 'Deck title'
    };

    saveDeck() {
        AsyncStorage.getItem('decks', (results) => {
            const decks = JSON.parse(results);
            const deck = {
                title: this.state.deckTitle
            };
            decks.push(deck);
            AsyncStorage.setItem('decks', decks);
        });
    }

    render() {
        return (
            <View style={styles.detailContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.deckTitle}>What is the title of your new deck?</Text>
                    <TextInput style={styles.titleInput} onChange={(element) => this.setState({
                        deckTitle: element.value
                    })} value={this.state.deckTitle}></TextInput>
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity onChange={() => this.saveDeck()} style={styles.submitButton}>
                        <Text style={styles.submitText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    detailContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '55%'
    },
    deckTitle: {
        textAlign: 'center',
        fontSize: 50,
        margin: 5,
        height: '75%'
    },
    titleInput: {
        padding: 5,
        color: 'lightgray',
        fontSize: 20,
        margin: 5,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#000000',
        width: '90%'
    },
    buttonsContainer: {
        alignItems: 'center',
        width: '100%',
        height: '35%',
    },
    submitButton: {
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#000000',
        width: '50%',
        height: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        margin: 1
    },
    submitText: {
        color: 'white',
        fontSize: 20
    }
});

export default NewDeck;