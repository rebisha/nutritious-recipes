import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const NavBar = () => {
    return(
        <View>
            <Text style={styles.heading}>What I Eat In a Day</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontFamily: 'STAATLICHES',
        fontSize: 20
    }
})

export default NavBar;