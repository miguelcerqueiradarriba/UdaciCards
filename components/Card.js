import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from "react-native";

class Card extends React.Component {

    state = {
        page: 1,
        view: 0,
        correctAnswers: 0
    };

    next(deck, answer) {
        const isCorrect = answer === deck.questions[this.state.page - 1].isCorrect;
        this.setState({
            page: this.state.page + 1,
            correctAnswers: isCorrect ? this.state.correctAnswers + 1 : this.state.correctAnswers
        })
    }

    renderQuestionView(deck) {
        return (
            <View style={styles.titleContainer}>
                <Text style={styles.deckTitle}>{deck.questions[this.state.page - 1].question}</Text>
                <TouchableOpacity onPress={() => this.setState({
                    view: this.state.view === 0 ? 1 : 0
                })}>
                    <Text style={styles.deckSubtitle}>Answer</Text>
                </TouchableOpacity>
            </View>
        )
    }

    renderAnswerView(deck) {
        return (
            <View style={styles.titleContainer}>
                <Text style={styles.deckTitle}>{deck.questions[this.state.page - 1].answer}</Text>
                <TouchableOpacity onPress={() => this.setState({
                    view: this.state.view === 0 ? 1 : 0
                })}>
                    <Text style={styles.deckSubtitle}>Question</Text>
                </TouchableOpacity>
            </View>
        )
    }

    renderResultsView(deck) {
        return (
            <View style={styles.detailContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.deckTitle}>
                        You hit {this.state.correctAnswers} correct answers out of {deck.questions.length} questions.
                    </Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack(null)} style={styles.goBackButton}>
                        <Text style={styles.goBackText}>Back to deck</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    render() {
        const deck = this.props.navigation.getParam('deck', {});

        if (this.state.page > deck.questions.length) {
            return this.renderResultsView(deck);
        }

        return (
            <View style={styles.cardContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>{this.state.page} / {deck.questions.length}</Text>
                </View>
                {this.state.view === 0 ? this.renderQuestionView(deck) : this.renderAnswerView(deck)}
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity onPress={() => this.next(deck, true)} style={styles.correctButton}>
                        <Text style={styles.correctText}>Correct</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.next(deck, false)} style={styles.incorrectButton}>
                        <Text style={styles.incorrectText}>Incorrect</Text>
                    </TouchableOpacity>
                </View>
                <Text>{JSON.stringify(deck)}</Text>
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
    deckSubtitle: {
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
    },
    goBackButton: {
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#000000',
        width: '50%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 1
    },
    goBackText: {
        fontSize: 20
    }
});

export default Card;