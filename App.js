import React from 'react';
import  HomeScreen  from './src/screens/HomeScreen'; 
import  RegisterScreen  from './src/screens/RegisterScreen'; 
import LoginScreen from './src/screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={LoginScreen}>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;