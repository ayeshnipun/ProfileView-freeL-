import React from 'react'
import { Component } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';

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
				<IconFA5
					name="user-alt"
					size={22}
					color={tintColor}
				/>
			</View>
	)
} 