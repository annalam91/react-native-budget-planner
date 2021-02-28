import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    FlatList,
    Text,
    Button,
    TextInput,
    SafeAreaView,
    View
} from 'react-native';
import {db} from '../../firebase';
import {FAB} from 'react-native-paper';
import SingleAddInputItem from '../components/SingleAddInputItem';

function AddItemScreen({navigation}) {

    const [item, setItem] = useState('');
    const [cost, setCost] = useState(0);

    const dbc = db.collection('single-transaction');

    const addItem = () => {
        dbc.add({budgetType: item, cost: cost})
        setItem('');
        setCost(0);
        navigation.navigate('Home');
    }

    return (
        <SafeAreaView style={
            styles.container
        }>
             {/* <TextInput style={
                styles.input
            }
            placeholder={"Bills"}
            onChangeText={setItem}
            value={item}/>
        <TextInput style={
                styles.input
            }
            placeholder={"£0"}
            onChangeText={setCost}
            value={cost}/> */}
            <SingleAddInputItem/> 
            <Button title="Add item"
                onPress={
                    () => addItem()
                }/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
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
    }
});

export default AddItemScreen;

