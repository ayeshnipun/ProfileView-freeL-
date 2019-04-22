import React from 'react'
import { Component } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

export default class More extends Component {
	render() {
		return (
			<View>
				<Text> More </Text>
			</View>
		)
	}
}

More.navigationOptions = {
	tabBarIcon: ({ tintColor, focused }) => (
			<View>
				<Icon
					name="ios-more"
					size={30}
					color={tintColor}
				/>
			</View>
	)
} 