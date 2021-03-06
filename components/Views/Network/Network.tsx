import React from 'react'
import { Component } from 'react'
import { Text, View, TextInput, TouchableHighlight, TouchableOpacity, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import IconFA5 from 'react-native-vector-icons//FontAwesome';
import ProfileCard from '../../ProfileList/ProfileListSubComponents/profileCard';
import ProfileList from '../../ProfileList/ProfileList';
import NetWorkTabs from '../../NetworkTabs/NetWorkTabs';

export default class Network extends Component {

	render() {
		return (
			<View style={{ flex: 1, alignItems: "center", backgroundColor: "#e5e3e3" }}>

				<View style={{ width:"100%", height:25, marginBottom:7.5, marginTop:17, borderRadius:15}}>
					<NetWorkTabs />
				</View>
				<View style={{ width: "100%", flexDirection: "row", backgroundColor: "white", alignItems: "center" }}>
					<View style={{ flex: 1 }}>
						<TextInput
							style={{ backgroundColor: "#e5e3e3", borderRadius: 5, marginLeft: 6, marginBottom: 6, marginTop: 6, marginRight:6 }}
							placeholder="Search"
							placeholderTextColor="#c1c1c1"
							onChangeText = {(txt) => console.log(txt)}
						/>
					</View>

					{/* <TouchableOpacity style={{ marginLeft: 10, marginRight: 11 , alignItems:"center", justifyContent:"center"}}>
						<View style={{ flexDirection: "row" }}>
							<Text style={{ color: "#05bafc", marginRight:4, marginTop:4 }}>Filter</Text>
							<View style={{height:30, marginLeft:2, width:30, borderRadius:50, backgroundColor:"#05bafc", alignItems:"center", justifyContent:"center"}}>
								<IconFA5
									name="sliders-h"
									color="white"
									size={15}
								/>
							</View>
						</View>
					</TouchableOpacity> */}
				</View>
				
				<View style={{backgroundColor:"#e5e3e3", width:"100%", height:"80%"}}>
						<ProfileList />
				</View>
			</View>
		)
	}
}

Network.navigationOptions = {
	tabBarIcon: ({ tintColor, focused }) => (
		<View>
			<IconFA5
				name="users"
				size={26}
				color={tintColor}
			/>
		</View>
	)
} 