/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
// 全局导航 跳转工具类
import NavigationUtil from '../navigator/NavigationUtil';
// 公共样式
import PublicStyles from '../styles/PublicStyles';



export default class BabySafety extends Component {
    render() {
        return (
            <View style={PublicStyles.container}>
                <View style={PublicStyles.intervalBar}/>
                <View style={[PublicStyles.bg_white,PublicStyles.ph15]}>
                    <TouchableOpacity style={PublicStyles.ju_between_Direction} onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"BabyHealthy")}}>
                        <View style={[PublicStyles.listPic,PublicStyles.mv8]}>
                            <Image style={PublicStyles.listPic} source={require('../../img/TabBarMyIcon-12.png')} />
                        </View>
                        <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.listCon,PublicStyles.pv8,PublicStyles.borderBottom]}>
                            <Text style={PublicStyles.ft16_333}>宝宝健康</Text>
                            <Image style={PublicStyles.listMoreBtn} source={require('../../img/more.png')} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={PublicStyles.ju_between_Direction} onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"BabyDrug")}}>
                        <View style={[PublicStyles.listPic,PublicStyles.mv8]}>
                            <Image style={PublicStyles.listPic} source={require('../../img/TabBarMyIcon-13.png')} />
                        </View>
                        <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.listCon,PublicStyles.pv8,PublicStyles.borderBottom]}>
                            <Text style={PublicStyles.ft16_333}>宝宝药品</Text>
                            <Image style={PublicStyles.listMoreBtn} source={require('../../img/more.png')} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={PublicStyles.ju_between_Direction} onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"BabyAttendance")}}>
                        <View style={[PublicStyles.listPic,PublicStyles.mv8]}>
                            <Image style={PublicStyles.listPic} source={require('../../img/TabBarMyIcon-6.png')} />
                        </View>
                        <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.listCon,PublicStyles.pv8,PublicStyles.borderBottom]}>
                            <Text style={PublicStyles.ft16_333}>宝宝考勤</Text>
                            <Image style={PublicStyles.listMoreBtn} source={require('../../img/more.png')} />
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}
