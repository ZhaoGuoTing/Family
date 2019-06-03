/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
// 1、引入我们需要的导航器
import {createMaterialTopTabNavigator} from "react-navigation";
// 公共样式
import PublicStyles from '../styles/PublicStyles';
import NavigationUtil from "../navigator/NavigationUtil";




export default class SchoolScenery extends Component {
    render() {
        const TabNavigator = createMaterialTopTabNavigator({
            SchoolSceneryTab1: {
                screen: SchoolSceneryTab,
                navigationOptions: {
                    title: '幼园活动',
                },
            },
            SchoolSceneryTab2: {
                screen: SchoolSceneryTab,
                navigationOptions: {
                    title: '活动预知',
                }
            },
            SchoolSceneryTab3: {
                screen: SchoolSceneryTab,
                navigationOptions: {
                    title: '师生风采',
                }
            }
        },{
            tabBarOptions: {
                activeTintColor: '#33D9B5',
                inactiveTintColor: '#333333',
                style: {
                    backgroundColor: '#fff',
                },
                indicatorStyle: {
                    height: 1,
                    backgroundColor: '#33D9B5',
                },
                labelStyle: {
                    fontSize: 16,
                },
            }
        });
        return <TabNavigator/>
    }
}

class SchoolSceneryTab extends Component {
    render() {
        // const {tabLabel} = this.props;
        return (
            <View style={styles.container}>
                <View style={PublicStyles.intervalBar}/>
                <TouchableOpacity style={[PublicStyles.ju_between_Direction,PublicStyles.borderBottom,PublicStyles.pv8,PublicStyles.bg_white,PublicStyles.ph15]} onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"SchoolSceneryDetails")}} >
                    <View style={PublicStyles.SchoolActivitiesListPic}>
                        <Image style={PublicStyles.SchoolActivitiesListPic} source={require('../../img/ActivitiesListPic.png')} />
                    </View>
                    <View style={PublicStyles.SchoolActivitiesListCont}>
                        <Text style={PublicStyles.ft16_333}>庆“六一儿童节”活动</Text>
                        <Text style={PublicStyles.ft14_888} numberOfLines={2}>2017年6月1日，红苹果幼儿园将举办“六一儿童节“活动</Text>
                        <View style={PublicStyles.ju_end_Direction}>
                            <Text style={PublicStyles.ft14_888}>2017-06-01</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
