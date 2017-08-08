import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { Icon } from "react-native-elements";

import HeaderComponent from "../components/Header";


export default class Fixtures extends Component {
    constructor(props){
        super(props);
    }

    static navigationOptions = {
        drawerLabel: "Fixtures",
        drawerIcon: ({ tintColor }) => (
            <Icon name="language" color={tintColor} />
        ),
    };
  
    render() {
        return (
            <View>
                <HeaderComponent properties={this.props} title="Fixtures" />
            </View>
        );
    }
}