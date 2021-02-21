import React, {useState} from 'react';
import {Button, View, TextInput} from 'react-native';

function RegisterScreen({ navigation }) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [fetching, setFetching] = useState(false)

    return (
        <View style={
            {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }
        }>
            <TextInput label={"Email"}
                autoCapitalize={false}
                keyboardType="email-address"
                placeholder="Email address"
                onChangeText={
                    text => {
                        setEmail(text)
                    }
                }/>
                            <TextInput label={"Email"}
                autoCapitalize={false}
                keyboardType="default"
                placeholder="Password"
                onChangeText={
                    text => {
                        setEmail(text)
                    }
                }/>
            <Button title="Go back"
                onPress={
                    () => navigation.navigate('Home')
                }/>
        </View>
    );
}

export default RegisterScreen;
