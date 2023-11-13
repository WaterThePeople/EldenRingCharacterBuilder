import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SaveSelectionPage from '../pages/SaveSelectionPage';
import BuildSelectionPage from '../pages/BuildSelectionPage';

const Stack = createNativeStackNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

function Navigation() {
  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="SaveSelectionScreen"
        >
        <Stack.Screen
          name="SaveSelectionScreen"
          component={SaveSelectionPage}
        />
        <Stack.Screen
          name="BuildSelectionScreen"
          component={BuildSelectionPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
