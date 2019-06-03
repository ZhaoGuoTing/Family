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



export default class NoticeComplain extends Component {
    render() {
        return (
            <View style={[PublicStyles.container,PublicStyles.bg_white]}>
                <View style={PublicStyles.noticeBox}>
                    <View>
                        <Text style={PublicStyles.ft16_333} numberOfLines={1}>
                            学校环境脏乱差：
                        </Text>
                    </View>
                    <View><Text style={PublicStyles.ft14_888}>5月26日 17:30</Text></View>
                    <View style={PublicStyles.pv12}>
                        <Text style={PublicStyles.ft14_333} numberOfLines={3}>
                            尊敬的园长：
                            您好！
                            昨天去学习送孩子看见学习的环境实在是太差了……
                        </Text>
                    </View>
                    <View style={[PublicStyles.ju_between_Direction,PublicStyles.borderTop,PublicStyles.pt12]}>
                        <Text style={PublicStyles.ft14_888}>0条回复</Text>
                        <Text style={PublicStyles.ft14_green} onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"NoticeComplainDetails")}}>立即查看</Text>
                    </View>
                </View>

            </View>
        );
    }
}
