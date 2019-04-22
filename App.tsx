/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */

import React from 'react';
import { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';

import TabBar from './components/TabBar/TabBar';
import { Text } from 'react-native-elements';



interface Props { }
export default class App extends Component<Props> {
    render() {
        return (
            <View style={{flex:1}}>
				{/* <ProfileCard /> */}
				<TabBar />
				{/* <Text>dsghgdhsds</Text> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});