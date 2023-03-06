import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import Navigator from "./src/navigations/Navigator";

const App = () => {
  return (
    <>
      <StatusBar translucent backgroundColor={"transparent"} />
      <Navigator isAuth={true} />
    </>
  );
};

export default App;
