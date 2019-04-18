import React from 'react'
import { Component }  from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Button, TouchableHighlight } from 'react-native'
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons'
import ProfileAvatar from './ProfileAvatar';

export default class ProfileCard extends Component{
	state = {
		name: "John smith",
		profession: "Teacher",
		address: "Jakarta | Indonesia",
		endorsers: 105,
		likes: 45,
		avatar: 'https://i.ibb.co/KG4J6cs/user.png',
		subAvatars :[]
	}

	componentDidMount = () => {
		var buttonsListArr = [];

		for (let i = 0; i < 3; i++) 
		{
			buttonsListArr.push(
				<ProfileAvatar size={26} source={'https://i.ibb.co/KG4J6cs/user.png'}/>
			);
		}
		this.setState({
			subAvatars: buttonsListArr
		})
	}

	
	render() {
		return (
			<View style={styles.container}>
				<View elevation={5} style={styles.profileCard}>
					<View style={styles.mainRowView}>
						<View style={styles.mainAvatarView}>
							<View style={styles.avatarView}>
								<ProfileAvatar size={65} source={this.state.avatar}/>
							</View>

							<View style={styles.overlappedIconsView}>
								{
									this.state.subAvatars.map((l, i) => (
										i == 0 ? (
										<View style={styles.singleOverlapIcon}>
											{l}
										</View>
										) : (
										<View style={styles.overlapIcons}>
											{l}
										</View>
										)
									))
								}
							</View>

						</View>

						<View style={styles.mainInformationView}>
							<View style={styles.informationView}>
								<Text style={styles.nameText}>{this.state.name}</Text>
								<Text style={styles.otherText}>{this.state.profession}</Text>
								<Text style={styles.otherText}>{this.state.address}</Text>
							</View>
						

							<View style={styles.bottomInformationView}>
								<View>
									<Text style={styles.endorsers}>{this.state.endorsers} endorsers</Text>
								</View>

								<View style={styles.thumbsUpView}>
									<Ionicons
										name="md-thumbs-up"
										color="black"
										size={28}
									/>
									<Text style={styles.thumbsUpText}>{this.state.likes}</Text>
								</View>

									
								<TouchableOpacity style={styles.plusIconView} onPress={ () => console.log('test')}>									
									<Icon
										name="plus"
										color="white"
										size={28}
									/>
								</TouchableOpacity>
								
							</View>
							
						</View>
					</View>
				</View>
			</View>
		)
	}
}
// styles.profileCard

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	profileCard: {
		// flexDirection: 'row',
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
	mainRowView:{ flexDirection: 'row' },
	mainAvatarView:{flexDirection:'column'},
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
	overlappedIconsView:{ flexDirection:'row', width:100, flex:1, justifyContent: 'center', alignItems:'center'},
	singleOverlapIcon:{ height: 35, width: 35, borderRadius: 50, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'},
	overlapIcons:{ height: 35, width: 35, borderRadius: 50, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', marginLeft: -10 },
	mainInformationView:{width:"100%", height:150},
	bottomInformationView:{marginTop:10, flexDirection:'row'},
	endorsers:{ fontSize: 16 },
	thumbsUpView:{ flexDirection: 'row', marginLeft: "9%", marginTop:-2  },
	thumbsUpText:{ fontSize: 16, marginLeft: 3, marginTop:3 }
});