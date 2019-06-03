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



export default class BabyLeave extends Component {
    render() {
        return (
            <View style={PublicStyles.container}>
                <View style={PublicStyles.intervalBar}/>
                <View style={[PublicStyles.bg_white,PublicStyles.ph15]}>
                    <TouchableOpacity style={PublicStyles.ju_between_Direction} onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"BabyLeaveAdd")}}>
                        <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.pv8,PublicStyles.BabylistItem,PublicStyles.borderBottom]}>
                            <View style={PublicStyles.BabyListCon}>
                                <View style={[PublicStyles.ju_start_Direction,PublicStyles.al_center]}>
                                    <View style={[PublicStyles.ClassTabIcon,PublicStyles.ju_center,PublicStyles.al_center]}>
                                        <Text style={PublicStyles.ft16_fff}>芒果班</Text>
                                    </View>
                                    <Text style={[PublicStyles.ft16_333,PublicStyles.mb6,PublicStyles.ml10]}>唐大悠</Text>
                                </View>
                                <View style={[PublicStyles.ju_start_Direction,PublicStyles.al_center]}>
                                    <Text style={[PublicStyles.ft16_666,PublicStyles.mb6]}>请假时间：</Text>
                                    <View style={[PublicStyles.ClassTabIcon,PublicStyles.ju_center,PublicStyles.al_center,PublicStyles.mr10]}>
                                        <Text style={PublicStyles.ft16_fff}>2014-05-26</Text>
                                    </View>
                                    <Text style={[PublicStyles.ft16_666,PublicStyles.mr10,PublicStyles.mb6]}>至</Text>
                                    <View style={[PublicStyles.ClassTabIcon,PublicStyles.ju_center,PublicStyles.al_center,PublicStyles.mr10]}>
                                        <Text style={PublicStyles.ft16_fff}>2014-05-28</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={PublicStyles.ju_start_Direction}>
                                <Image style={[PublicStyles.BabylistBtn,PublicStyles.mt4,PublicStyles.ml10]} source={require('../../img/editor.png')} />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={PublicStyles.intervalBar}/>
                <View style={[PublicStyles.bg_white,PublicStyles.ph15]}>
                    <TouchableOpacity style={PublicStyles.ju_between_Direction} onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"BabyLeaveAdd")}}>
                        <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.pv8,PublicStyles.BabylistItem,PublicStyles.borderBottom]}>
                            <View style={PublicStyles.BabyListCon}>
                                <View style={[PublicStyles.ju_start_Direction,PublicStyles.al_center]}>
                                    <View style={[PublicStyles.ClassTabIcon,PublicStyles.ju_center,PublicStyles.al_center]}>
                                        <Text style={PublicStyles.ft16_fff}>芒果班</Text>
                                    </View>
                                    <Text style={[PublicStyles.ft16_333,PublicStyles.mb6,PublicStyles.ml10]}>唐二悠</Text>
                                </View>
                                <View style={[PublicStyles.ju_start_Direction,PublicStyles.al_center]}>
                                    <Text style={[PublicStyles.ft16_666,PublicStyles.mb6]}>请假时间：</Text>
                                    <View style={[PublicStyles.ClassTabIcon,PublicStyles.ju_center,PublicStyles.al_center,PublicStyles.mr10]}>
                                        <Text style={PublicStyles.ft16_fff}>2014-05-26</Text>
                                    </View>
                                    <Text style={[PublicStyles.ft16_666,PublicStyles.mr10,PublicStyles.mb6]}>至</Text>
                                    <View style={[PublicStyles.ClassTabIcon,PublicStyles.ju_center,PublicStyles.al_center,PublicStyles.mr10]}>
                                        <Text style={PublicStyles.ft16_fff}>2014-05-28</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={PublicStyles.ju_start_Direction}>
                                <Image style={[PublicStyles.BabylistBtn,PublicStyles.mt4,PublicStyles.ml10]} source={require('../../img/editor.png')} />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
