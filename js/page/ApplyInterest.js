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



export default class ApplyInterest extends Component {
    render() {
        return (
            <View style={PublicStyles.container}>
                <View style={PublicStyles.banner}>
                    <Image style={PublicStyles.banner} source={require('../../img/ClassBanner-1.png')} />
                </View>
                <View style={[PublicStyles.RegistrationFee,PublicStyles.bg_gray,PublicStyles.ph15,PublicStyles.ju_center]}>
                    <Text style={PublicStyles.ft16_333}>报名费用：</Text>
                </View>
                <View style={[PublicStyles.bg_white,PublicStyles.ph15]}>
                    <View style={[PublicStyles.ju_start_Direction,PublicStyles.al_center,PublicStyles.listTitle,PublicStyles.borderBottom]}>
                        <Text style={[PublicStyles.listTitleName,PublicStyles.ft16_333]}>学费：</Text>
                        <Text style={PublicStyles.ft16_333}>3200.00元 / 期</Text>
                    </View>
                    <View style={[PublicStyles.ju_start_Direction,PublicStyles.al_center,PublicStyles.listTitle,PublicStyles.borderBottom]}>
                        <Text style={[PublicStyles.listTitleName,PublicStyles.ft16_333]}>服装费：</Text>
                        <Text style={PublicStyles.ft16_333}>1000.00元 / 2身</Text>
                    </View>
                    <View style={[PublicStyles.ju_start_Direction,PublicStyles.al_center,PublicStyles.listTitle,PublicStyles.borderBottom]}>
                        <Text style={[PublicStyles.listTitleName,PublicStyles.ft16_333]}>鞋子：</Text>
                        <Text style={PublicStyles.ft16_333}>500.00元 / 2双</Text>
                    </View>
                </View>
                <View style={[PublicStyles.RegistrationFee,PublicStyles.bg_gray,PublicStyles.ph15,PublicStyles.ju_center]}>
                    <Text style={PublicStyles.ft16_333}>支付方式：</Text>
                </View>
                <View style={[PublicStyles.bg_white,PublicStyles.ph15]}>
                    <View style={PublicStyles.ju_between_Direction}>
                        <View style={[PublicStyles.listPic,PublicStyles.mv8]}>
                            <Image style={PublicStyles.listPic} source={require('../../img/WXIcon.png')} />
                        </View>
                        <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.listCon,PublicStyles.pv8,PublicStyles.borderBottom]}>
                            <Text style={PublicStyles.ft16_333}>微信支付</Text>
                        </View>
                    </View>
                    <View style={PublicStyles.ju_between_Direction}>
                        <View style={[PublicStyles.listPic,PublicStyles.mv8]}>
                            <Image style={PublicStyles.listPic} source={require('../../img/ZFBIcon.png')} />
                        </View>
                        <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.listCon,PublicStyles.pv8,PublicStyles.borderBottom]}>
                            <Text style={PublicStyles.ft16_333}>支付宝支付</Text>
                        </View>
                    </View>
                    <View style={PublicStyles.ju_between_Direction}>
                        <View style={[PublicStyles.listPic,PublicStyles.mv8]}>
                            <Image style={PublicStyles.listPic} source={require('../../img/YLIcon.png')} />
                        </View>
                        <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.listCon,PublicStyles.pv8,PublicStyles.borderBottom]}>
                            <Text style={PublicStyles.ft16_333}>银联支付</Text>
                        </View>
                    </View>
                </View>
                <View style={PublicStyles.ph15}>
                    <View style={[PublicStyles.courseIntroTitle,PublicStyles.bg_green,PublicStyles.al_center,PublicStyles.ju_center,PublicStyles.mt24,PublicStyles.borderRadius]}>
                        <Text style={PublicStyles.ft16_fff}>确认报名并支付</Text>
                    </View>
                </View>
            </View>
        );
    }
}
