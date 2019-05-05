import React from 'react'
import {AsyncStorage, Picker, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {connect} from "react-redux";
import {handleUpdateDeck, updateDeck} from "../actions/DeckActions";

class AddCard extends React.Component {

    state = {
        question: 'Question',
        answer: 'Answer',
        isCorrect: true
    };

    addCard() {
        const deck = this.props.navigation.getParam('deck', {});
        this.props.dispatch(handleUpdateDeck(deck));
    }

    render() {
        return (
            <View style={styles.detailContainer}>
                <View style={styles.titleContainer}>
                    <TextInput style={styles.titleInput}
                               value={this.state.question}
                               onChange={(element) => this.setState({question: element.value})}></TextInput>
                    <TextInput style={styles.titleInput}
                               value={this.state.answer}
                               onChange={(element) => this.setState({answer: element.value})}>
                    </TextInput>
                    <View style={styles.titleInput}>
                        <Picker selectedValue={this.state.isCorrect}
                                onValueChange={(element) => this.setState({isCorrect: element})}>
                            <Picker.Item label={'Correct'} value={true} />
                            <Picker.Item label={'Incorrect'} value={false} />
                        </Picker>
                    </View>
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.submitButton} onPress={this.addCard.bind(this)}>
                        <Text style={styles.submitText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
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
        height: '30%'
    },
    titleInput: {
        padding: 5,
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
        height: '50%',
    },
    submitButton: {
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#000000',
        width: '50%',
        height: '15%',
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

export default connect()(AddCard);