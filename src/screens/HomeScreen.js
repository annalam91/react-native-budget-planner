import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  TextInput,
  SafeAreaView,
} from 'react-native';
import firebase from '../../firebase';

function HomeScreen({ navigation }) {

  const [item, setItem] = useState('');
  const [cost, setCost] = useState(0);
  const [testingStoringData, setTestingStoringData] = useState([]);

  const dbc = firebase.firestore().collection('single-transaction');

  const addItem = () => {
    dbc.add({
      budgetType: item,
      cost: cost
    })
    setItem('');
    setCost(0);
  }

  useEffect(() => {
    const subscriber = dbc.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setTestingStoringData(items);
    });
    return () => subscriber();
  }, []);

  return (
    <SafeAreaView style={styles.addItem}>
      <TextInput style={styles.input}
        placeholder={"Bills"}
        onChangeText={setItem}
        value={item}/>
      <TextInput style={styles.input}
        placeholder={"£0"}
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