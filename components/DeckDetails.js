import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Animated} from "react-native";
import {connect} from "react-redux";
import {clearLocalNotification, setLocalNotification} from "../utils/notifications";

class DeckDetails extends React.Component {

    state = {
        opacity: new Animated.Value(0)
    };

    render() {
        const { opacity } = this.state;

        Animated.timing(opacity, {toValue: 1, duration: 3000}).start();

        const { navigate } = this.props.navigation;
        const deck = this.props.decks[this.props.navigation.getParam('deckId')];
        return (
            <Animated.View style={[styles.detailContainer, {opacity}]}>
                <View style={styles.titleContainer}>
                    <Text style={styles.deckTitle}>{deck.title}</Text>
                    <Text style={styles.deckSubtitle}>{deck.questions.length} cards</Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity onPress={() => navigate('AddCard', {deck: deck})} style={styles.addCardButton}>
                        <Text style={styles.addCardText}>Add Card</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        navigate('Card', {deck: deck});
                        clearLocalNotification();
                    }} style={styles.startQuizButton}>
                        <Text style={styles.startQuizText}>Start Quiz</Text>
                    </TouchableOpacity>
                </View>
            </Animated.View>
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

function mapStateToProps(store) {
    return {
        decks: store.decks
    }
}

export default connect(mapStateToProps)(DeckDetails);