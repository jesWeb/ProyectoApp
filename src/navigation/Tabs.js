import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreens from "../Screens/HomeScreens";
import ProfileScreen from "../Screens/ProfileScreen";
import RutineScreen from "../Screens/RutineScreen";

const Tab = createBottomTabNavigator();

export const Tabs = () => {

    return (
        <Tab.Navigator> 
            <Tab.Screen name = 'Inicio' component = { HomeScreens }/> 
            <Tab.Screen name = 'Perfil' component = { ProfileScreen }/> 
            <Tab.Screen name = 'Rutina' component = { RutineScreen }/> 
        </Tab.Navigator> 
    );
}