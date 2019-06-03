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
import {LocaleConfig, Calendar} from 'react-native-calendars';


// 日历组件 中文替换
LocaleConfig.locales['fr'] = {
    monthNames: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
    monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
    dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
    dayNamesShort: ['周天.','周一.','周二.','周三.','周四.','周五.','周六.']
};
LocaleConfig.defaultLocale = 'fr';

// 日历组件 标记点的颜色
const vacation = {key:'vacation', color: '#33D9B5', selectedDotColor: '#33D9B5'};


export default class BabyAttendance extends Component {
    render() {
        return (
            <View style={PublicStyles.container}>
                <View style={[PublicStyles.mv10,PublicStyles.ph15,PublicStyles.ju_start_Direction,PublicStyles.al_center]}>
                    <Image style={PublicStyles.BabyHealthyIcon} source={require('../../img/TabBarMyIcon-6.png')} />
                    <View style={[PublicStyles.ml10,PublicStyles.ju_start_Direction]}>
                        <Text style={PublicStyles.ft16_333}>2019-03</Text>
                        <Text style={[PublicStyles.ft16_bbb,PublicStyles.mh4]}>—</Text>
                        <Text style={PublicStyles.ft16_333}>考勤情况</Text>
                    </View>
                </View>
                <View style={PublicStyles.bg_white}>
                    <Calendar
                        monthFormat = { ' yyyy MM ' }
                        markedDates={{
                            // 缺席 03-10
                            '2019-04-10': {selected: true, selectedColor: '#FFC1B5'},
                            '2019-05-08': {selected: true, selectedColor: '#FFC1B5'},
                            // 正常
                            '2019-04-11': {dots: [vacation]},
                            '2019-04-12': {dots: [vacation]},
                            '2019-04-13': {dots: [vacation]},
                        }}
                        markingType={'multi-dot'}
                    />

                </View>
                <View style={PublicStyles.intervalBar}/>
                <View style={[PublicStyles.ph15,PublicStyles.ju_start_Direction]}>
                    <View style={[PublicStyles.ju_start_Direction,PublicStyles.al_center,PublicStyles.mr10]}>
                        <View style={[PublicStyles.AttendanceItem_Green,PublicStyles.al_center,PublicStyles.ju_center]}/>
                        <Text style={[PublicStyles.ft16_333,PublicStyles.ml10]}>正常</Text>
                    </View>
                    <View style={[PublicStyles.ju_start_Direction,PublicStyles.al_center]}>
                        <View style={[PublicStyles.AttendanceItem_Orange,PublicStyles.al_center,PublicStyles.ju_center]}/>
                        <Text style={[PublicStyles.ft16_333,PublicStyles.ml10]}>缺勤</Text>
                    </View>
                </View>
            </View>
        );
    }
}
