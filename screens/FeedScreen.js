import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image
} from 'react-native';

const FeedScreen = props => {
    return <View style = {styles.text}><Text>I am feed screen</Text></View>
}

const styles = StyleSheet.create({
    text: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default FeedScreen;