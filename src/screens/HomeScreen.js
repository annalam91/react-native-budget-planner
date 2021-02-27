import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { FAB } from 'react-native-paper';
import dayjs from 'dayjs'
import ListItem from '../components/ListItem';
import FinanceChart from '../components/FinanceChart'

function HomeScreen({navigation}) {

    const [currentDate, setCurrentDate] = useState("");

    const getDate = () => {
      const today = dayjs().format('DD/MM/YYYY');
      setCurrentDate(today)
    }

    useEffect(() => {
      getDate();
    }, []);

    return (
        <SafeAreaView style={
            styles.container
        }>
          <Text style={styles.today}>{currentDate}</Text>
          <FinanceChart/>
          <ListItem />
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
});

export default HomeScreen;
