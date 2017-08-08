import React, { Component } from "react";
import { DrawerNavigator } from "react-navigation";
import { View, Text } from "react-native";

import { PRIMARY } from "./src/utilities/colors"; 
import Home from "./src/screens/Home";
import Fixtures from "./src/screens/Fixtures";

const App = DrawerNavigator({
    Home: {
        screen: Home,
    },
    Fixtures: {
        screen: Fixtures,
    },
},
{
    initialRouteName: "Home",
    contentOptions: {
        activeTintColor: PRIMARY,
    },
});

export default App;