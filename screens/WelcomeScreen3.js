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
    Modal
} from 'react-native';


const WelcomeScreen = props => {
    return(
        <View style = {styles.container}>
            <Image style = {styles.image} source = {require('../assets/dog.png')} />
            <TouchableWithoutFeedback onPress = {() => {props.navigation.goBack()}}>
                <View  style = {styles.iconContainer}>
                    <Image source = {require('../assets/left.png')} style = {styles.backIcon} />
                </View>
            </TouchableWithoutFeedback>
            <View style = {styles.dotContainer}>
                <View style = {styles.dot}></View>
                <View style = {styles.dot}></View>
                <View style = {{...styles.dot, ...styles.blue}}></View>
                <View style = {styles.dot}></View>
            </View>
             <Text style = {styles.title}>SmallPaw</Text>
             <Text style = {styles.welcome}>Emergency</Text>
             <Text style = {styles.description}>Call ambulance, contact vet services or pharmacies in case of any emergency</Text>
             <View style = {styles.mainButtonContainer}>
                <TouchableOpacity style = {styles.buttonContainer} activeOpacity = {1} onPress = {() => {props.navigation.navigate('fourth')}}>
                    <View style = {styles.button}>
                        <Text style = {styles.buttonText}>NEXT</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.skip} activeOpacity = {1} onPress = {() => {props.navigation.navigate('wrong')}}>
                        <Text style = {styles.skipText}>Skip</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        height: '65%',
        width: '100%',
        borderBottomLeftRadius: 90,
        marginBottom: 11
    },
    iconContainer: {
        position: 'absolute',
        top: 53,
        left: 16
    },
    backIcon: {
        width: 24,
        height: 24
    },
    title: {
        fontSize: 12,
        color: '#A3A9AF',
        textAlign: 'center',
        marginBottom: 7
    },
    welcome: {
        fontSize: 32,
        color: '#3ACCE1',
        textAlign: 'center',
        fontFamily: 'poppins-bold'
    },
    description: {
        fontSize: 14,
        marginHorizontal: 24,
        color: '#767676',
        textAlign: 'center',
        fontFamily: 'poppins-regular'
    },
    mainButtonContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent:'flex-end',
        marginBottom: 16

    },
    buttonContainer: {
        // flex: 1,
        // position:'absolute',
        // alignItems: 'center',
        // justifyContent: 'flex-end',
        marginRight: '25%'
        
      },
      button: {
          width: 80,
          height: 44,
          backgroundColor: '#2A2E43',
          paddingVertical: 13,
          paddingHorizontal: 21,
          borderRadius: 52,
          elevation: 3,
          justifyContent: 'center'
          
      },
      buttonText: {
        color: '#FFFFFF',
        fontFamily: 'poppins-medium',
        fontSize: 14,
        textAlign: 'center'
    },
    skip: {
        marginBottom: 8,
        marginRight: 20,
    },
    skipText: {
        textAlign: 'center',
        color: '#767676',
        fontSize: 14,
        fontFamily: 'poppins-regular'
    },
    dotContainer: {
        width: '100%',
        // alignItems: 'center',.
        justifyContent: 'center',
        position: 'absolute',
        flexDirection: 'row',
        top: '60%'
    },
    dot: {
        height: 8,
        width: 8,
        borderRadius: 13,
       backgroundColor: '#767676',
       marginHorizontal: 4
    },
    blue: {
        backgroundColor: '#3ACCE1'
    }
})

export default WelcomeScreen;