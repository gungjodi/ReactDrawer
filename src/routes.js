import React from 'react';
import { View, Text } from 'react-native';
import { DrawerNavigator } from 'react-navigation'; // 1.0.0-beta.14
import Ionicons from 'react-native-vector-icons/Ionicons'; // 4.4.2
import SideBar from "./components/sidebar";

import HomeScreen from './components/HomeScreen';
import UsersScreen from './components/UsersScreen';


const RootDrawer = DrawerNavigator(
    {
        Home: { screen: HomeScreen },
        Users: { screen: UsersScreen },
    },
    {
        initialRouteName: "Home",
        contentOptions: {
            activeTintColor: "#e91e63"
        },
        contentComponent: props => <SideBar {...props} />
    }
);

export default RootDrawer;