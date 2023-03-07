import React from 'react';
import {StatusBar} from 'react-native';
import Navigator from './src/navigations/Navigator';
import AuthProvider from './src/Context/auth';

const App = () => {
  return (
    <>
      <AuthProvider>
        <StatusBar translucent backgroundColor={'transparent'} />
        <Navigator />
      </AuthProvider>
    </>
  );
};
export default App;
