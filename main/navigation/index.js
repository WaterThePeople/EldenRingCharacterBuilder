import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from '../pages/HomePage';
import BuildSelectionPage from '../pages/BuildSelectionPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ClassPage from '../pages/ClassPage';
import WeaponsPage from '../pages/WeaponsPage';
import WeaponsList from '../pages/WeaponsPage/WeaponsList';
import WeaponDetail from '../pages/WeaponsPage/WeaponsList/WeaponDetail';
import ArmorsPage from '../pages/ArmorsPage';
import ArmorList from '../pages/ArmorsPage/ArmorList';
import ArmorDetail from '../pages/ArmorsPage/ArmorDetail';
import TalismansPage from '../pages/TalismansPage';
import TalismansList from '../pages/TalismansPage/TalismansList';
import TalismanDetail from '../pages/TalismansPage/TalismanDetail';

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
        initialRouteName="LoginScreen"
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
          name="HomeScreen"
          component={HomePage}
          options={{ gestureEnabled: false }}
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
        <Stack.Screen
          name="ArmorsScreen"
          component={ArmorsPage}
        />
        <Stack.Screen
          name="ArmorListScreen"
          component={ArmorList}
        />
        <Stack.Screen
          name="ArmorDetailScreen"
          component={ArmorDetail}
        />
        <Stack.Screen
          name="TalismansScreen"
          component={TalismansPage}
        />
        <Stack.Screen
          name="TalismansListScreen"
          component={TalismansList}
        />
        <Stack.Screen
          name="TalismanDetailScreen"
          component={TalismanDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
