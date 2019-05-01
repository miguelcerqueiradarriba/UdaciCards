import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import NewDeck from "./components/NewDeck";

export default class App extends Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                <NewDeck/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%'
    }
});