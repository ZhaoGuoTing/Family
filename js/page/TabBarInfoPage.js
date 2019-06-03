/**
 *       TabBar消息
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
// 公共样式
import PublicStyles from '../styles/PublicStyles';
import NavigationUtil from "../navigator/NavigationUtil";



export default class TabBarInfoPage extends Component {
    render() {
        return (
            <View style={PublicStyles.container}>
                <View style={PublicStyles.intervalBar}/>
                <View style={[PublicStyles.bg_white,PublicStyles.ph15]}>
                    <TouchableOpacity style={PublicStyles.ju_between_Direction} onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"NoticeKindergarten")}}>
                        <View style={[PublicStyles.listPic,PublicStyles.mv8]}>
                            <Image style={PublicStyles.listPic} source={require('../../img/TabBarMyIcon-8.png')} />
                            <View style={PublicStyles.badges}>
                                <Text style={{color: 'white', fontSize: 10, fontWeight: 'bold'}}>2</Text>
                            </View>
                        </View>
                        <View style={[PublicStyles.ju_center,PublicStyles.listCon,PublicStyles.pv8,PublicStyles.borderBottom]}>
                            <View style={PublicStyles.ju_between_Direction}>
                                <Text style={PublicStyles.ft16_333}>园区通知</Text>
                                <Text style={PublicStyles.ft14_bbb}>今天10:20</Text>
                            </View>
                            <Text numberOfLines={1} style={[PublicStyles.mt6,PublicStyles.ft14_888]}>珠算本的竖式计算珠算本的竖式计算珠算本的竖式计算珠算本的竖式计算</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={PublicStyles.ju_between_Direction} onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"NoticeClass")}}>
                        <View style={[PublicStyles.listPic,PublicStyles.mv8]}>
                            <Image style={PublicStyles.listPic} source={require('../../img/TabBarMyIcon-9.png')} />
                            <View style={PublicStyles.badges}>
                                <Text style={{color: 'white', fontSize: 10, fontWeight: 'bold'}}>1</Text>
                            </View>
                        </View>
                        <View style={[PublicStyles.ju_center,PublicStyles.listCon,PublicStyles.pv8,PublicStyles.borderBottom]}>
                            <View style={PublicStyles.ju_between_Direction}>
                                <Text style={PublicStyles.ft16_333}>班级公告</Text>
                                <Text style={PublicStyles.ft14_bbb}>2017-05-06</Text>
                            </View>
                            <Text numberOfLines={1} style={[PublicStyles.mt6,PublicStyles.ft14_888]}>珠算本的竖式计算珠算本的竖式计算珠算本的竖式计算珠算本的竖式计算</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={PublicStyles.ju_between_Direction} onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"NoticeHomework")}}>
                        <View style={[PublicStyles.listPic,PublicStyles.mv8]}>
                            <Image style={PublicStyles.listPic} source={require('../../img/TabBarMyIcon-7.png')} />
                            <View style={PublicStyles.badges}>
                                <Text style={{color: 'white', fontSize: 10, fontWeight: 'bold'}}>1</Text>
                            </View>
                        </View>
                        <View style={[PublicStyles.ju_center,PublicStyles.listCon,PublicStyles.pv8,PublicStyles.borderBottom]}>
                            <View style={PublicStyles.ju_between_Direction}>
                                <Text style={PublicStyles.ft16_333}>家庭作业</Text>
                                <Text style={PublicStyles.ft14_bbb}>今天10:20</Text>
                            </View>
                            <Text numberOfLines={1} style={[PublicStyles.mt6,PublicStyles.ft14_888]}>珠算本的竖式计算珠算本的竖式计算珠算本的竖式计算珠算本的竖式计算</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

