import React from 'react';
import {StyleSheet, Text, View} from "react-native";

class Card extends React.Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.cardContainer}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>2 / 2</Text>
                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.deckTitle}>Does React Native work with Android?</Text>
                        <Text style={styles.deckSubtitle}>Answer</Text>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <View style={styles.correctButton}>
                            <Text style={styles.correctText}>Correct</Text>
                        </View>
                        <View style={styles.incorrectButton}>
                            <Text style={styles.incorrectText}>Incorrect</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        height: '100%'
    },
    headerContainer: {
        alignItems: 'baseline',
        height: '10%'
    },
    headerText: {
        fontSize: 20
    },
    titleConcorrecttainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '55%'
    },
    deckTitle: {
        textAlign: 'center',
        fontSize: 50,
        margin: 5
    },
    titleInput: {
        textAlign: 'center',
        color: 'red',
        fontSize: 20,
        margin: 5
    },
    buttonsContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '35%',
    },
    correctButton: {
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#000000',
        width: '60%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 1,
        backgroundColor: 'limegreen'
    },
    incorrectButton: {
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#000000',
        width: '60%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        margin: 1
    },
    correctText: {
        fontSize: 20,
        color: 'white'
    },
    incorrectText: {
        color: 'white',
        fontSize: 20,
    }
});

export default Card;