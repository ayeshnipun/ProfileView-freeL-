import React from 'react'
import { Component } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';

export default class Profile extends Component {
	render() {
		return (
			<View>
				<Text> profile </Text>
			</View>
		)
	}
}

Profile.navigationOptions = {
	tabBarIcon: ({ tintColor, focused }) => (
			<View>
				<Icon
					name="user"
					size={22}
					color={tintColor}
				/>
			</View>
	)
} 