import React from 'react'
import { Component } from 'react'
import { Text, View, TextInput, TouchableHighlight, ScrollView, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import ProfileCard from './ProfileListSubComponents/profileCard';

export default class ProfileList extends Component {
    state = {
        profileCardView: [],
        cardWidth: 0
    }

    componentDidMount() {
        const Width = Dimensions.get('window').width;
        const cardWidth = Width - 30;
        this.setState({
            cardWidth
        })
        { /* This function creates an array */ }
        { /* Then it creates <ProfileAvatar> components according to the loop */ }
        { /* Then the array is assigned to the state of this component */ }
        { /* That state will be used in render method for mapping */ }

        var cardList = [];

        for (let i = 0; i < 3; i++) {
            { /* You nedd to give the source and the avatar size. then it will render according to the given size */ }
            cardList.push(
                <ProfileCard />
            );
        }

        { /* setting the state */ }
        this.setState({
            profileCardView: cardList
        })
        console.log(cardList);
    }

    render() {
        return (
            <ScrollView
                style={{
                    flex: 1,
                    marginTop: 15,
                    marginBottom: 15,
                    backgroundColor: "#e5e3e3",
					width: "100%",
					// alignItems:""
                }}
                contentContainerStyle={{ alignItems: "center", }}
                showsHorizontalScrollIndicator={false}
            >
                <View style={{width:this.state.cardWidth}}> 
					{  
						this.state.profileCardView.map((l, i) => 
							<View style={{width:"100%"}}>
								{l}
							</View>
						)
					}
				</View>
            </ScrollView>
        )
    }
}

