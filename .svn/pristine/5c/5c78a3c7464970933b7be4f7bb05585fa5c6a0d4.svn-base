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



export default class SchoolSceneryDetails extends Component {
    render() {
        return (
            <View style={PublicStyles.container}>
                <ScrollView>
                    <View style={PublicStyles.ph15}>
                        <View>
                            <Text style={[PublicStyles.ft16_333,PublicStyles.mt10]} numberOfLines={1}>7月15日，红苹果幼儿园举办“夏季”夏令…</Text>
                            <View style={[PublicStyles.ju_between_Direction,PublicStyles.mt6]}>
                                <View style={PublicStyles.ju_start_Direction}>
                                    <Text style={PublicStyles.ft14_888}>2017-05-19</Text>
                                    <Text style={[PublicStyles.ft14_green,PublicStyles.ml10]}>幼园风采</Text>
                                </View>
                                <Text style={PublicStyles.ft14_888}>阅读125888</Text>
                            </View>
                        </View>
                        <View style={[PublicStyles.SchoolActivitiesBanner,PublicStyles.mv16]}>
                            <Image style={PublicStyles.SchoolActivitiesBanner} source={require('../../img/ClassBanner-3.png')} />
                        </View>
                        <View>
                            <Text style={PublicStyles.ft14_666}>
                                随着时间的推移，夏季已来临，为了让孩子有一个愉快的假期，提高孩子独立能力，以及应变能力。红苹果幼儿园将在7月15日举办2017年第一场“夏季”夏令营活动。并且此次活动是对外开放的。不是本校的学生也可以参加。但是此次活动会收取一定是报名费用，具体费用如下：
                            </Text>
                            <Text>
                                报名费：300.00元
                                其他费用：500.00元
                                帐篷：300.00元
                            </Text>
                            <Text>
                                自备物品：水杯、防晒霜、遮阳帽、活动用品、鞋子、换洗衣服。
                            </Text>
                        </View>
                        <TouchableOpacity style={[PublicStyles.courseIntroTitle,PublicStyles.bg_green,PublicStyles.al_center,PublicStyles.ju_center,PublicStyles.mt24,PublicStyles.borderRadius]} onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"ApplySchoolScenery")}} >
                            <Text style={PublicStyles.ft16_fff}>我要报名</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
