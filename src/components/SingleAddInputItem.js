import React, {useState, useEffect} from 'react';
import RNPickerSelect, {defaultStyles} from 'react-native-picker-select';
import {
    StyleSheet,
    FlatList,
    Text,
    Button,
    TextInput,
    SafeAreaView,
    View
} from 'react-native';

function SingleAddInputItem({
    navigation
}, props) {

    const [item, setItem] = useState('');
    const [cost, setCost] = useState(0);

    return (
        <SafeAreaView style={
            styles.container
        }>
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
            <View style={styles.pickerSelectStyles}>
                <RNPickerSelect
                    onValueChange={
                        (value) => console.log(value)
                    }
                    items={
                        [
                            {
                                label: 'Bills',
                                value: 'bills'
                            }, {
                                label: 'Entertainment',
                                value: 'entertainment'
                            }, {
                                label: 'Grovery',
                                value: 'grocery'
                            },
                        ]
                    }/>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50
    },
    input: {
        margin: 10,
        height: 40,
        borderBottomColor: '#7a42f4',
        borderBottomWidth: 1,
        borderTopColor: '#fff',
        borderRightColor: '#fff',
        borderLeftColor: '#fff',
        width: 300
    },
    pickerSelectStyles: {
        paddingTop: 25,
        wdith: 300,
        fontSize: 20,
        width: '100%',
    }
});

export default SingleAddInputItem;

