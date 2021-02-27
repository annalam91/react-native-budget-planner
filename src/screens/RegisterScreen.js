import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import {auth} from '../../firebase';

const RegisterScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const signUp = async () => {
        try {
            await auth.createUserWithEmailAndPassword(email, password);
            navigation.navigate('Home');
        } catch (err) {
            setError(err.message);
        }
    }
    return (
        <SafeAreaView  style={styles.container}>
            <Text style={styles.header}>Register</Text>
            <TextInput style={styles.input}
                placeholder="Email address"
                onChangeText={setEmail}
                keyboardType={"email-address"}
                value={email}/>
            <TextInput style={styles.input}
                secureTextEntry={true}
                placeholder="Password"
                onChangeText={setPassword}
                value={password}/>
                {
            error ?
                <Text style={{ color: 'red' }}>{error}</Text>
                : null
        }
            <Button title="Register"/>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.signInLink}>Already have an account? Sign In</Text>
            </TouchableOpacity>
        </SafeAreaView >
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        marginTop: -80,
        fontWeight: "600",
        fontSize: 30
    },
    input: {
       margin: 10,
       height: 40,
       borderColor: '#7a42f4',
       borderWidth: 1,
       width: 300
    },
    signInLink: {
        margin: 5,
        color: '#34abeb'
    }
 })

export default RegisterScreen;
