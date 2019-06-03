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
// 第三方组件 Swiper
import Swiper from 'react-native-swiper';
// 公共样式
import PublicStyles from '../styles/PublicStyles';


export default class TabBarHomePage extends Component {
    render() {
        return (
            <View style={PublicStyles.container}>
                <View style={PublicStyles.banner}>
                    <Swiper showsButtons={false} autoplay={true}>
                        <Image style={PublicStyles.banner} source={require('../../img/banner-1.png')} />
                        <Image style={PublicStyles.banner} source={require('../../img/banner-2.png')} />
                    </Swiper>
                </View>
                <View style={PublicStyles.bg_white}>
                    <View style={PublicStyles.ju_around_Direction}>
                        <TouchableOpacity style={PublicStyles.mv20} onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"BabySafety")}}>
                            <Image style={PublicStyles.pageIcon} source={require('../../img/pageIcon-1.png')} />
                            <Text style={[PublicStyles.ft14_333,PublicStyles.mt10]}>宝宝安全</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={PublicStyles.mv20} onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"WeekFood")}}>
                            <Image style={PublicStyles.pageIcon} source={require('../../img/pageIcon-2.png')} />
                            <Text style={[PublicStyles.ft14_333,PublicStyles.mt10]}>一周食谱</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={PublicStyles.mv20} onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"TimeTable")}}>
                            <Image style={PublicStyles.pageIcon} source={require('../../img/pageIcon-3.png')} />
                            <Text style={[PublicStyles.ft14_333,PublicStyles.mt10]}>课程安排</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={PublicStyles.ju_around_Direction}>
                        <TouchableOpacity style={PublicStyles.mv20} onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"NoticeKindergarten")}}>
                            <Image style={PublicStyles.pageIcon} source={require('../../img/pageIcon-4.png')} />
                            <Text style={[PublicStyles.ft14_333,PublicStyles.mt10]}>园区通知</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={PublicStyles.mv20} onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"NoticeClass")}}>
                            <Image style={PublicStyles.pageIcon} source={require('../../img/pageIcon-5.png')} />
                            <Text style={[PublicStyles.ft14_333,PublicStyles.mt10]}>班级公告</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={PublicStyles.mv20} onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"NoticeHomework")}}>
                            <Image style={PublicStyles.pageIcon} source={require('../../img/pageIcon-6.png')} />
                            <Text style={[PublicStyles.ft14_333,PublicStyles.mt10]}>家庭作业</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({



});
