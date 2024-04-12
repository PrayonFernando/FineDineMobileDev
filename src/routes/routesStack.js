import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Welcome from '../Screens/welcomeScreen/welcomeScreen';
import HomeScreen from '../Screens/homeScreen/homeScreen';
import ResultsScreen from '../Screens/resultsScreen/resultsScreen';
import DetailsScreen from '../Screens/detailsScreen/detailsScreen';

const Stack = createNativeStackNavigator();

const RouteStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'white',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontFamily: 'Roboto-Bold',
          fontSize: 25,
        },
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ResultsScreen"
        component={ResultsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default RouteStack;
