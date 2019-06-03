/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {createBottomTabNavigator} from "react-navigation";
import {Platform, StyleSheet, Text, View,Image} from 'react-native';

// 全局导航 跳转工具类
import NavigationUtil from '../navigator/NavigationUtil';

import TabBarFindPage from './TabBarFindPage';
import TabBarHomePage from './TabBarHomePage';
import TabBarInfoPage from './TabBarInfoPage';
import TabBarMyPage from './TabBarMyPage';


export default class HomePage extends Component {
    tabNavigator() {
        return createBottomTabNavigator({
            TabBarHomePage: {
                screen: TabBarHomePage,
                navigationOptions: {
                    tabBarLabel: "首页",
                    tabBarIcon: ({focused}) => {
                        if (focused) {
                            return (
                                <Image style={styles.tabBarIcon} source={require('../../img/TabHomeCur.png')}/>
                            );
                        }
                        return (
                            <Image style={styles.tabBarIcon} source={require('../../img/TabHome.png')}/>
                        );
                    },
                }
            },
            TabBarInfoPage: {
                screen: TabBarInfoPage,
                navigationOptions: {
                    tabBarLabel: "消息",
                    tabBarIcon: ({focused}) => {
                        if (focused) {
                            return (
                                <View>
                                    <Image style={styles.tabBarIcon} source={require('../../img/TabCommentCur.png')}/>
                                    <View style={styles.tab}>
                                        <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
                                            4
                                        </Text>
                                    </View>
                                </View>
                            );
                        }
                        return (
                            <View>
                                <Image style={styles.tabBarIcon} source={require('../../img/TabComment.png')}/>
                                <View style={styles.tab}>
                                    <Text style={{color: 'white', fontSize: 10, fontWeight: 'bold'}}>
                                        4
                                    </Text>
                                </View>
                            </View>
                        );
                    },
                }
            },
            TabBarFindPage: {
                screen: TabBarFindPage,
                navigationOptions: {
                    tabBarLabel: "发现",
                    tabBarIcon: ({focused}) => {
                        if (focused) {
                            return (
                                <Image style={styles.tabBarIcon} source={require('../../img/TabFindCur.png')}/>
                            );
                        }
                        return (
                            <Image style={styles.tabBarIcon} source={require('../../img/TabFind.png')}/>
                        );
                    },

                }
            },
            TabBarMyPage: {
                screen: TabBarMyPage,
                navigationOptions: {
                    tabBarLabel: "我的宝宝",
                    tabBarIcon: ({focused}) => {
                        if (focused) {
                            return (
                                <Image style={styles.tabBarIcon} source={require('../../img/TabUserCur.png')}/>
                            );
                        }
                        return (
                            <Image style={styles.tabBarIcon} source={require('../../img/TabUser.png')}/>
                        );
                    },
                }
            },
        },{
            tabBarOptions: {
                activeTintColor: '#33D9B5',
                inactiveTintColor: '#333',

                labelStyle: {
                    fontSize: 14,
                },
            },
        });
    }

    render() {
        NavigationUtil.navigation = this.props.navigation;
        const Tab = this.tabNavigator();
        return <Tab/>
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    tabBarIcon: {
        width: 24,
        height: 24,
    },
    tab: {
        width: 16,
        height: 16,
        position: 'absolute',
        right: -6,
        top: -3,
        backgroundColor: 'red',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
