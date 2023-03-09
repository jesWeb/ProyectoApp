import React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

export function HomeScreens ({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Perfil')}
        title="Ve a perfil"
      />
    </View>
  );
}

export function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Ve a Inicio" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function MenuDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Inicio">
        <Drawer.Screen name="Inicio" component={HomeScreens} />
        <Drawer.Screen name="Perfil" component={ProfileScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}