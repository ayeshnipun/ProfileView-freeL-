import React from 'react'
import { Component }  from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Button, TouchableHighlight } from 'react-native'
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons'
import ProfileAvatar from './ProfileAvatar/ProfileAvatar';
import styles from './styles';

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
		{ /* This function creates an array */}
		{ /* Then it creates <ProfileAvatar> components according to the loop */}
		{ /* Then the array is assigned to the state of this component */}
		{ /* That state will be used in render method for mapping */}

		var buttonsListArr = [];

		for (let i = 0; i < 3; i++) 
		{
			{ /* You nedd to give the source and the avatar size. then it will render according to the given size */}
			buttonsListArr.push(
				<ProfileAvatar size={26} source={'https://i.ibb.co/KG4J6cs/user.png'}/>   
			);
		}

		{ /* setting the state */}
		this.setState({
			subAvatars: buttonsListArr
		})
	}

	
	render() {
		return (  
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
		)
	}
}
