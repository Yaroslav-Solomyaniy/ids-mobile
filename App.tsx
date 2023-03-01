import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import Login from './src/screens/Login/Login';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={styles.container}>
        <Login />
        <StatusBar translucent backgroundColor={'transparent'} />
      </View>
    </GestureHandlerRootView>
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
