import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SaveSelectionPage from '../pages/SaveSelectionPage';
import BuildSelectionPage from '../pages/BuildSelectionPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ClassPage from '../pages/ClassPage';
import WeaponsPage from '../pages/WeaponsPage';
import WeaponsList from '../pages/WeaponsPage/WeaponsList';
import WeaponDetail from '../pages/WeaponsPage/WeaponsList/WeaponDetail';

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
        initialRouteName="Loginscreen"
        >
        <Stack.Screen
          name="LoginScreen"
          component={LoginPage}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterPage}
        />
        <Stack.Screen
          name="SaveSelectionScreen"
          component={SaveSelectionPage}
        />
        <Stack.Screen
          name="BuildSelectionScreen"
          component={BuildSelectionPage}
        />
        <Stack.Screen
          name="ClassScreen"
          component={ClassPage}
        />
        <Stack.Screen
          name="WeaponsScreen"
          component={WeaponsPage}
        />
        <Stack.Screen
          name="WeaponsList"
          component={WeaponsList}
        />
        <Stack.Screen
          name="WeaponDetail"
          component={WeaponDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
