/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
// 全局导航 跳转工具类
import NavigationUtil from '../navigator/NavigationUtil';
// 公共样式
import PublicStyles from '../styles/PublicStyles';
import ChatGroup from "./ChatGroup";




export default class TabBarFindPage extends Component {
    render() {
        return (
            <View style={PublicStyles.container}>
                <ScrollView>
                    <View style={PublicStyles.intervalBar}/>
                    <View style={[PublicStyles.bg_white,PublicStyles.ph15]}>
                        <TouchableOpacity style={PublicStyles.ju_between_Direction} onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"ChatGroup")}}>
                            <View style={[PublicStyles.listPic,PublicStyles.mv8]}>
                                <Image style={PublicStyles.listPic} source={require('../../img/TabBarMyIcon-9.png')} />
                            </View>
                            <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.listCon,PublicStyles.pv8,PublicStyles.borderBottom]}>
                                <Text style={PublicStyles.ft16_333}>芒果班群聊</Text>
                                <Image style={PublicStyles.listMoreBtn} source={require('../../img/more.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={PublicStyles.ju_between_Direction} onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"PhoneList")}}>
                            <View style={[PublicStyles.listPic,PublicStyles.mv8]}>
                                <Image style={PublicStyles.listPic} source={require('../../img/TabBarMyIcon-2.png')} />
                            </View>
                            <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.listCon,PublicStyles.pv8,PublicStyles.borderBottom]}>
                                <Text style={PublicStyles.ft16_333}>园区通讯录</Text>
                                <Image style={PublicStyles.listMoreBtn} source={require('../../img/more.png')} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={PublicStyles.intervalBar}/>
                    <View style={[PublicStyles.bg_white,PublicStyles.ph15]}>
                        <TouchableOpacity style={PublicStyles.ju_between_Direction} onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"TimeTable")}}>
                            <View style={[PublicStyles.listPic,PublicStyles.mv8]}>
                                <Image style={PublicStyles.listPic} source={require('../../img/TabBarMyIcon-15.png')} />
                            </View>
                            <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.listCon,PublicStyles.pv8,PublicStyles.borderBottom]}>
                                <Text style={PublicStyles.ft16_333}>课程安排</Text>
                                <Image style={PublicStyles.listMoreBtn} source={require('../../img/more.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={PublicStyles.ju_between_Direction} onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"WeekFood")}}>
                            <View style={[PublicStyles.listPic,PublicStyles.mv8]}>
                                <Image style={PublicStyles.listPic} source={require('../../img/TabBarMyIcon-16.png')} />
                            </View>
                            <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.listCon,PublicStyles.pv8,PublicStyles.borderBottom]}>
                                <Text style={PublicStyles.ft16_333}>一周食谱</Text>
                                <Image style={PublicStyles.listMoreBtn} source={require('../../img/more.png')} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={PublicStyles.intervalBar}/>
                    <View style={[PublicStyles.bg_white,PublicStyles.ph15]}>
                        <TouchableOpacity style={PublicStyles.ju_between_Direction} onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"SchoolScenery")}}>
                            <View style={[PublicStyles.listPic,PublicStyles.mv8]}>
                                <Image style={PublicStyles.listPic} source={require('../../img/TabBarMyIcon-8.png')} />
                            </View>
                            <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.listCon,PublicStyles.pv8,PublicStyles.borderBottom]}>
                                <Text style={PublicStyles.ft16_333}>园区风采</Text>
                                <Image style={PublicStyles.listMoreBtn} source={require('../../img/more.png')} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={PublicStyles.intervalBar}/>
                    <View style={[PublicStyles.bg_white,PublicStyles.ph15]}>
                        <TouchableOpacity style={PublicStyles.ju_between_Direction} onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"ClassInterest")}}>
                            <View style={[PublicStyles.listPic,PublicStyles.mv8]}>
                                <Image style={PublicStyles.listPic} source={require('../../img/TabBarMyIcon-17.png')} />
                            </View>
                            <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.listCon,PublicStyles.pv8,PublicStyles.borderBottom]}>
                                <Text style={PublicStyles.ft16_333}>兴趣班</Text>
                                <Image style={PublicStyles.listMoreBtn} source={require('../../img/more.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={PublicStyles.ju_between_Direction} onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"ClassParentingDetails")}}>
                            <View style={[PublicStyles.listPic,PublicStyles.mv8]}>
                                <Image style={PublicStyles.listPic} source={require('../../img/TabBarMyIcon-17.png')} />
                            </View>
                            <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.listCon,PublicStyles.pv8,PublicStyles.borderBottom]}>
                                <Text style={PublicStyles.ft16_333}>亲子班</Text>
                                <Image style={PublicStyles.listMoreBtn} source={require('../../img/more.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={PublicStyles.ju_between_Direction} onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"ClassNurseryDetails")}}>
                            <View style={[PublicStyles.listPic,PublicStyles.mv8]}>
                                <Image style={PublicStyles.listPic} source={require('../../img/TabBarMyIcon-17.png')} />
                            </View>
                            <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.listCon,PublicStyles.pv8,PublicStyles.borderBottom]}>
                                <Text style={PublicStyles.ft16_333}>幼小衔接班</Text>
                                <Image style={PublicStyles.listMoreBtn} source={require('../../img/more.png')} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>


        );
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
});
