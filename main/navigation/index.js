import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from '../pages/HomePage';
import BuildSelectionPage from '../pages/BuildSelectionPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ClassPage from '../pages/ClassPage';
import WeaponsPage from '../pages/WeaponsPage';
import WeaponsList from '../features/WeaponsList';
import WeaponDetail from '../features/WeaponDetail';
import ArmorsPage from '../pages/ArmorsPage';
import ArmorList from '../features/ArmorList';
import ArmorDetail from '../features/ArmorDetail';
import TalismansPage from '../pages/TalismansPage';
import TalismansList from '../features/TalismansList';
import TalismanDetail from '../features/TalismanDetail';
import SpellsPage from '../pages/SpellsPage';
import SpellsList from '../features/SpellsList';
import SpellDetail from '../features/SpellDetail';
import SummaryPage from '../pages/SummaryPage';
import RankingSummaryPage from '../pages/RankingSummaryPage';

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
        <Stack.Screen
          name="SpellsScreen"
          component={SpellsPage}
        />
        <Stack.Screen
          name="SpellsListScreen"
          component={SpellsList}
        />
        <Stack.Screen
          name="SpellDetailScreen"
          component={SpellDetail}
        />
        <Stack.Screen
          name="SummaryScreen"
          component={SummaryPage}
        />
        <Stack.Screen
          name="RankingSummaryScreen"
          component={RankingSummaryPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
