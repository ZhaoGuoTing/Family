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



export default class NoticeClass extends Component {
    render() {
        return (
            <View style={[PublicStyles.container,PublicStyles.bg_white]}>
                <View style={PublicStyles.noticeBox}>
                    <View><Text style={PublicStyles.ft16_333} numberOfLines={1}>活动必需品：</Text></View>
                    <View><Text style={PublicStyles.ft14_888}>5月26日 17:30</Text></View>
                    <View style={PublicStyles.pv12}>
                        <Text style={PublicStyles.ft14_333} numberOfLines={3}>2017.5.26
                            1、2017.6.2班级将举办"联谊活动",希望各位宝宝…</Text>
                    </View>
                    <View style={[PublicStyles.ju_between_Direction,PublicStyles.borderTop,PublicStyles.pt12]}>
                        <Text style={PublicStyles.ft14_888}>0条回复</Text>
                        <Text style={PublicStyles.ft14_green} onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"NoticeClassDetails")}}>立即查看</Text>
                    </View>
                </View>

            </View>
        );
    }
}
