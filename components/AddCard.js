import React from 'react'
import {StyleSheet, Text, TextInput, View} from "react-native";

class AddCard extends React.Component {
    render() {
        return (
            <View style={styles.detailContainer}>
                <View style={styles.titleContainer}>
                    <TextInput style={styles.titleInput} value={'What is a component?'}></TextInput>
                    <TextInput style={styles.titleInput} value={'Components let you split the UI into dependent, reusable pieces'}></TextInput>
                </View>
                <View style={styles.buttonsContainer}>
                    <View style={styles.submitButton}>
                        <Text style={styles.submitText}>Submit</Text>
                    </View>
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
        height: '20%'
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
        height: '60%',
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

export default AddCard;