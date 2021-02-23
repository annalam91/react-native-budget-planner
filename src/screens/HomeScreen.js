import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  TextInput,
  SafeAreaView,
} from 'react-native';

function HomeScreen({ navigation }) {

  const [item, setItem] = useState('');
  const [cost, setCost] = useState(0);

  const addItem = () => {
    console.log('Boop!');
  }

  return (
    <SafeAreaView style={styles.addItem}>
      <TextInput style={styles.input}
        placeholder="Bills"
        onChangeText={setItem}
        value={item}/>
      <TextInput style={styles.input}
        placeholder="£0"
        onChangeText={setCost}
        value={cost}/>
      <Button title="Add item"
        onPress={() => addItem()}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  addItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    margin: 10,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
    width: 300
 },
  addItemText: {
    borderColor: '#7a42f4',
    paddingHorizontal: 5,
    paddingVertical: 7,
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
    minWidth: "50%",
    textAlign: "center"
  },
});

  export default HomeScreen;