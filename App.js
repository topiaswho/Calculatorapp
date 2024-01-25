
import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';

export default function App() {

const [number1, setNumber1] = useState('');
const [number2, setNumber2] = useState('');
const [result, setResult] = useState('');
const [calcHistory, setCalcHistory] = useState([]);
  
const calculateSum = () => {

  const sum = parseFloat(number1) + parseFloat(number2);
  const temp = `${number1} + ${number2} = ${sum}`;
  setCalcHistory((prevHistory) => [temp, ...prevHistory]);
  setResult(`Sum: ${sum}`)
}

const calculateDifference = () => {
  const diff = parseFloat(number1) - parseFloat(number2);
  const temp = `${number1} - ${number2} = ${diff}`;
  setCalcHistory((prevHistory) => [temp, ...prevHistory]);
  setResult(`Difference: ${diff}`)
}

return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculator</Text>
<TextInput
style={styles.input}
keyboardType='numeric'
placeholder='Enter number 1'
value={number1}
onChangeText={(text) => setNumber1(text)}
/>

<TextInput
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

<FlatList
data={calcHistory}
keyExtractor={(item, index) => index.toString()}
renderItem={({ item }) => <Text>{item}</Text>}
        style={styles.calcHistory}
/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
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
  },
  calcHistory: {
height: 200,
backgroundColor: 'white',
flexGrow: 0,

  },

  title: {
    fontSize: 30,
  }
});
