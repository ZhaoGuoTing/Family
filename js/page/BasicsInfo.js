/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Button,
    TextInput,
    ScrollView,
    ImageBackground
} from 'react-native';
// 全局导航 跳转工具类
import NavigationUtil from '../navigator/NavigationUtil';
// 公共样式
import PublicStyles from '../styles/PublicStyles';



export default class BasicsInfo extends Component {


    render() {
        return (
            <View style={PublicStyles.container}>
                <ScrollView>
                    <View style={PublicStyles.intervalBar}/>
                    <View style={[PublicStyles.bg_white,PublicStyles.ph15]}>
                        <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.borderBottom,PublicStyles.pv20]}>
                            <View>
                                <Text style={[PublicStyles.ft16_333,PublicStyles.mv8]}>唐悠悠</Text>
                                <View>
                                    <Text style={PublicStyles.ft14_666}>4岁10个月17天</Text>
                                    <Text style={PublicStyles.ft14_666}>芒果班</Text>
                                </View>
                            </View>
                            <Image style={PublicStyles.UserPic} source={require('../../img/userPic.jpg')} />
                        </View>
                        <TouchableOpacity style={PublicStyles.ju_between_Direction} onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"UpDatePhoneNumber")}}>
                            <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.pv8,PublicStyles.listItem,PublicStyles.borderBottom]}>
                                <Text style={PublicStyles.ft16_333}>手机号：</Text>
                                <Text style={PublicStyles.ft16_666}>15648954785</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={PublicStyles.ju_between_Direction} onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"ChangePassword")}}>
                            <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.pv8,PublicStyles.listItem,PublicStyles.borderBottom]}>
                                <Text style={PublicStyles.ft16_333}>修改密码</Text>
                                <View style={[PublicStyles.ju_start_Direction,PublicStyles.al_center]}>
                                    <Image style={[PublicStyles.listMoreBtn,PublicStyles.ml10]} source={require('../../img/more.png')} />
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={PublicStyles.ju_between_Direction}>
                            <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.pv8,PublicStyles.listItem,PublicStyles.borderBottom]}>
                                <Text style={PublicStyles.ft16_333}>我是宝宝的</Text>
                                <Text style={PublicStyles.ft16_666}>爸爸</Text>
                            </View>
                        </View>
                    </View>
                    <View style={PublicStyles.intervalBar}/>
                    <View style={[PublicStyles.bg_white,PublicStyles.ph15]}>
                        <View style={PublicStyles.ju_between_Direction}>
                            <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.pv8,PublicStyles.listItem,PublicStyles.borderBottom]}>
                                <Text style={PublicStyles.ft16_333}>宝宝姓名</Text>
                                <Text style={PublicStyles.ft16_666}>唐悠悠</Text>
                            </View>
                        </View>
                        <View style={PublicStyles.ju_between_Direction}>
                            <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.pv8,PublicStyles.listItem,PublicStyles.borderBottom]}>
                                <Text style={PublicStyles.ft16_333}>宝宝性别</Text>
                                <Text style={PublicStyles.ft16_666}>女</Text>
                            </View>
                        </View>
                        <View style={PublicStyles.ju_between_Direction}>
                            <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.pv8,PublicStyles.listItem,PublicStyles.borderBottom]}>
                                <Text style={PublicStyles.ft16_333}>宝宝生日</Text>
                                <Text style={PublicStyles.ft16_666}>2014-05-14</Text>
                            </View>
                        </View>
                        <View style={PublicStyles.ju_between_Direction}>
                            <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.pv8,PublicStyles.listItem,PublicStyles.borderBottom]}>
                                <Text style={PublicStyles.ft16_333}>所在班级</Text>
                                <Text style={PublicStyles.ft16_666}>芒果班</Text>
                            </View>
                        </View>
                        <View style={PublicStyles.ju_between_Direction}>
                            <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.pv8,PublicStyles.listItem,PublicStyles.borderBottom]}>
                                <Text style={PublicStyles.ft16_333}>宝宝国籍</Text>
                                <Text style={PublicStyles.ft16_666}>中国</Text>
                            </View>
                        </View>
                        <View style={PublicStyles.ju_between_Direction}>
                            <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.pv8,PublicStyles.listItem,PublicStyles.borderBottom]}>
                                <Text style={PublicStyles.ft16_333}>宝宝籍贯</Text>
                                <Text style={PublicStyles.ft16_666}>江苏省</Text>
                            </View>
                        </View>
                        <View style={[PublicStyles.ju_between_Direction]}>
                            <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.pv8,PublicStyles.listItem,PublicStyles.borderBottom]}>
                                <Text style={PublicStyles.ft16_333}>宝宝民族</Text>
                                <Text style={PublicStyles.ft16_666}>满族</Text>
                            </View>
                        </View>
                    </View>
                    <View style={PublicStyles.ph15}>
                        <View style={[PublicStyles.courseIntroTitle,PublicStyles.bg_orange,PublicStyles.al_center,PublicStyles.ju_center,PublicStyles.mt24,PublicStyles.mb34,PublicStyles.borderRadius]}>
                            <Text style={PublicStyles.ft16_fff}>退出登录</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
