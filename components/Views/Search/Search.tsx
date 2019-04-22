import React from 'react'
import { Component } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationScreenProps } from "react-navigation";

export default class Search extends Component {
	render() {
		return (
			<View>
				<Text> Search </Text>
			</View>
		)
	}
}

Search.navigationOptions = {
	tabBarIcon: ({ tintColor, focused }) => (
			<View>
				<Icon
					name="md-search"
					size={30}
					color={tintColor}
				/>
			</View>
	)
} 