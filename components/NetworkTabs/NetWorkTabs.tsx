import React from 'react'
import { Component } from 'react'
import { Text, View } from 'react-native'

import { createMaterialTopTabNavigator , createAppContainer } from 'react-navigation';

import Tab1 from './tab1';
import Tab2 from './tab2';
import Tab3 from './tab3';

// export default class NetWorkTabs extends Component {
	
//     render() {
//         return (
//             <View>
//                 <Text> textInComponent </Text>
//             </View>
//         )
//     }
// }

const NetWorkTabs = createMaterialTopTabNavigator (
	{
		tab1: Tab1,
		tab2: Tab2,
		tab3: Tab3,
	},
	{
		tabBarOptions: {
			showIcon: false,
			showLabel: true,
			activeTintColor: 'blue',
			upperCaseLabel : false,
			scrollEnabled:false,
			style: {
				borderRadius:10,
				marginTop:-12,
				backgroundColor: 'white',
			},
			tabStyle: {
				width: 30,
			},
			indicatorStyle: {
				opacity: 0
			}
		},
	}

);

export default createAppContainer(NetWorkTabs);