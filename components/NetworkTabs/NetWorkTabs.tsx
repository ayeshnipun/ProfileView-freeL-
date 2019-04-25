import React from 'react'
import { Component } from 'react'
import { Text, View, Dimensions, Alert, TouchableOpacity } from 'react-native'


export default class NetWorkTabs extends Component {
    state = {
        activeTab: "t1",
        tabWidth: 0
    }

    componentDidMount() {
        const Width = Dimensions.get('window').width;
        const tabBarWidth = Width - 30;
        this.setState({
            tabWidth: tabBarWidth / 3
        })
    }

    handleTabColor = (tab) => {
        if (tab == "t1") {
            this.setState({ activeTab: "t1" })
            Alert.alert("Tab 1 clicked")
        }
        else if (tab == "t2") {
            this.setState({ activeTab: "t2" })
            Alert.alert("Tab 2 clicked")
        }
        else if (tab == "t3") {
            this.setState({ activeTab: "t3" })
            Alert.alert("Tab 3 clicked")
        }
    }

    render() {
        return (
            <View style={{ width: "100%", justifyContent: "center", flex: 1, alignItems: "center", flexDirection: "row" }}>
                <TouchableOpacity onPress={() => this.handleTabColor("t1")}
                    style={{
                        backgroundColor: this.state.activeTab == "t1" ? "#1359f2" : "white",
                        width: this.state.tabWidth,
                        // width: "30%",
                        height: 30,
                        borderWidth: 1,
                        borderColor: "#128df1",
                        alignItems: "center",
                        justifyContent: "center",
                        borderBottomLeftRadius: 5,
                        borderTopLeftRadius: 5,
                    }}
                >
                    <Text
                        style={{
                            color: this.state.activeTab == "t1" ? 'white' : '#1359f2'
                        }}
                    >
                        Tab 1 </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.handleTabColor("t2")}
                    style={{
                        backgroundColor: this.state.activeTab == "t2" ? "#1359f2" : "white",
                        // width: "30%",
                        width: this.state.tabWidth,
                        height: 30,
                        borderWidth: 1,
                        borderColor: "#128df1",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Text
                        style={{
                            color: this.state.activeTab == "t2" ? 'white' : '#1359f2'
                        }}
                    >
                        Tab 2 </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.handleTabColor("t3")}
                    style={{
                        backgroundColor: this.state.activeTab == "t3" ? "#1359f2" : "white",
                        // width: "30%",
                        width: this.state.tabWidth,
                        height: 30,
                        borderWidth: 1,
                        borderColor: "#128df1",
                        alignItems: "center",
                        justifyContent: "center",
                        borderBottomRightRadius: 5,
                        borderTopRightRadius: 5,
                    }}
                >
                    <Text
                        style={{
                            color: this.state.activeTab == "t3" ? 'white' : '#1359f2'
                        }}
                    >
                        Tab 3 </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
