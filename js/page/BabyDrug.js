/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, Button} from 'react-native';
// 全局导航 跳转工具类
import NavigationUtil from '../navigator/NavigationUtil';
import NavigationBar from '../navigator/NavigationBar';
// 公共样式
import PublicStyles from '../styles/PublicStyles';
// 导航栏组件




export default class BabyDrug extends Component {
    render() {
        return (

            <View style={PublicStyles.container}>
                <View style={[PublicStyles.bg_white,PublicStyles.ph15]}>
                    <View style={[PublicStyles.ju_start_Direction,PublicStyles.al_center,PublicStyles.pv8,PublicStyles.listItem,PublicStyles.borderBottom]}>
                        <Text style={PublicStyles.ft16_333}>唐悠悠</Text>
                    </View>
                    <TouchableOpacity style={[PublicStyles.ju_between_Direction,PublicStyles.listItem,PublicStyles.al_center]} onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"BabyDrugAdd")}}>
                        <Text style={PublicStyles.ft16_333}>添加药品</Text>
                        <Text style={PublicStyles.ft16_green}>添加/修改</Text>
                    </TouchableOpacity>
                    <View style={PublicStyles.pb30}>
                        <View>
                            <Text style={PublicStyles.ft14_888}>您还没有添加任何药品，请点击“添加药品”进行添加</Text>
                        </View>
                        <View style={[PublicStyles.ju_start_Direction,PublicStyles.al_center]}>
                            <Text style={[PublicStyles.ft16_666,PublicStyles.mr10,PublicStyles.mb6]}>所属班级：</Text>
                            <View style={[PublicStyles.ClassTabIcon,PublicStyles.ju_center,PublicStyles.al_center,PublicStyles.mr10]}>
                                <Text style={PublicStyles.ft16_fff}>芒果班</Text>
                            </View>
                        </View>
                        <View style={[PublicStyles.ju_start_Direction,PublicStyles.al_center]}>
                            <Text style={[PublicStyles.ft16_666,PublicStyles.mr10,PublicStyles.mb6]}>吃药时间：</Text>
                            <View style={[PublicStyles.ClassTabIcon,PublicStyles.ju_center,PublicStyles.al_center,PublicStyles.mr10]}>
                                <Text style={PublicStyles.ft16_fff}>2014-05-26</Text>
                            </View>
                            <Text style={[PublicStyles.ft16_666,PublicStyles.mr10,PublicStyles.mb6]}>至</Text>
                            <View style={[PublicStyles.ClassTabIcon,PublicStyles.ju_center,PublicStyles.al_center,PublicStyles.mr10]}>
                                <Text style={PublicStyles.ft16_fff}>2014-05-28</Text>
                            </View>
                        </View>
                        <View style={[PublicStyles.mt6]}>
                            <Text style={[PublicStyles.ft16_666,PublicStyles.mr10,PublicStyles.mb6]}>药品：</Text>
                            <View style={[PublicStyles.ju_start_Direction,PublicStyles.pv8,PublicStyles.flexWrap]}>
                                <View style={[PublicStyles.ClassTabIcon,PublicStyles.ju_center,PublicStyles.al_center,PublicStyles.mr10]}>
                                    <Text style={PublicStyles.ft16_fff}>999感冒灵</Text>
                                </View>
                                <View style={[PublicStyles.ClassTabIcon,PublicStyles.ju_center,PublicStyles.al_center,PublicStyles.mr10]}>
                                    <Text style={PublicStyles.ft16_fff}>三九胃泰颗粒</Text>
                                </View>
                            </View>
                        </View>
                        <View style={[PublicStyles.ju_start_Direction,PublicStyles.al_center]}>
                            <Text style={[PublicStyles.ft16_666,PublicStyles.mr10,PublicStyles.mb6]}>注意事项：</Text>
                        </View>
                        <Text style={PublicStyles.ft14_666}>药品在孩子的书包里，注意看说明书。上午9:00,三九胃泰颗粒一袋/一次温水冲服</Text>
                    </View>
                </View>
            </View>
        );
    }
}
