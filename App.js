import React from 'react';
import { StyleSheet} from 'react-native';
import SignIn from './src/components/SignIn';

export default function App() {

  return (
    <>
      <SignIn/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});