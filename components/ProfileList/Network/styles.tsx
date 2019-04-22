import React from 'react'
import { Component } from 'react'
import { StyleSheet} from 'react-native'


const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},

	profileCard: {
		marginTop: 10,
		width: "95%",
		height: 170,
		backgroundColor: 'white',
		borderRadius: 20,
		shadowColor: 'black',
		shadowOffset: {
			width: 10,
			height: 10
		},
		shadowRadius: 10,
		shadowOpacity: 1.0
	},

	mainRowView:{ 
		flexDirection: 'row' 
	},

	mainAvatarView:{
		flexDirection:'column'
	},

	avatarView: {
		marginLeft: 20,
		marginRight: 15,
		marginTop: 15,
		marginBottom:23,
		height:67,
		width:67,
		borderRadius:50,
		alignItems:'center',
		justifyContent: 'center',
		backgroundColor:'white',alignContent:'center'
	},

	informationView: {
		marginTop: 8
	},

	nameText: {
		fontSize: 28,
		color: 'black',
		marginBottom: 5
	},

	otherText: {
		fontSize: 20,
	},

	plusIconView: {
		width: 30,
		height: 30,
		backgroundColor: '#42d4f4',
		borderRadius: 50,
		alignItems: 'center',
		marginLeft: "6%"
	},

	overlappedIconsView:{ 
		flexDirection:'row', 
		width:100, flex:1, 
		justifyContent: 'center', 
		alignItems:'center'
	},

	singleOverlapIcon:{ 
		height: 35, 
		width: 35, 
		borderRadius: 50, 
		backgroundColor: 'white', 
		justifyContent: 'center', 
		alignItems: 'center'
	},

	overlapIcons:{ 
		height: 35, 
		width: 35, 
		borderRadius: 50, 
		backgroundColor: 'white', 
		justifyContent: 'center', 
		alignItems: 'center', 
		marginLeft: -10 
	},

	mainInformationView:{
		width:"100%", 
		height:150
	},

	bottomInformationView:{
		marginTop:10, 
		flexDirection:'row'
	},

	endorsers:{ 
		fontSize: 16 
	},

	thumbsUpView:{ 
		flexDirection: 'row', 
		marginLeft: "9%", 
		marginTop:-2  
	},

	thumbsUpText:{ 
		fontSize: 16, 
		marginLeft: 3, 
		marginTop:3 
	}
});


export default styles;