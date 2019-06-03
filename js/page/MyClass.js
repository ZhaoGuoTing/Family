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



export default class MyClass extends Component {
    render() {
        return (
            <View style={PublicStyles.container}>

                <View style={[PublicStyles.RegistrationFee,PublicStyles.bg_gray,PublicStyles.ph15,PublicStyles.ju_center]}>
                    <Text style={PublicStyles.ft16_333}>普通班</Text>
                </View>
                <View style={[PublicStyles.bg_white,PublicStyles.ph15]}>
                    <View style={PublicStyles.ju_between_Direction}>
                        <View style={[PublicStyles.listPic,PublicStyles.mv8]}>
                            <Image style={PublicStyles.listPic} source={require('../../img/studyClass-6.png')} />
                        </View>
                        <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.listCon,PublicStyles.pv8,PublicStyles.borderBottom]}>
                            <Text style={PublicStyles.ft16_333}>芒果班</Text>
                            <Image style={PublicStyles.listMoreBtn} source={require('../../img/more.png')} />
                        </View>
                    </View>
                </View>
                <View style={[PublicStyles.RegistrationFee,PublicStyles.bg_gray,PublicStyles.ph15,PublicStyles.ju_center]}>
                    <Text style={PublicStyles.ft16_333}>兴趣班</Text>
                </View>
                <View style={[PublicStyles.bg_white,PublicStyles.ph15]}>
                    <TouchableOpacity style={PublicStyles.ju_between_Direction} onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"ClassInterestDetails")}}>
                        <View style={[PublicStyles.listPic,PublicStyles.mv8]}>
                            <Image style={PublicStyles.listPic} source={require('../../img/studyClass-1.png')} />
                        </View>
                        <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.listCon,PublicStyles.pv8,PublicStyles.borderBottom]}>
                            <Text style={PublicStyles.ft16_333}>拉丁舞班</Text>
                            <Image style={PublicStyles.listMoreBtn} source={require('../../img/more.png')} />
                        </View>
                    </TouchableOpacity>
                    <View style={PublicStyles.ju_between_Direction}>
                        <View style={[PublicStyles.listPic,PublicStyles.mv8]}>
                            <Image style={PublicStyles.listPic} source={require('../../img/studyClass-2.png')} />
                        </View>
                        <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.listCon,PublicStyles.pv8,PublicStyles.borderBottom]}>
                            <Text style={PublicStyles.ft16_333}>钢琴班</Text>
                            <Image style={PublicStyles.listMoreBtn} source={require('../../img/more.png')} />
                        </View>
                    </View>
                    <View style={PublicStyles.ju_between_Direction}>
                        <View style={[PublicStyles.listPic,PublicStyles.mv8]}>
                            <Image style={PublicStyles.listPic} source={require('../../img/studyClass-3.png')} />
                        </View>
                        <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.listCon,PublicStyles.pv8,PublicStyles.borderBottom]}>
                            <Text style={PublicStyles.ft16_333}>绘画板</Text>
                            <Image style={PublicStyles.listMoreBtn} source={require('../../img/more.png')} />
                        </View>
                    </View>
                    <View style={PublicStyles.ju_between_Direction}>
                        <View style={[PublicStyles.listPic,PublicStyles.mv8]}>
                            <Image style={PublicStyles.listPic} source={require('../../img/studyClass-4.png')} />
                        </View>
                        <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.listCon,PublicStyles.pv8,PublicStyles.borderBottom]}>
                            <Text style={PublicStyles.ft16_333}>书法班</Text>
                            <Image style={PublicStyles.listMoreBtn} source={require('../../img/more.png')} />
                        </View>
                    </View>
                    <View style={PublicStyles.ju_between_Direction}>
                        <View style={[PublicStyles.listPic,PublicStyles.mv8]}>
                            <Image style={PublicStyles.listPic} source={require('../../img/studyClass-5.png')} />
                        </View>
                        <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.listCon,PublicStyles.pv8,PublicStyles.borderBottom]}>
                            <Text style={PublicStyles.ft16_333}>英语班</Text>
                            <Image style={PublicStyles.listMoreBtn} source={require('../../img/more.png')} />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
