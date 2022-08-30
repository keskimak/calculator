import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';
import React from 'react';

export default function App() {

  const [text, changeText] = React.useState('');
  const [text2, changeText2] = React.useState('');
  const [result, setResult] = React.useState(null);

  const increment = () => {

    sum = Number(text) + Number(text2)

    setResult(sum)
    changeText('')
    changeText2('');

  }

  const decrement = () => {
    sum = Number(text) - Number(text2)

    setResult(sum)
    changeText('');
    changeText2('');

  }

  return (
    <>
      <View style={styles.maincontainer}>
        <View style={styles.container}>
          <Text>Result: {result}</Text>
          <TextInput style={styles.input} onChangeText={text => changeText(text)} value={text} keyboardType="number-pad"></TextInput>
          <TextInput style={styles.input} onChangeText={text => changeText2(text)} value={text2} keyboardType="number-pad"></TextInput>
        </View>

        <View style={styles.buttonContainer}>
          <Button title="+" onPress={increment}></Button>
          <Button title="-" onPress={decrement}></Button>

        </View>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  


  },
  container: {

    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
 
  },
  input: {
    width: 200,
    borderColor: 'black',
    borderWidth: 1,
    keyboardType: "numeric",
  },
  buttonContainer: {
    flexDirection: "row",
    backgroundColor: '#fff',
    justifyContent: "center"


  },
});
