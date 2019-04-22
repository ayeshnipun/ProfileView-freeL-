import React from 'react'
import { Component } from 'react'
import { Text, View, TextInput, TouchableHighlight, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import ProfileCard from './Network/profileCard';

export default class ProfileList extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", marginTop:10, backgroundColor: "#e5e3e3", width: "98%", marginLeft: 5, marginRight: 5 }}>
				{/* <ScrollView> */}
				{/* <View style={{marginTop:10}}> */}
                    <ProfileCard />
				{/* </View> */}
                {/* </ScrollView> */}
            </View>
        )
    }
}

