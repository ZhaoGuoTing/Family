/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
// 全局导航 跳转工具类
import NavigationUtil from '../navigator/NavigationUtil';
// 公共样式
import PublicStyles from '../styles/PublicStyles';



export default class LogonRegisterPage extends Component {
    render() {
        return (
            <View style={PublicStyles.container}>
                <View style={[PublicStyles.al_center,PublicStyles.pv50]}>
                    <Image style={PublicStyles.logo} source={require('../../img/logo_03.png')} />
                </View>
                <View style={PublicStyles.intervalBar}/>
                <View style={[PublicStyles.bg_white,PublicStyles.ph15]}>
                    <View style={PublicStyles.ju_between_Direction}>
                        <View style={[PublicStyles.listPic,PublicStyles.mv8,PublicStyles.ju_center]}>
                            <Image style={[PublicStyles.logonIcon,PublicStyles.ml10]} source={require('../../img/logonIcon-1.png')} />
                        </View>
                        <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.listCon,PublicStyles.pv8,PublicStyles.borderBottom]}>
                            <TextInput
                                style={[PublicStyles.ft16_888,PublicStyles.InputCon]}
                                placeholder='请输入手机号'  // 输入框默认内容
                                underlineColorAndroid='transparent'  // 安卓必写
                            />
                        </View>
                    </View>
                    <View style={PublicStyles.ju_between_Direction}>
                        <View style={[PublicStyles.listPic,PublicStyles.mv8,PublicStyles.ju_center]}>
                            <Image style={[PublicStyles.logonIcon,PublicStyles.ml10]} source={require('../../img/logonIcon-2.png')} />
                        </View>
                        <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.listCon,PublicStyles.pv8,PublicStyles.borderBottom]}>
                            <TextInput
                                style={[PublicStyles.ft16_888,PublicStyles.InputCon]}
                                placeholder='验证码'  // 输入框默认内容
                                underlineColorAndroid='transparent'  // 安卓必写
                            />
                            <View style={PublicStyles.codeBox}>
                                <Text style={PublicStyles.ft16_888}>获取验证码</Text>
                            </View>
                        </View>
                    </View>
                    <View style={PublicStyles.ju_between_Direction}>
                        <View style={[PublicStyles.listPic,PublicStyles.mv8,PublicStyles.ju_center]}>
                            <Image style={[PublicStyles.logonIcon,PublicStyles.ml10]} source={require('../../img/logonIcon-3.png')} />
                        </View>
                        <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.listCon,PublicStyles.pv8,PublicStyles.borderBottom]}>
                            <TextInput
                                style={[PublicStyles.ft16_888,PublicStyles.InputCon]}
                                placeholder='请输入密码'  // 输入框默认内容
                                underlineColorAndroid='transparent'  // 安卓必写
                            />
                        </View>
                    </View>
                </View>
                <View style={PublicStyles.ph15}>
                    <View style={[PublicStyles.courseIntroTitle,PublicStyles.bg_green,PublicStyles.al_center,PublicStyles.ju_center,PublicStyles.mt24,PublicStyles.mb34,PublicStyles.borderRadius]}>
                        <Text style={PublicStyles.ft16_fff}>登录</Text>
                    </View>
                </View>
                <TouchableOpacity style={[PublicStyles.ph15,PublicStyles.al_center]} onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"LogonPage")}}>
                    <Text style={PublicStyles.ft16_888}>已有账号？<Text style={PublicStyles.ft16_333}>马上登录</Text></Text>
                </TouchableOpacity>
                <TouchableOpacity style={[PublicStyles.ph15,PublicStyles.logonProtocol]} onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"LogonRegistrationProtocol")}}>
                    <View style={PublicStyles.al_center}>
                        <Text style={PublicStyles.ft16_888}>阅读并接受<Text style={[PublicStyles.ft16_green,{textDecorationLine: 'underline'}]}>《贝宝娃用户协议》</Text></Text>
                    </View>
                </TouchableOpacity>
                <View style={PublicStyles.intervalBar}/>
            </View>
        );
    }
}
