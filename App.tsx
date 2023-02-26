import React from 'react';
import {Text, View} from 'react-native';
import styles from './app.scss';
import SVGImg from './logo.svg';

const App = () => {
  return (
    <View>
      <Text style={styles.text}>App</Text>
      <SVGImg width={200} height={200} />
    </View>
  );
};

export default App;
