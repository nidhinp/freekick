import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Header, Icon } from "react-native-elements";

import { PRIMARY } from "../utilities/colors";


export default class HeaderComponent extends Component {
    showDrawer() {
        this.props.properties.navigation.navigate("DrawerOpen");
    }

    leftComponent() {
        return (
            <View style={styles.icon}>
                <Icon 
                    color={PRIMARY}
                    name="menu" 
                    onPress={() => this.showDrawer()} />
            </View>
        );
    }

    render() {
        return (
            <Header
                leftComponent={this.leftComponent()}
                centerComponent={
                    { text: this.props.title, style: styles.title }
                }/>
        );
    }
}

var styles = StyleSheet.create({
    title: {
        color: PRIMARY,
        fontWeight: "bold",
    },
    icon: {
        paddingTop: 28,
    },
});