import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    Alert,
    ImagePropTypes
} from 'react-native';

const SomethingWentWrong = props => {

    return (
        <View style = {styles.container}>
            <TouchableWithoutFeedback onPress = {() => {props.navigation.goBack()}}>
                <View  style = {styles.iconContainer}>
                    <Image source = {require('../assets/left.png')} style = {styles.backIcon} />
                </View>
            </TouchableWithoutFeedback>

            <View  style = {styles.imgContainer}>
                <Image source = {require('../assets/footer.png')} style = {styles.img} />
            </View>
            <View style = {styles.textContainer}>
            <Text style = {styles.title}>Oops, Something's not right !</Text>
            <Text style = {styles.description}>Our best minds are at work to get the things back in place. Please try back again after some time !</Text>
            </View>

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    iconContainer: {
        // position: 'absolute',
        // flex: 1,
        top: 53,
        left: 16,
        marginBottom: 120

    },
    backIcon: {
        width: 24,
        height: 24
    },
    imgContainer: {
        flex: 1,
    },
    img: {
        width: '100%',
        height: '80%',
        resizeMode: 'contain'
    },
    textContainer: {
        flex: 1
    },
    title: {
        // flex: 1,
        fontSize: 20,
        fontFamily: 'poppins-medium',
        color: '#2A2E43',
        textAlign: 'center',
        marginHorizontal: 20,
        marginBottom: 20
    },
    description: {
        fontSize: 12,
        color: '#000000',
        fontFamily: 'poppins-medium',
        textAlign: 'center',
        marginHorizontal: 40,
        lineHeight: 22
    }
});

export default SomethingWentWrong;