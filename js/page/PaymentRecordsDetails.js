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



export default class PaymentRecordsDetails extends Component {
    render() {
        return (
            <View style={PublicStyles.container}>
                <View style={PublicStyles.intervalBar}/>
                <View style={[PublicStyles.bg_white,PublicStyles.ph15]}>
                    <TouchableOpacity style={PublicStyles.ju_between_Direction} onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"ClassInterestDetails")}}>
                        <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.pv8,PublicStyles.listItem,PublicStyles.borderBottom]}>
                            <Text style={PublicStyles.ft16_green}>学费</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={PublicStyles.ju_between_Direction}>
                        <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.pv8,PublicStyles.listItem,PublicStyles.borderBottom]}>
                            <Text style={PublicStyles.ft16_333}>订单号：</Text>
                            <View style={PublicStyles.ju_start_Direction}>
                                <Text style={PublicStyles.ft16_333}>20181214103457679617</Text>
                            </View>
                        </View>
                    </View>
                    <View style={PublicStyles.ju_between_Direction}>
                        <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.pv8,PublicStyles.listItem,PublicStyles.borderBottom]}>
                            <Text style={PublicStyles.ft16_333}>折扣：</Text>
                            <View style={PublicStyles.ju_start_Direction}>
                                <Text style={PublicStyles.ft16_red}>9折</Text>
                            </View>
                        </View>
                    </View>
                    <View style={PublicStyles.ju_between_Direction}>
                        <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.pv8,PublicStyles.listItem,PublicStyles.borderBottom]}>
                            <Text style={PublicStyles.ft16_333}>金额：</Text>
                            <View style={PublicStyles.ju_start_Direction}>
                                <Text style={PublicStyles.ft16_333}>2700元</Text>
                            </View>
                        </View>
                    </View>
                    <View style={PublicStyles.ju_between_Direction}>
                        <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.pv8,PublicStyles.listItem,PublicStyles.borderBottom]}>
                            <Text style={PublicStyles.ft16_333}>是否支持退费：</Text>
                            <View style={PublicStyles.ju_start_Direction}>
                                <Text style={PublicStyles.ft16_red}>不支持</Text>
                            </View>
                        </View>
                    </View>
                    <View style={PublicStyles.ju_between_Direction}>
                        <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.pv8,PublicStyles.listItem,PublicStyles.borderBottom]}>
                            <Text style={PublicStyles.ft16_333}>缴费时长：</Text>
                            <View style={PublicStyles.ju_start_Direction}>
                                <Text style={PublicStyles.ft16_333}>半年</Text>
                            </View>
                        </View>
                    </View>
                    <View style={PublicStyles.ju_between_Direction}>
                        <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.pv8,PublicStyles.listItem,PublicStyles.borderBottom]}>
                            <Text style={PublicStyles.ft16_333}>开始时间：</Text>
                            <View style={PublicStyles.ju_start_Direction}>
                                <Text style={PublicStyles.ft16_333}>2018-07-01</Text>
                            </View>
                        </View>
                    </View>
                    <View style={PublicStyles.ju_between_Direction}>
                        <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.pv8,PublicStyles.listItem,PublicStyles.borderBottom]}>
                            <Text style={PublicStyles.ft16_333}>结束时间：</Text>
                            <View style={PublicStyles.ju_start_Direction}>
                                <Text style={PublicStyles.ft16_333}>2018-12-31</Text>
                            </View>
                        </View>
                    </View>
                </View>

            </View>
        );
    }
}
