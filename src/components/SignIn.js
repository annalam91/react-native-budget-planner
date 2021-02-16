import React, {useState} from "react";
import {Link} from "@reach/router";
import {
    TouchableOpacity,
    View,
    Text,
    TextInput,
    StyleSheet,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import "./css/SignIn.css";

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const signInWithEmailAndPasswordHandler = (event, email, password) => {
        event.preventDefault();
    };

    const onChangeHandler = (event) => {
        const {name, value} = event.currentTarget;

        if (name === 'userEmail') {
            setEmail(value);
        } else if (name === 'userPassword') {
            setPassword(value);
        }
    };

    return (
        <div> {
            error !== null && <div>{error}</div>
        }
        <View style={styles.containerView}>
            <Text style={styles.loginText}>Login</Text>
                <TextInput style={styles.emailTextInput} value={"Email"}/>
                <TextInput style={styles.passwordTextInput} value={"Passwrod"}/>
                <TouchableOpacity style={styles.loginButton}>
                    <Text>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginButton}>
                    <Text>Sign Up</Text>
                </TouchableOpacity>
        </View>
          
        </div>
    );
};
export default SignIn;

const styles = StyleSheet.create({
    containerView: {
        flex: 1,
    },
    loginText:{
        paddingTop: 100,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 600
    },
    emailTextInput: {
        marginTop: 150,
        height: 40,
        borderBottomColor: 'gray',
        borderBottomWidth: 3
    },
    passwordTextInput: {
        marginTop: 3,
        height: 40,
        borderBottomColor: 'gray',
        borderBottomWidth: 1
    },
    loginButton: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
      },

});
