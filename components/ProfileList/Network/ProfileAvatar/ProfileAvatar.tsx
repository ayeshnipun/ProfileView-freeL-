import React from 'react'
import { Component }  from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { Avatar } from 'react-native-elements';

export interface Props {
	size?: number,
	source?: string
}

export default class ProfileAvatar extends Component<Props> {
	constructor(props: Props){
		super(props)
	}

	render() {
		return (
			<View>
				{/* <Avatar
					size={this.props.size}
					rounded
					source={{ uri: this.props.source }}
				/> */}
				<Image
					style={{width: this.props.size, height: this.props.size, borderRadius:50}}
					source={{uri: this.props.source}}
				/>
			</View>
		)
	}
}
