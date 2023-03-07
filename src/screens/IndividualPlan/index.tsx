import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {AuthContext} from '../../Context/auth';
const IndividualPlanScreen = () => {
  const {logout, user} = AuthContext();

  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <View>
      <Text>1</Text>
      <Button title={'Logout'} onPress={logout} />
    </View>
  );
};

export default IndividualPlanScreen;
