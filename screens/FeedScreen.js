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
    return( 
        <View style = {styles.container}>
            <Text style = {{color: 'white'}}>I am feed screen</Text>
        <View style = {styles.fc}>
            <View style = {styles.footer}>
                <Image style = {styles.tab} source = {require('../assets/bottomBar.png')} />
            </View>
            <View style = {styles.icons}>

                <Image style = {styles.icon} source = {require('../assets/homeIcon.png')} />    
                <Image style = {styles.icon} source = {require('../assets/dgIcon.png')} />
                
                {/* <View style = {styles.plusContainer}> */}
                <Image style = {styles.iconPlus} source = {require('../assets/plusIcon.png')} />
                {/* </View> */}

                <Image style = {styles.icon} source = {require('../assets/hIcon.png')} />
                <Image style = {styles.icon} source = {require('../assets/cmtIcon.png')} />
        
        </View>
        </View>
        </View>
    )}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'tomato'
    },
    footer: {
        // position: 'absolute',
        // marginTop: 555,
        width: '100%',
        height: 100,
        // backgroundColor: 'black',
        alignItems: 'center',

    },
    tab: {
        resizeMode: 'cover',
        width: '120%',
        height: 100,
    },
    fc: {
        height: '100%',
        width: '100%',
        // backgroundColor: 'white',
        position: 'absolute',
        justifyContent: 'flex-end',
        
    },
    icons: {
        position: 'absolute',
        width: '100%',
        height: 75,
        flexDirection: 'row',
        // justifyContent: 'center',
        // backgroundColor: 'red',
        justifyContent: 'space-around',
        alignItems: 'center'

    },
    plusContainer: {
        width: 80,
        height: 80,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        marginBottom: 18,

        // backgroundColor: 'transparent'
    },
    icon: {
        height: 24,
        width: 24,
        marginHorizontal: 45
    },
    iconPlus: {
        // position: 'absolute',
        height: 160,
        width: 160,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 18,

    }
})

export default FeedScreen;