import React, { Component } from 'react'
import {
    View,
    Text,
    Button,
    Platform,
    TextInput,
    StyleSheet,
    ScrollView,
    KeyboardAvoidingView,
    SafeAreaView, Image, TouchableOpacity, ImageBackground,
} from 'react-native'


// 公共样式
import PublicStyles from '../styles/PublicStyles';
// Modal模态框组件
import Modal from "react-native-modal";
// 全局导航 跳转工具类
import NavigationUtil from "../navigator/NavigationUtil";

export default class TrackRecordPublish extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checkbox: false,// 2、复选框： 匿名举报
        }
    }

    render() {
        return (
            <SafeAreaView>
                <View style={[PublicStyles.bg_white,PublicStyles.ph15]}>
                    <View style={[PublicStyles.ju_between_Direction,PublicStyles.mv10]}>
                        <Text style={PublicStyles.ft16_333}>添加时光档案</Text>
                    </View>
                    <TextInput
                        style={PublicStyles.noticeSendInput}
                        multiline={true}  // 多行输入
                        keyboardType='default'   // 系统默认键盘
                        placeholder='记录此刻时光...'  // 输入框默认内容
                        autoFocus={true}  // 获取焦点
                        underlineColorAndroid='transparent'  // 安卓必写
                    />
                    <View>
                        <View style={[PublicStyles.flexDirection,PublicStyles.flexWrap,PublicStyles.mt10]}>
                            <View style={[PublicStyles.noticePhotos,PublicStyles.mr10]}>
                                <Image style={PublicStyles.noticePhotos} source={require('../../img/FoodPhoto-1.jpeg')}/>
                            </View>
                            <View style={[PublicStyles.noticePhotos,PublicStyles.mr10]}>
                                <Image style={PublicStyles.noticePhotos} source={require('../../img/FoodPhoto-1.jpeg')}/>
                            </View>
                            <View style={[PublicStyles.noticePhotos,PublicStyles.mr10]}>
                                <Image style={PublicStyles.noticePhotos} source={require('../../img/FoodPhoto-1.jpeg')}/>
                            </View>
                            <View style={[PublicStyles.noticePhotos,PublicStyles.mr10]}>
                                <Image style={PublicStyles.noticePhotos} source={require('../../img/FoodPhoto-1.jpeg')}/>
                            </View>
                            <View style={[PublicStyles.noticePhotos,PublicStyles.mr10]}>
                                <Image style={PublicStyles.noticePhotos} source={require('../../img/FoodPhoto-1.jpeg')}/>
                            </View>
                        </View>
                        <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.mb10]}>
                            <View style={PublicStyles.ju_start_Direction}>
                                <Image style={PublicStyles.noticePhotoIcon} source={require('../../img/photoIcon.png')}/>
                                <Text style={[PublicStyles.ft14_888,PublicStyles.ml10]}>添加照片</Text>
                            </View>
                            <TouchableOpacity style={[PublicStyles.ju_end_Direction,PublicStyles.al_center]}
                                              onPress={() => {this.checkboxCheck()}}>
                                <View style={[PublicStyles.mh10,this.state.checkbox === true ? PublicStyles.checkboxCur : PublicStyles.checkbox]}>
                                    <Image style={PublicStyles.radioIcon} source={require('../../img/checkIcon.png')} />
                                </View>
                                <Text style={PublicStyles.ft16_666}>仅自己可见</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={PublicStyles.ph15}>
                    <TouchableOpacity style={[PublicStyles.courseIntroTitle,PublicStyles.bg_green,PublicStyles.al_center,PublicStyles.ju_center,PublicStyles.mt24,PublicStyles.mb34,PublicStyles.borderRadius]} onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"PhoneVerification")}}>
                        <Text style={PublicStyles.ft16_fff}>发表</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }

    // 2、复选框： 匿名举报

    checkboxCheck() {
        this.setState({
            checkbox: !this.state.checkbox,
        })
    }
}

