import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    FlatList,
    Text,
    SafeAreaView,
    View
} from 'react-native';
import { FAB } from 'react-native-paper';
import dayjs from 'dayjs'
import {db} from '../../firebase';

function HomeScreen({navigation}) {

    const [storingBudgetData, setStoringBudgetData] = useState([]);
    const [currentDate, setCurrentDate] = useState("");

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

    const getDate = () => {
      const today = dayjs().format('DD/MM/YYYY');
      setCurrentDate(today)
    }

    useEffect(() => {
      getDate();
        displayItemsAdded();
    }, []);

    return (
        <SafeAreaView style={
            styles.container
        }>
          <Text style={styles.today}>{currentDate}</Text>
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
                    <FAB color='#017d1c' style={styles.addFab} small icon="plus" onPress={() => navigation.navigate('AddItem')} />
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    today:{
      marginTop: 70,
      fontSize: 26,
      fontWeight: '700',
      justifyContent: 'center',
      color: '#000'
    },
    addFab: {
      position: 'absolute',
      margin: 25,
      right: 0,
      bottom: 0,
    },
    itemList: {
      // backgroundColor: '#f9c2ff',
      // padding: 5,
      // marginVertical: 3,
      // marginHorizontal: 16,
    }
});

export default HomeScreen;
