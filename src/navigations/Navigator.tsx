import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../screens/Login/Login';
import IndividualPlanScreen from '../screens/IndividualPlan';

const Stack = createNativeStackNavigator();

interface INavigator {
  isAuth: boolean;
}
const Navigator = ({isAuth}: INavigator) => {
  console.log(isAuth);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: true}}>
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
        <Stack.Screen name="IndividualPlan" component={IndividualPlanScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
