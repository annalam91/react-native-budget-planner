import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    FlatList,
    Text,
    SafeAreaView,
} from 'react-native';
import {db} from '../../firebase';

function ListItem({navigation}) {

    const [storingBudgetData, setStoringBudgetData] = useState([]);

    const dbc = db.collection('single-transaction');

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
            styles.container
        }>
            <FlatList keyExtractor={(item) => item.id}
                data={storingBudgetData}
                renderItem={
                    ({item}) => (
                        <Text>{item.budgetType} £ {item.cost}</Text>
                    )
                }/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    itemList: {
        // backgroundColor: '#f9c2ff',
        // padding: 5,
        // marginVertical: 3,
        // marginHorizontal: 16,
    }
});

export default ListItem;
