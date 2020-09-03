import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {

    const greeting = 'Bye there!';
    const anotherGreeting = 'My name is yoyo'
    // const jsxElement = <Text>Hello to you!</Text>

    return (
    <View>
        <Text style={styles.textStyle}>Getting started with react native!
        </Text>
        
        <Text style={fontStyle.textStyle} >{anotherGreeting}
        </Text>
    </View>);
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    }
});

const fontStyle = StyleSheet.create({
    textStyle: {
        fontSize: 20
    }
})

export default ComponentsScreen; 
