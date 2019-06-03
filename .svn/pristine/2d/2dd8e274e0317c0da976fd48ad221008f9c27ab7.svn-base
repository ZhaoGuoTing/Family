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



export default class PaymentRecords extends Component {
    render() {
        return (
            <View style={PublicStyles.container}>
                <View style={PublicStyles.intervalBar}/>
                <View style={[PublicStyles.bg_white,PublicStyles.ph15]}>
                    <TouchableOpacity style={PublicStyles.ju_between_Direction} onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"PaymentRecordsDetails")}}>
                        <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.pv8,PublicStyles.listItem,PublicStyles.borderBottom]}>
                            <Text style={PublicStyles.ft16_333}>学费</Text>
                            <View style={PublicStyles.ju_start_Direction}>
                                <Text style={PublicStyles.ft16_red}>2700元</Text>
                                <Image style={[PublicStyles.listMoreBtn,PublicStyles.mt4,PublicStyles.ml10]} source={require('../../img/more.png')} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={PublicStyles.ju_between_Direction}>
                        <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.pv8,PublicStyles.listItem,PublicStyles.borderBottom]}>
                            <Text style={PublicStyles.ft16_333}>校服费</Text>
                            <View style={PublicStyles.ju_start_Direction}>
                                <Text style={PublicStyles.ft16_red}>200元</Text>
                                <Image style={[PublicStyles.listMoreBtn,PublicStyles.mt4,PublicStyles.ml10]} source={require('../../img/more.png')} />
                            </View>
                        </View>
                    </View>
                    <View style={PublicStyles.ju_between_Direction}>
                        <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.pv8,PublicStyles.listItem,PublicStyles.borderBottom]}>
                            <Text style={PublicStyles.ft16_333}>伙食费</Text>
                            <View style={PublicStyles.ju_start_Direction}>
                                <Text style={PublicStyles.ft16_red}>500元</Text>
                                <Image style={[PublicStyles.listMoreBtn,PublicStyles.mt4,PublicStyles.ml10]} source={require('../../img/more.png')} />
                            </View>
                        </View>
                    </View>
                    <View style={PublicStyles.ju_between_Direction}>
                        <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.pv8,PublicStyles.listItem,PublicStyles.borderBottom]}>
                            <Text style={PublicStyles.ft16_333}>校车费</Text>
                            <View style={PublicStyles.ju_start_Direction}>
                                <Text style={PublicStyles.ft16_red}>300元</Text>
                                <Image style={[PublicStyles.listMoreBtn,PublicStyles.mt4,PublicStyles.ml10]} source={require('../../img/more.png')} />
                            </View>
                        </View>
                    </View>
                </View>

            </View>
        );
    }
}
