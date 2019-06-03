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
import Swiper from "react-native-swiper";



export default class ClassInterestDetails extends Component {
    render() {
        return (
            <View style={PublicStyles.container}>
                <ScrollView>
                    <View style={PublicStyles.banner}>
                        <Image style={PublicStyles.banner} source={require('../../img/ClassBanner-1.png')} />
                    </View>
                    <View style={PublicStyles.ph15}>
                        <View style={[PublicStyles.courseIntroWrap,PublicStyles.mt15]}>
                            <View style={[PublicStyles.courseIntroTitle,PublicStyles.bg_green,PublicStyles.al_center,PublicStyles.ju_center]}>
                                <Text style={PublicStyles.ft16_fff}>课程简介</Text>
                            </View>
                            <View style={[PublicStyles.bg_white,PublicStyles.pv6,PublicStyles.ph10]}>
                                <Text style={PublicStyles.ft14_333}>拉丁舞是体育竞技类舞蹈，分为恰恰、桑巴、伦巴、牛仔、斗牛五支舞，爆发力，风格感极强。桔子树艺术教育为此开设多种少儿拉丁舞班型：少儿拉丁1V1</Text>
                            </View>
                        </View>
                        <View style={[PublicStyles.SuitsTheCrowd,PublicStyles.mt15,PublicStyles.ju_center]}>
                            <Text style={[PublicStyles.ft14_fff,PublicStyles.ml10]}>适合人群3-12周岁</Text>
                        </View>
                        <View style={[PublicStyles.LearningEffectWrap,PublicStyles.mt15]}>
                            <View style={[PublicStyles.LearningEffect,PublicStyles.al_center,PublicStyles.ju_center]}>
                                <Text style={PublicStyles.ft16_fff}>学习效果</Text>
                            </View>
                            <View style={[PublicStyles.bg_white,PublicStyles.pv6,PublicStyles.ph10]}>
                                <Text style={PublicStyles.ft14_333}>
                                    1.增加自信心。
                                    2.节奏感增强、提高协调性。
                                    2.提高肢体灵活性、站姿挺拔优美。
                                    3.提高免疫力、增强消化机能。
                                    5.增强团队协作能力，增强吃苦耐劳意志。
                                    6.促进智力发展
                                </Text>
                            </View>
                        </View>
                        <TouchableOpacity style={[PublicStyles.courseIntroTitle,PublicStyles.bg_green,PublicStyles.al_center,PublicStyles.ju_center,PublicStyles.mt15,PublicStyles.borderRadius,PublicStyles.mb60]} onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"ApplyInterest")}} >
                            <Text style={PublicStyles.ft16_fff}>我要报名</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
