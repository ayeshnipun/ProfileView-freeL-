import React from 'react'
import { Component } from 'react'
import { Text, View, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationScreenProps } from "react-navigation";

export default class Messages extends Component {
	render() {
		return (
			<View>
				<Text> chat </Text>
			</View>
		)
	}
}

	// static navigationOptions = ({ navigation }: NavigationScreenProps) => ({
	// 	headerTitle: "Home",
	// 	headerLeft: Platform.select({
	// 	  ios: null,
	// 	  android: (
	// 		<View  style={{flexDirection:"row", marginTop:4}}>
	// 		<View>
	// 			<Icon
	// 				name="md-chatbubbles"
	// 				size={30}
	// 				color="red"
	// 			/>
	// 		</View>

	// 		<View style={{marginLeft:-17, marginTop:3}}>
	// 			<Icon
	// 				name="ios-more"
	// 				size={18}
	// 				color="white"
	// 			/>
	// 		</View>
	// 	</View>
	// 	  )
	// 	})
	//   });

	Messages.navigationOptions = {
		tabBarIcon: ({ tintColor, focused }) => (
			<View  style={{flexDirection:"row", marginTop:4}}>
				<View>
					<Icon
						name="md-chatbubbles"
						size={30}
						color={tintColor}
					/>
				</View>

				{/* <View style={{marginLeft:-17, marginTop:3}}>
					<Icon
						name="ios-more"
						size={18}
						color="white"
					/>
				</View> */}
			</View>
		)
	} 
