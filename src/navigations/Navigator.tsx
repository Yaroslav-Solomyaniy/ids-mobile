import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../screens/Login/Login';
import IndividualPlanScreen from '../screens/IndividualPlan';
import {AuthContext} from '../Context/auth';

const Stack = createNativeStackNavigator();
const Navigator = () => {
  const {student} = AuthContext();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: true}}>
        {!student && (
          <Stack.Screen
            options={{headerShown: false}}
            name="Login"
            component={Login}
          />
        )}
        {student && (
          <Stack.Screen
            name="IndividualPlan"
            component={IndividualPlanScreen}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
