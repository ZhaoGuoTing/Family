/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, Button, TextInput, ScrollView} from 'react-native';
// 全局导航 跳转工具类
import NavigationUtil from '../navigator/NavigationUtil';
// 公共样式
import PublicStyles from '../styles/PublicStyles';




export default class NoticeComplainAdd3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            radio: 'JianYi',// 1、类型 单选判断： 投诉、建议
            checkbox: false,// 2、复选框： 匿名举报
        }
    }

    render() {
        return (
            <View style={PublicStyles.container}>
                <ScrollView>
                    <View style={PublicStyles.intervalBar}/>

                    <View style={[PublicStyles.bg_white,PublicStyles.ph15]}>
                        <View style={PublicStyles.ju_between_Direction}>
                            <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.pv8,PublicStyles.listItem,PublicStyles.borderBottom]}>
                                <Text style={PublicStyles.ft16_333}>标题：</Text>
                                <View style={PublicStyles.ju_start_Direction}>
                                    <TextInput
                                        style={PublicStyles.ft16_888}
                                        placeholder='学校环境脏乱差：'  // 输入框默认内容
                                        underlineColorAndroid='transparent'  // 安卓必写
                                    />
                                    <Image style={[PublicStyles.listMoreBtn,PublicStyles.mt4,PublicStyles.ml10]} source={require('../../img/more.png')} />
                                </View>
                            </View>
                        </View>

                        <View style={PublicStyles.ju_between_Direction}>
                            <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.pv8,PublicStyles.listItem,PublicStyles.borderBottom]}>
                                <Text style={PublicStyles.ft16_333}>类型：</Text>
                                <View style={PublicStyles.ju_start_Direction}>
                                    <TouchableOpacity style={[PublicStyles.ju_start_Direction,PublicStyles.al_center,PublicStyles.radioItem]} onPress={() => {this.radioCheck('TouSu')}}>
                                        <View style={[PublicStyles.mh10,PublicStyles.ju_center,this.state.radio === 'TouSu' ? PublicStyles.radioCur:PublicStyles.radio]}>
                                            <Image style={PublicStyles.radioIcon} source={require('../../img/checkIcon.png')} />
                                        </View>
                                        <Text style={PublicStyles.ft16_666}>投诉</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[PublicStyles.ju_start_Direction,PublicStyles.al_center,PublicStyles.radioItem]} onPress={() => {this.radioCheck('JianYi')}}>
                                        <View style={[PublicStyles.mh10,PublicStyles.ju_center,this.state.radio === 'JianYi' ? PublicStyles.radioCur:PublicStyles.radio]}>
                                            <Image style={PublicStyles.radioIcon} source={require('../../img/checkIcon.png')} />
                                        </View>
                                        <Text style={PublicStyles.ft16_666}>建议</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={[PublicStyles.pv20,PublicStyles.borderBottom]}>
                            <Text style={PublicStyles.ft16_333}>投诉原因：</Text>
                            <View style={[PublicStyles.ju_start_Direction,PublicStyles.pv12,PublicStyles.flexWrap]}>
                                <TextInput
                                    style={[PublicStyles.BabyDrugComment,PublicStyles.ft16_888]}
                                    placeholder='感冒发烧'  // 输入框默认内容
                                    underlineColorAndroid='transparent'  // 安卓必写
                                    multiline={true}  // 多行输入
                                    keyboardType='default'   // 系统默认键盘
                                />
                            </View>
                        </View>
                        <View style={PublicStyles.ju_between_Direction}>
                            <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.pv8,PublicStyles.listItem,PublicStyles.borderBottom]}>
                                <Text style={PublicStyles.ft16_333}>联系人：</Text>
                                <View style={PublicStyles.ju_start_Direction}>
                                    <TextInput
                                        style={PublicStyles.ft16_888}
                                        placeholder='唐悠悠'  // 输入框默认内容
                                        underlineColorAndroid='transparent'  // 安卓必写
                                    />
                                    <Image style={[PublicStyles.listMoreBtn,PublicStyles.mt4,PublicStyles.ml10]} source={require('../../img/more.png')} />
                                </View>
                            </View>
                        </View>

                        <View style={PublicStyles.ju_between_Direction}>
                            <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.pv8,PublicStyles.listItem,PublicStyles.borderBottom]}>
                                <Text style={PublicStyles.ft16_333}>手机号：</Text>
                                <View style={PublicStyles.ju_start_Direction}>
                                    <TextInput
                                        style={PublicStyles.ft16_888}
                                        placeholder='3天'  // 输入框默认内容
                                        underlineColorAndroid='transparent'  // 安卓必写
                                    />
                                    <Image style={[PublicStyles.listMoreBtn,PublicStyles.mt4,PublicStyles.ml10]} source={require('../../img/more.png')} />
                                </View>
                            </View>
                        </View>
                        <View style={PublicStyles.ju_between_Direction}>
                            <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.pv8,PublicStyles.listItem,PublicStyles.borderBottom]}>
                                <Text style={PublicStyles.ft16_333}>QQ：</Text>
                                <View style={PublicStyles.ju_start_Direction}>
                                    <TextInput
                                        style={PublicStyles.ft16_888}
                                        placeholder='唐悠悠'  // 输入框默认内容
                                        underlineColorAndroid='transparent'  // 安卓必写
                                    />
                                    <Image style={[PublicStyles.listMoreBtn,PublicStyles.mt4,PublicStyles.ml10]} source={require('../../img/more.png')} />
                                </View>
                            </View>
                        </View>

                        <View style={PublicStyles.ju_between_Direction}>
                            <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.pv8,PublicStyles.listItem,PublicStyles.borderBottom]}>
                                <Text style={PublicStyles.ft16_333}>微信：</Text>
                                <View style={PublicStyles.ju_start_Direction}>
                                    <TextInput
                                        style={PublicStyles.ft16_888}
                                        placeholder='3天'  // 输入框默认内容
                                        underlineColorAndroid='transparent'  // 安卓必写
                                    />
                                    <Image style={[PublicStyles.listMoreBtn,PublicStyles.mt4,PublicStyles.ml10]} source={require('../../img/more.png')} />
                                </View>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={[PublicStyles.ju_end_Direction,PublicStyles.ph15,PublicStyles.al_center,PublicStyles.mt24,]}
                          onPress={() => {this.checkboxCheck()}}>
                        <View style={[PublicStyles.mh10,this.state.checkbox === true ? PublicStyles.checkboxCur : PublicStyles.checkbox]}>
                            <Image style={PublicStyles.radioIcon} source={require('../../img/checkIcon.png')} />
                        </View>
                        <Text style={PublicStyles.ft16_666}>是否匿名</Text>
                    </TouchableOpacity>
                    <View style={PublicStyles.ph15}>
                        <View style={[PublicStyles.courseIntroTitle,PublicStyles.bg_green,PublicStyles.al_center,PublicStyles.ju_center,PublicStyles.mt24,PublicStyles.mb34,PublicStyles.borderRadius]}>
                            <Text style={PublicStyles.ft16_fff}>发表</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
// 1、类型 单选判断： 投诉、建议

    radioCheck(e) {
        if(e !== this.state.radio) {
            this.setState({
                radio: e,
            })
        }
    }

// 2、复选框： 匿名举报

    checkboxCheck() {
        this.setState({
            checkbox: !this.state.checkbox,
        })
    }



}
