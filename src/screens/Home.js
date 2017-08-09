import React, { Component } from "react";
import {View, Text, Button, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

import HeaderComponent from "../components/Header";

export default class Home extends Component {
    constructor(props){
        super(props);
    }

    static navigationOptions = {
        drawerLabel: "Home",
        drawerIcon: ({ tintColor }) => (
            <Icon name="home" color={tintColor} />
        ),
    };
  
    render() {
        return (
            <View style={styles.container}>
                <HeaderComponent properties={this.props} title="Home" />
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
