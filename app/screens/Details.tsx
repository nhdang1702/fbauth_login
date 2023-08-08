import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';
import {NavigationProp} from '@react-navigation/native';
import { FIREBASE_AUTH } from '../../firebaseConfig';

const Details = () => {
    return (
        <View style = {styles.detail}>
            <Text  > Nguyen Hong Dang UET</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    detail : {
        flex: 1,
        justifyContent: 'center',
        alignItems : 'center',
        fontSize: 22
        
    }
})

export default Details;