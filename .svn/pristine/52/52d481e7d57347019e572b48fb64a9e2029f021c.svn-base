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
// 时间日期组件
import DatePicker from 'react-native-datepicker'




export default class BabyLeaveAdd extends Component {
    // date：设置初始显示的日期
    constructor(props){
        super(props)
        this.state = {date:"2016-05-15"}
    }

    render() {
        return (
            <View style={PublicStyles.container}>
                <ScrollView>
                    <View style={PublicStyles.intervalBar}/>

                    <View style={[PublicStyles.bg_white,PublicStyles.ph15]}>
                        <View style={PublicStyles.ju_between_Direction}>
                            <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.pv8,PublicStyles.listItem,PublicStyles.borderBottom]}>
                                <Text style={PublicStyles.ft16_333}>请假人：</Text>
                                <View style={[PublicStyles.ju_start_Direction,PublicStyles.al_center]}>
                                    <TextInput
                                        style={PublicStyles.ft16_888}
                                        placeholder='唐悠悠唐悠悠唐悠悠唐悠悠'  // 输入框默认内容
                                        underlineColorAndroid='transparent'  // 安卓必写
                                    />
                                    <Image style={[PublicStyles.listMoreBtn,PublicStyles.ml10]} source={require('../../img/more.png')} />
                                </View>
                            </View>
                        </View>
                        <View style={PublicStyles.ju_between_Direction}>
                            <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.pv8,PublicStyles.listItem,PublicStyles.borderBottom]}>
                                <Text style={PublicStyles.ft16_333}>请假开始时间：</Text>
                                <View style={[PublicStyles.ju_start_Direction,PublicStyles.al_center]}>
                                    <TextInput
                                        style={PublicStyles.ft16_888}
                                        placeholder='唐悠悠唐悠悠唐悠悠唐悠26'  // 输入框默认内容
                                        underlineColorAndroid='transparent'  // 安卓必写
                                    />
                                    <Image style={[PublicStyles.listMoreBtn,PublicStyles.ml10]} source={require('../../img/more.png')} />
                                </View>
                            </View>
                        </View>
                        <View style={PublicStyles.ju_between_Direction}>
                            <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.pv8,PublicStyles.listItem,PublicStyles.borderBottom]}>
                                <Text style={PublicStyles.ft16_333}>请假结束时间：</Text>
                                <View style={[PublicStyles.ju_start_Direction,PublicStyles.al_center]}>
                                    <TextInput
                                        style={PublicStyles.ft16_888}
                                        placeholder='唐悠唐悠2620140528'  // 输入框默认内容
                                        underlineColorAndroid='transparent'  // 安卓必写
                                    />
                                    <Image style={[PublicStyles.listMoreBtn,PublicStyles.ml10]} source={require('../../img/more.png')} />
                                </View>
                            </View>
                        </View>
                        <View style={PublicStyles.ju_between_Direction}>
                            <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.pv8,PublicStyles.listItem,PublicStyles.borderBottom]}>
                                <Text style={PublicStyles.ft16_333}>请假天数：</Text>
                                <View style={[PublicStyles.ju_start_Direction,PublicStyles.al_center]}>
                                    <TextInput
                                        style={PublicStyles.ft16_888}
                                        placeholder='3天'  // 输入框默认内容
                                        underlineColorAndroid='transparent'  // 安卓必写
                                    />
                                    <Image style={[PublicStyles.listMoreBtn,PublicStyles.ml10]} source={require('../../img/more.png')} />
                                </View>
                            </View>
                        </View>

                        <View style={[PublicStyles.pv20,PublicStyles.borderBottom]}>
                            <Text style={PublicStyles.ft16_333}>请假原因：</Text>
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

                    </View>
                    <View style={PublicStyles.ph15}>
                        <View style={[PublicStyles.courseIntroTitle,PublicStyles.bg_orange,PublicStyles.al_center,PublicStyles.ju_center,PublicStyles.mt24,PublicStyles.mb34,PublicStyles.borderRadius]}>
                            <Text style={PublicStyles.ft16_fff}>删除该请假信息</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
