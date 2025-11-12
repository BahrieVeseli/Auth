
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../srcScreens/appScreen/home/Home';
import OnBoarding from '../srcScreens/Authentication/onBoarding/onBoarding';
export default function Page() {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OnBoarding">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="OnBoarding" component={OnBoarding} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

