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
import firebase from '../../firebase';

function HomeScreen({navigation}) {

    const [item, setItem] = useState('');
    const [cost, setCost] = useState(0);
    const [storingBudgetData, setStoringBudgetData] = useState([]);

    const dbc = firebase.firestore().collection('single-transaction');

    const addItem = () => {
        dbc.add({budgetType: item, cost: cost})
        setItem('');
        setCost(0);
    }

    const displayItemsAdded = () => {
        dbc.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push({
                    id: doc.id,
                    ...doc.data()
                });
            });
            setStoringBudgetData(items);
        }, error => {
            console.log(error)
        });
    }

    useEffect(() => {
        displayItemsAdded();
    }, []);

    return (
        <SafeAreaView style={
            styles.addItem
        }>
            <View style={
                styles.itemList
            }>
                <FlatList keyExtractor={
                        (item) => item.id
                    }
                    data={storingBudgetData}
                    renderItem={
                        ({item}) => (
                          <Text>{item.budgetType} £{item.cost}</Text>
                        )
                    }/>
            </View>
        <TextInput style={
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
            value={cost}/>
        <Button title="Add item"
            onPress={
                () => addItem()
            }/>
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
    itemList: {
      backgroundColor: '#f9c2ff',
      padding: 5,
      marginVertical: 3,
      marginHorizontal: 16,
    }
});

export default HomeScreen;
