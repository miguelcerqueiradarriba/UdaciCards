import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from "react-native";

class DeckDetails extends React.Component {

    render() {
        const { navigate } = this.props.navigation;
        const deck = this.props.navigation.getParam('deck', {});
        return (
            <View style={styles.detailContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.deckTitle}>{deck.title}</Text>
                    <Text style={styles.deckSubtitle}>{deck.questions.length} cards</Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity onPress={() => navigate('AddCard', {deck: deck})} style={styles.addCardButton}>
                        <Text style={styles.addCardText}>Add Card</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigate('Card', {deck: deck})} style={styles.startQuizButton}>
                        <Text style={styles.startQuizText}>Start Quiz</Text>
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
        height: '50%'
    },
    deckTitle: {
        fontSize: 30,
        margin: 5
    },
    titleInput: {
        color: 'lightgray',
        fontSize: 20,
        margin: 5
    },
    buttonsContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '50%',
    },
    addCardButton: {
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#000000',
        width: '50%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 1
    },
    startQuizButton: {
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#000000',
        width: '50%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        margin: 1
    },
    addCardText: {
        fontSize: 20
    },
    startQuizText: {
        color: 'white',
        fontSize: 20
    }
});

export default DeckDetails;