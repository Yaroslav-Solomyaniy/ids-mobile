import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import Login from './src/screens/Login/Login';

const App = () => {
  return (
    <View style={styles.container}>
      <Login />
      <StatusBar translucent backgroundColor={'transparent'} />
    </View>
  );
};
export default App;

// React Native Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
