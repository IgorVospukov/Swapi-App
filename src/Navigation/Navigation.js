import React from 'react';
import StartScreen from '../Screens/StartScreen';
import PeopleScreen from '../Screens/PeopleScreen';
import CharacterScreen from '../Screens/CharacterScreen';
import FilmsScreen from '../Screens/FilmsScreen';
import OneFilmScreen from '../Screens/OneFilmScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Navigate = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Page1" component={StartScreen} />
        <Stack.Screen name="Page2" component={PeopleScreen} />
        <Stack.Screen name="Page3" component={CharacterScreen} />
        <Stack.Screen name="Page4" component={FilmsScreen} />
        <Stack.Screen name="Page5" component={OneFilmScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigate;
