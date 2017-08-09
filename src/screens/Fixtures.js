import React, { Component } from "react";
import { View, Text, Button, StyleSheet, ListView } from "react-native";
import { Icon } from 'react-native-elements';
import GridView from 'react-native-easy-gridview';

import HeaderComponent from "../components/Header";
import { getCompetitions } from "../managers/competitions";


export default class Fixtures extends Component {
    constructor(){
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([]),
        };
    }

    static navigationOptions = {
        drawerLabel: "Fixtures",
        drawerIcon: ({ tintColor }) => (
            <Icon name="language" color={tintColor} />
        ),
    };

    componentWillMount() {
        this.competitionList();
    }

    competitionList() {
        getCompetitions().then((response) => {
            console.log("final", response);
            let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            this.setState({
                dataSource: ds.cloneWithRows(response),
            });
        }).catch((error) => {});
    }

    renderRow() {
        return (
            <View><Text>Some</Text></View>
        );
    }
  
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <HeaderComponent properties={this.props} title="Fixtures" />
                </View>
                <View>
                <GridView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    numberOfItemsPerRow={2}
                    removeClippedSubviews={false}
                    initialListSize={1}
                    pageSize={2}
                    enableEmptySections
                    />
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});