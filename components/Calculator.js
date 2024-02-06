// Calculator.js
import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function Calculator({ navigation }) {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');
  const [calcHistory, setCalcHistory] = useState([]);
  const inputRef1 = useRef();
  const inputRef2 = useRef();

  const calculateSum = () => {
    const sum = parseFloat(number1) + parseFloat(number2);
    const temp = { id: Math.random().toString(), text: `${number1} + ${number2} = ${sum}` };
    setCalcHistory((prevHistory) => [temp, ...prevHistory]);
    setResult(`Sum: ${sum}`);
  }

  const calculateDifference = () => {
    const diff = parseFloat(number1) - parseFloat(number2);
    const temp = { id: Math.random().toString(), text: `${number1} - ${number2} = ${diff}` };
    setCalcHistory((prevHistory) => [temp, ...prevHistory]);
    setResult(`Difference: ${diff}`);
  }

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <Text style={styles.title}>Calculator</Text>
        <TextInput
          ref={inputRef1}
          style={styles.input}
          keyboardType='numeric'
          placeholder='Enter number 1'
          value={number1}
          onChangeText={(text) => setNumber1(text)}
        />
        <TextInput
          ref={inputRef2}
          style={styles.input}
          keyboardType='numeric'
          placeholder='Enter number 2'
          value={number2}
          onChangeText={(text) => setNumber2(text)}
        />
        <View style={styles.button}>
          <Button title='+' onPress={calculateSum}/>
          <Button title='-' onPress={calculateDifference} />
        </View>
        <Text style={styles.result}>{result}</Text>
        <Button title="History" onPress={() => navigation.navigate('History', { calcHistory })} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '50%',
    height: 40,
    borderWidth: 1,
    marginVertical: 10,
    textAlign: 'center',
  },
  result: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  button: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
  },
});
