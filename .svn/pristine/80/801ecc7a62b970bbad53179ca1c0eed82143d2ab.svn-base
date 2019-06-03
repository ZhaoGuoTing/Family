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




export default class BabyDrugAdd extends Component {
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
                                <Text style={PublicStyles.ft16_333}>宝宝姓名</Text>
                                <View style={[PublicStyles.ju_start_Direction,PublicStyles.al_center]}>
                                    <TextInput
                                        style={PublicStyles.ft16_888}
                                        placeholder='唐悠悠'  // 输入框默认内容
                                        underlineColorAndroid='transparent'  // 安卓必写
                                    />
                                    <Image style={[PublicStyles.listMoreBtn,PublicStyles.ml10]} source={require('../../img/more.png')} />
                                </View>
                            </View>
                        </View>
                        <View style={PublicStyles.ju_between_Direction}>
                            <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.pv8,PublicStyles.listItem,PublicStyles.borderBottom]}>
                                <Text style={PublicStyles.ft16_333}>班级</Text>
                                <View style={[PublicStyles.ju_start_Direction,PublicStyles.al_center]}>
                                    <TextInput
                                        style={PublicStyles.ft16_888}
                                        placeholder='芒果班'  // 输入框默认内容
                                        underlineColorAndroid='transparent'  // 安卓必写
                                    />
                                    <Image style={[PublicStyles.listMoreBtn,PublicStyles.ml10]} source={require('../../img/more.png')} />
                                </View>
                            </View>
                        </View>
                        <View style={PublicStyles.ju_between_Direction}>
                            <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.pv8,PublicStyles.listItem,PublicStyles.borderBottom]}>
                                <Text style={PublicStyles.ft16_333}>吃药开始时间</Text>
                                <View style={[PublicStyles.ju_start_Direction,PublicStyles.al_center]}>
                                    <TextInput
                                        style={PublicStyles.ft16_888}
                                        placeholder='2014-05-28'  // 输入框默认内容
                                        underlineColorAndroid='transparent'  // 安卓必写
                                    />
                                    <Image style={[PublicStyles.listMoreBtn,PublicStyles.ml10]} source={require('../../img/more.png')} />
                                </View>
                            </View>
                        </View>

                        <View style={PublicStyles.ju_between_Direction}>
                            <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.pv8,PublicStyles.listItem,PublicStyles.borderBottom]}>
                                <Text style={PublicStyles.ft16_333}>吃药结束时间</Text>
                                <View style={[PublicStyles.ju_start_Direction,PublicStyles.al_center]}>
                                    <TextInput
                                        style={PublicStyles.ft16_888}
                                        placeholder='2014-05-28'  // 输入框默认内容
                                        underlineColorAndroid='transparent'  // 安卓必写
                                    />
                                    <Image style={[PublicStyles.listMoreBtn,PublicStyles.ml10]} source={require('../../img/more.png')} />
                                </View>
                            </View>
                        </View>
                        <View style={[PublicStyles.pv20,PublicStyles.borderBottom]}>
                            <Text style={PublicStyles.ft16_333}>添加药品</Text>
                            <View style={[PublicStyles.ju_start_Direction,PublicStyles.pv12,PublicStyles.flexWrap]}>
                                <View style={[PublicStyles.ClassTabIcon,PublicStyles.ju_center,PublicStyles.al_center,PublicStyles.mr10]}>
                                    <Text style={PublicStyles.ft16_fff}>999感冒灵</Text>
                                </View>
                                <View style={[PublicStyles.ClassTabIcon,PublicStyles.ju_center,PublicStyles.al_center,PublicStyles.mr10]}>
                                    <Text style={PublicStyles.ft16_fff}>三九胃泰颗粒</Text>
                                </View>
                                <View style={[PublicStyles.ClassTabIcon,PublicStyles.ju_center,PublicStyles.al_center,PublicStyles.mr10]}>
                                    <Text style={PublicStyles.ft16_fff}>666666666666感冒灵</Text>
                                </View>
                            </View>
                            <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center]}>
                                <TextInput
                                    style={[PublicStyles.ft16_888,PublicStyles.BabyDrugTag]}
                                    placeholder='输入药品名称，点击添加'  // 输入框默认内容
                                    underlineColorAndroid='transparent'  // 安卓必写
                                />
                                <Text style={PublicStyles.ft16_green}>添加</Text>
                            </View>
                        </View>
                        <View style={[PublicStyles.pv20,PublicStyles.borderBottom]}>
                            <Text style={PublicStyles.ft16_333}>注意事项</Text>
                            <View style={[PublicStyles.ju_start_Direction,PublicStyles.pv12,PublicStyles.flexWrap]}>
                                <TextInput
                                    style={[PublicStyles.BabyDrugComment,PublicStyles.ft16_888]}
                                    placeholder='药品在孩子的书包里，注意看说明书。上午9:00,三九胃泰颗粒一袋/一次温水冲服'  // 输入框默认内容
                                    underlineColorAndroid='transparent'  // 安卓必写
                                    multiline={true}  // 多行输入
                                    keyboardType='default'   // 系统默认键盘
                                />
                            </View>
                        </View>

                    </View>
                    <View style={PublicStyles.ph15}>
                        <View style={[PublicStyles.courseIntroTitle,PublicStyles.bg_orange,PublicStyles.al_center,PublicStyles.ju_center,PublicStyles.mt24,PublicStyles.mb34,PublicStyles.borderRadius]}>
                            <Text style={PublicStyles.ft16_fff}>删除该用药事项</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
