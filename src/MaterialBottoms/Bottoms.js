import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreens from '../Screens/HomeScreens';
import ProfileScreen from '../Screens/ProfileScreen';
import RutineScreen from '../Screens/RutineScreen';

const Tab = createMaterialBottomTabNavigator();

export function Bottoms () {
  return (
    <Tab.Navigator

        initialRouteName="HomeScreens"
        activeColor="#000000"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: '#85929E' }}
        >
      <Tab.Screen name="Inicio" component={HomeScreens} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
      <Tab.Screen name="Rutina" component={RutineScreen} />
    </Tab.Navigator>
  );

}
