/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';
// 全局导航 跳转工具类
import NavigationUtil from '../navigator/NavigationUtil';
// 公共样式
import PublicStyles from '../styles/PublicStyles';
import BabyLeave from "./BabyLeave";
import NoticeComplain from "./NoticeComplain";
import BasicsInfo from "./BasicsInfo";


export default class TabBarMyPage extends Component {
    render() {
        return (
            <View style={PublicStyles.container}>
                <ScrollView>
                    <ImageBackground style={[PublicStyles.myCenterBg,PublicStyles.ju_center,PublicStyles.al_center]}  source={require('../../img/myCenterBg.png')} >
                        <Image style={PublicStyles.UserPic} source={require('../../img/userPic.jpg')} />
                        <View>
                            <Text style={[PublicStyles.ft16_333,PublicStyles.mt10]}>混元霹雳手纪晓岚（妈妈）</Text>
                            <View style={[PublicStyles.ju_around_Direction,PublicStyles.pv6]}>
                                <Text style={[PublicStyles.ft16_333,PublicStyles.ph6]}>红苹果幼儿园</Text>
                                <Text style={[PublicStyles.ft16_333,PublicStyles.ph6]}>芒果班</Text>
                            </View>
                        </View>
                    </ImageBackground>
                    <View style={PublicStyles.intervalBar}/>
                    <TouchableOpacity  onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"LogonPage")}}>
                        <ImageBackground style={[PublicStyles.myCenterBg,PublicStyles.ju_center,PublicStyles.al_center]}  source={require('../../img/myCenterBg.png')} >
                            <Image style={PublicStyles.UserPic} source={require('../../img/PicUser.png')} />
                            <View>
                                <Text style={[PublicStyles.ft16_333,PublicStyles.mt10]}>未填写昵称</Text>
                                <View style={PublicStyles.ju_around_Direction}>
                                    <Text style={PublicStyles.ft16_888}>登录、注册</Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                    <View style={PublicStyles.intervalBar}/>
                    <View style={[PublicStyles.bg_white,PublicStyles.ph15]}>
                        <TouchableOpacity style={PublicStyles.ju_between_Direction} onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"BasicsInfo")}}>
                            <View style={[PublicStyles.listPic,PublicStyles.mv8]}>
                                <Image style={PublicStyles.listPic} source={require('../../img/TabBarMyIcon-1.png')} />
                            </View>
                            <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.listCon,PublicStyles.pv8,PublicStyles.borderBottom]}>
                                <Text style={PublicStyles.ft16_333}>基本资料</Text>
                                <Image style={PublicStyles.listMoreBtn} source={require('../../img/more.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={PublicStyles.ju_between_Direction} onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"TrackRecord")}}>
                            <View style={[PublicStyles.listPic,PublicStyles.mv8]}>
                                <Image style={PublicStyles.listPic} source={require('../../img/TabBarMyIcon-2.png')} />
                            </View>
                            <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.listCon,PublicStyles.pv8,PublicStyles.borderBottom]}>
                                <Text style={PublicStyles.ft16_333}>成长档案</Text>
                                <Image style={PublicStyles.listMoreBtn} source={require('../../img/more.png')} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={PublicStyles.intervalBar}/>
                    <View style={[PublicStyles.bg_white,PublicStyles.ph15]}>
                        <TouchableOpacity style={PublicStyles.ju_between_Direction} onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"MyClass")}}>
                            <View style={[PublicStyles.listPic,PublicStyles.mv8]}>
                                <Image style={PublicStyles.listPic} source={require('../../img/TabBarMyIcon-4.png')} />
                            </View>
                            <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.listCon,PublicStyles.pv8,PublicStyles.borderBottom]}>
                                <Text style={PublicStyles.ft16_333}>我的班级</Text>
                                <Image style={PublicStyles.listMoreBtn} source={require('../../img/more.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={PublicStyles.ju_between_Direction} onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"MyBaby")}}>
                            <View style={[PublicStyles.listPic,PublicStyles.mv8]}>
                                <Image style={PublicStyles.listPic} source={require('../../img/TabBarMyIcon-3.png')} />
                            </View>
                            <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.listCon,PublicStyles.pv8,PublicStyles.borderBottom]}>
                                <Text style={PublicStyles.ft16_333}>我的宝宝</Text>
                                <Image style={PublicStyles.listMoreBtn} source={require('../../img/more.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={PublicStyles.ju_between_Direction} onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"BabySafety")}}>
                            <View style={[PublicStyles.listPic,PublicStyles.mv8]}>
                                <Image style={PublicStyles.listPic} source={require('../../img/TabBarMyIcon-5.png')} />
                            </View>
                            <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.listCon,PublicStyles.pv8,PublicStyles.borderBottom]}>
                                <Text style={PublicStyles.ft16_333}>宝宝安全</Text>
                                <Image style={PublicStyles.listMoreBtn} source={require('../../img/more.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={PublicStyles.ju_between_Direction} onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"PaymentRecords")}}>
                            <View style={[PublicStyles.listPic,PublicStyles.mv8]}>
                                <Image style={PublicStyles.listPic} source={require('../../img/TabBarMyIcon-11.png')} />
                            </View>
                            <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.listCon,PublicStyles.pv8,PublicStyles.borderBottom]}>
                                <Text style={PublicStyles.ft16_333}>缴费记录</Text>
                                <Image style={PublicStyles.listMoreBtn} source={require('../../img/more.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={PublicStyles.ju_between_Direction} onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"BabyLeave")}}>
                            <View style={[PublicStyles.listPic,PublicStyles.mv8]}>
                                <Image style={PublicStyles.listPic} source={require('../../img/TabBarMyIcon-6.png')} />
                            </View>
                            <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.listCon,PublicStyles.pv8,PublicStyles.borderBottom]}>
                                <Text style={PublicStyles.ft16_333}>宝宝请假</Text>
                                <Image style={PublicStyles.listMoreBtn} source={require('../../img/more.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={PublicStyles.ju_between_Direction} onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"NoticeHomework")}}>
                            <View style={[PublicStyles.listPic,PublicStyles.mv8]}>
                                <Image style={PublicStyles.listPic} source={require('../../img/TabBarMyIcon-7.png')} />
                            </View>
                            <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.listCon,PublicStyles.pv8,PublicStyles.borderBottom]}>
                                <Text style={PublicStyles.ft16_333}>家庭作业</Text>
                                <Image style={PublicStyles.listMoreBtn} source={require('../../img/more.png')} />
                            </View>
                        </TouchableOpacity>

                    </View>
                    <View style={PublicStyles.intervalBar}/>
                    <View style={[PublicStyles.bg_white,PublicStyles.ph15]}>
                        <TouchableOpacity style={PublicStyles.ju_between_Direction} onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"NoticeKindergarten")}}>
                            <View style={[PublicStyles.listPic,PublicStyles.mv8]}>
                                <Image style={PublicStyles.listPic} source={require('../../img/TabBarMyIcon-8.png')} />
                            </View>
                            <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.listCon,PublicStyles.pv8,PublicStyles.borderBottom]}>
                                <Text style={PublicStyles.ft16_333}>园区通知</Text>
                                <Image style={PublicStyles.listMoreBtn} source={require('../../img/more.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={PublicStyles.ju_between_Direction} onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"NoticeClass")}}>
                            <View style={[PublicStyles.listPic,PublicStyles.mv8]}>
                                <Image style={PublicStyles.listPic} source={require('../../img/TabBarMyIcon-9.png')} />
                            </View>
                            <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.listCon,PublicStyles.pv8,PublicStyles.borderBottom]}>
                                <Text style={PublicStyles.ft16_333}>班级公告</Text>
                                <Image style={PublicStyles.listMoreBtn} source={require('../../img/more.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={PublicStyles.ju_between_Direction} onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"NoticeComplain")}}>
                            <View style={[PublicStyles.listPic,PublicStyles.mv8]}>
                                <Image style={PublicStyles.listPic} source={require('../../img/TabBarMyIcon-10.png')} />
                            </View>
                            <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.listCon,PublicStyles.pv8,PublicStyles.borderBottom]}>
                                <Text style={PublicStyles.ft16_333}>投诉建议</Text>
                                <Image style={PublicStyles.listMoreBtn} source={require('../../img/more.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={PublicStyles.ju_between_Direction} onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"SetUp")}}>
                            <View style={[PublicStyles.listPic,PublicStyles.mv8]}>
                                <Image style={PublicStyles.listPic} source={require('../../img/TabBarMyIcon-18.png')} />
                            </View>
                            <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.listCon,PublicStyles.pv8,PublicStyles.borderBottom]}>
                                <Text style={PublicStyles.ft16_333}>设置</Text>
                                <Image style={PublicStyles.listMoreBtn} source={require('../../img/more.png')} />
                            </View>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </View>
        );
    }
}
