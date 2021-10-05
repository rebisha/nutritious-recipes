import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, Platform, StyleSheet, Text, View } from 'react-native';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

const Index: React.FC<Props> = ({ name, enthusiasmLevel = 0 }) => {
  const [enthusiasm, setEnthusiasm] = useState(enthusiasmLevel);

  const onIncrement = () => setEnthusiasm(enthusiasm + 1);

  const onDecrement = () => {
  setEnthusiasm(enthusiasm > 0 ? enthusiasm - 1 : 0);
  }

  const getExclamationMarks = (numChars: number) => numChars > 0 ? Array(numChars + 1).join('!') : '';

  return (
      <View style={styles.container}>
        <Text>Hello {name} {getExclamationMarks(enthusiasm)}</Text>
        <Button title='+' onPress={onIncrement} accessibilityLabel="increment" color="pink" />
        <Button title='-' onPress={onDecrement} accessibilityLabel="decrement" color="orange" />
        {/* <StatusBar style="auto" /> */}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: 'pink'
      },
      android: {
        backgroundColor: 'white'
      },
      default: {        
        backgroundColor: '#fff',
        fontFamily: 'Staatliches, Arial',
      }
    }),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Index;
