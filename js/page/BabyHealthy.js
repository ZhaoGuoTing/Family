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



export default class BabyHealthy extends Component {
    render() {
        return (
            <View style={PublicStyles.container}>
                <View style={[PublicStyles.mv10,PublicStyles.ph15,PublicStyles.ju_start_Direction,PublicStyles.al_center]}>
                    <Image style={PublicStyles.BabyHealthyIcon} source={require('../../img/TabBarMyIcon-6.png')} />
                    <View style={[PublicStyles.ml10,PublicStyles.ju_start_Direction]}>
                        <Text style={PublicStyles.ft16_333}>2017-05-02</Text>
                        <Text style={[PublicStyles.ft16_bbb,PublicStyles.mh4]}>—</Text>
                        <Text style={PublicStyles.ft16_333}>2017-05-06</Text>
                    </View>
                </View>
                <View style={PublicStyles.bg_white}>
                    <View style={[PublicStyles.ju_between_Direction,PublicStyles.bg_gray]}>
                        <View style={[PublicStyles.pv8,PublicStyles.BabyWeekTableTitle,PublicStyles.al_center]}><Text>入园日期</Text></View>
                        <View style={[PublicStyles.pv8,PublicStyles.BabyTableTitle,PublicStyles.al_center]}><Text>入园时间</Text></View>
                        <View style={[PublicStyles.pv8,PublicStyles.BabyTableTitle,PublicStyles.al_center]}><Text>入园体温</Text></View>
                        <View style={[PublicStyles.pv8,PublicStyles.BabyTableTitle,PublicStyles.al_center]}><Text>状态</Text></View>
                    </View>
                    <View style={[PublicStyles.ju_between_Direction]}>
                        <View style={[PublicStyles.pv12,PublicStyles.BabyWeekTable,PublicStyles.al_center]}><Text style={PublicStyles.ft14_333}>2017-05-06</Text></View>
                        <View style={[PublicStyles.pv12,PublicStyles.babyTable,PublicStyles.al_center]}><Text style={PublicStyles.ft14_333}>A.M 9：00</Text></View>
                        <View style={[PublicStyles.pv12,PublicStyles.babyTable,PublicStyles.al_center]}><Text style={PublicStyles.ft14_333}>37℃</Text></View>
                        <View style={[PublicStyles.pv12,PublicStyles.babyTable,PublicStyles.al_center]}><Text style={PublicStyles.ft14_333}>正常</Text></View>
                    </View>
                    <View style={[PublicStyles.ju_between_Direction]}>
                        <View style={[PublicStyles.pv12,PublicStyles.BabyWeekTable,PublicStyles.al_center]}><Text style={PublicStyles.ft14_333}>2017-05-05</Text></View>
                        <View style={[PublicStyles.pv12,PublicStyles.babyTable,PublicStyles.al_center]}><Text style={PublicStyles.ft14_333}>P.M 3：00</Text></View>
                        <View style={[PublicStyles.pv12,PublicStyles.babyTable,PublicStyles.al_center]}><Text style={PublicStyles.ft14_333}>5.5℃</Text></View>
                        <View style={[PublicStyles.pv12,PublicStyles.babyTable,PublicStyles.al_center]}><Text style={PublicStyles.ft14_orange}>低烧</Text></View>
                    </View>
                    <View style={[PublicStyles.ju_between_Direction]}>
                        <View style={[PublicStyles.pv12,PublicStyles.BabyWeekTable,PublicStyles.al_center]}><Text style={PublicStyles.ft14_333}>2017-05-04</Text></View>
                        <View style={[PublicStyles.pv12,PublicStyles.babyTable,PublicStyles.al_center]}><Text style={PublicStyles.ft14_333}>A.M 9：00</Text></View>
                        <View style={[PublicStyles.pv12,PublicStyles.babyTable,PublicStyles.al_center]}><Text style={PublicStyles.ft14_333}>36.5℃</Text></View>
                        <View style={[PublicStyles.pv12,PublicStyles.babyTable,PublicStyles.al_center]}><Text style={PublicStyles.ft14_333}>正常</Text></View>
                    </View>
                    <View style={[PublicStyles.ju_between_Direction]}>
                        <View style={[PublicStyles.pv12,PublicStyles.BabyWeekTable,PublicStyles.al_center]}><Text style={PublicStyles.ft14_333}>2017-05-03</Text></View>
                        <View style={[PublicStyles.pv12,PublicStyles.babyTable,PublicStyles.al_center]}><Text style={PublicStyles.ft14_333}>P.M 3：00</Text></View>
                        <View style={[PublicStyles.pv12,PublicStyles.babyTable,PublicStyles.al_center]}><Text style={PublicStyles.ft14_333}>8℃</Text></View>
                        <View style={[PublicStyles.pv12,PublicStyles.babyTable,PublicStyles.al_center]}><Text style={PublicStyles.ft14_orange}>高烧</Text></View>
                    </View>
                    <View style={[PublicStyles.ju_between_Direction]}>
                        <View style={[PublicStyles.pv12,PublicStyles.BabyWeekTable,PublicStyles.al_center]}><Text style={PublicStyles.ft14_333}>2017-05-02</Text></View>
                        <View style={[PublicStyles.pv12,PublicStyles.babyTable,PublicStyles.al_center]}><Text style={PublicStyles.ft14_333}>P.M 3：00</Text></View>
                        <View style={[PublicStyles.pv12,PublicStyles.babyTable,PublicStyles.al_center]}><Text style={PublicStyles.ft14_333}>6.5℃</Text></View>
                        <View style={[PublicStyles.pv12,PublicStyles.babyTable,PublicStyles.al_center]}><Text style={PublicStyles.ft14_333}>正常</Text></View>
                    </View>
                </View>

            </View>
        );
    }
}
