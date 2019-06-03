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
import NoticeKindergartenDetails from "./NoticeKindergartenDetails";



export default class NoticeKindergarten extends Component {
    render() {
        return (
            <View style={[PublicStyles.container,PublicStyles.bg_white]}>
                <View style={PublicStyles.noticeBox}>
                    <View><Text style={PublicStyles.ft16_333} numberOfLines={1}>庆“六一”活动通知：</Text></View>
                    <View><Text style={PublicStyles.ft14_888}>5月26日 17:30</Text></View>
                    <View style={PublicStyles.pv12}>
                        <Text style={PublicStyles.ft14_333} numberOfLines={3}>尊敬的家长：
                            您好！
                            在“六一”儿童节来临之际，为了让宝宝们度过一…在“六一”儿童节来临之际，为了让宝宝们度过一…</Text>
                    </View>
                    <View style={[PublicStyles.ju_between_Direction,PublicStyles.borderTop,PublicStyles.pt12]}>
                        <Text style={PublicStyles.ft14_888}>0条回复</Text>
                        <Text style={PublicStyles.ft14_green} onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"NoticeKindergartenDetails")}}>立即查看</Text>
                    </View>
                </View>
                <View style={PublicStyles.noticeBox}>
                    <View><Text style={PublicStyles.ft16_333} numberOfLines={1}>庆“八一”活动通知：</Text></View>
                    <View><Text style={PublicStyles.ft14_888}>5月26日 17:30</Text></View>
                    <View style={PublicStyles.pv12}>
                        <Text style={PublicStyles.ft14_333} numberOfLines={3}>尊敬的家长：
                            您好！
                            在“八一”建军节来临之际，为了让宝宝们度过一…</Text>
                    </View>
                    <View style={[PublicStyles.ju_between_Direction,PublicStyles.borderTop,PublicStyles.pt12]}>
                        <Text style={PublicStyles.ft14_888}>0条回复</Text>
                        <Text style={PublicStyles.ft14_green} onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"NoticeKindergartenDetails")}}>立即查看</Text>
                    </View>
                </View>
            </View>
        );
    }
}
