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
    TextInput,
    ScrollView,
    SafeAreaView,
    KeyboardAvoidingView
} from 'react-native';
// 全局导航 跳转工具类
import NavigationUtil from '../navigator/NavigationUtil';
// 公共样式
import PublicStyles from '../styles/PublicStyles';
import IfIphoneX from "../styles/IfIphoneX";



export default class NoticeHomeworkDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sendInfoToggle:false,   // 2、发帖子弹窗，显示隐藏
            collectBtn: true,   // 4、点赞图标切换
        }
    }

    render() {
        let behavior = Platform.OS === 'ios' ? 'position' : null;

        return (
            <KeyboardAvoidingView  behavior={behavior}>
                <ScrollView>
                    <View style={[PublicStyles.ph15,PublicStyles.pv12]}>
                        <View><Text style={PublicStyles.ft16_333} numberOfLines={1}>庆“六一”活动通知：</Text></View>
                        <View style={PublicStyles.ju_start_Direction}>
                            <Text style={PublicStyles.ft14_888}>5月26日 17:30</Text>
                            <Text style={[PublicStyles.ft14_green,PublicStyles.ml10]}>马老师</Text>
                        </View>
                        <View style={PublicStyles.pv12}>
                            <Text style={PublicStyles.ft14_333} numberOfLines={3}>尊敬的家长：
                                您好！
                                在“六一”儿童节来临之际儿童节来临之际儿童节来临之际儿童节来临之际儿童节来临之际儿童节来临之际儿童节来临之际儿童节来临之际儿童节来临之际儿童节来临之际儿童节来临之际儿童节来临之际儿童节来临之际儿童节来临之际儿童节来临之际儿童节来临之际，为了让宝宝们度过一…在“六一”儿童节来临之际，为了让宝宝们度过一…在“六一”儿童节来临之际，为了让宝宝们度过一…在“六一”儿童节来临之际，为了让宝宝们度过一…在“六一”儿童节来临之际，为了让宝宝们度过一…</Text>
                        </View>
                        <View style={[PublicStyles.ju_between_Direction,PublicStyles.borderTop,PublicStyles.pt12]}>
                            <Text style={PublicStyles.ft16_333}>评论（3）</Text>
                            <View style={PublicStyles.ju_end_Direction}>
                                <TouchableOpacity style={[PublicStyles.mr20,PublicStyles.al_center]} onPress={() => {this.collectBtn()}}>
                                    <Image style={PublicStyles.noticePraiseIcon} source={this.state.collectBtn === true ? require("../../img/praiseIcon.png") : require("../../img/praiseIconCur.png")}/>
                                </TouchableOpacity>
                                <TouchableOpacity style={PublicStyles.al_center} onPress={()=>{this.sendInfoFun()}}>
                                    <Image style={PublicStyles.noticeCommentIcon} source={require('../../img/commentIcon.png')}/>
                                    <Text style={PublicStyles.ft16_green}>发表评论</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    {this.commentWrap()}

                </ScrollView>
                {this.sendInfo()}
            </KeyboardAvoidingView>
        );
    }
    //  1、点击发送消息、显示发帖子弹窗
    sendInfo(){
        if (this.state.sendInfoToggle === true) {
            return(
                <View style={[PublicStyles.noticeSendInfo,PublicStyles.borderTop,PublicStyles.ph15,{paddingBottom: IfIphoneX.ifIphoneX(34,0,0)}]}>
                    <View style={[PublicStyles.ju_between_Direction,PublicStyles.mv10]}>
                        <Text style={PublicStyles.ft16_333}>发帖子</Text>
                        <Text onPress={()=>{this.sendInfoFun()}}>关闭</Text>
                    </View>
                    <TextInput
                        style={PublicStyles.noticeSendInput}
                        multiline={true}  // 多行输入
                        keyboardType='default'   // 系统默认键盘
                        placeholder='我来说2345678几句'  // 输入框默认内容
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
                        </View>
                        <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.mb10]}>
                            <View style={PublicStyles.ju_start_Direction}>
                                <Image style={PublicStyles.noticePhotoIcon} source={require('../../img/photoIcon.png')}/>
                                <Text style={[PublicStyles.ft14_888,PublicStyles.ml10]}>添加照片</Text>
                            </View>
                            <View style={[PublicStyles.noticeSendBtn,PublicStyles.bg_green,PublicStyles.ju_center,PublicStyles.al_center]}>
                                <Text style={PublicStyles.ft14_fff}>发表</Text>
                            </View>
                        </View>
                    </View>
                </View>
            )
        }
    }

    //  2、发帖子弹窗，显示隐藏
    sendInfoFun(){
        this.setState({
            sendInfoToggle: !this.state.sendInfoToggle,
        })
    }
    //  3、评论区
    commentWrap(){
        return(
            <View style={PublicStyles.ph15}>
                <View style={[PublicStyles.noticeCommentWrap]}>
                    <View style={[PublicStyles.borderBottom,PublicStyles.ju_start_Direction,PublicStyles.flexWrap,PublicStyles.al_center,PublicStyles.pv8,PublicStyles.ph6]}>
                        <Image style={PublicStyles.noticePraiseIcon} source={require('../../img/praiseIconCur.png')}/>
                        <Text style={PublicStyles.ft16_333}>林冲、</Text>
                        <Text style={PublicStyles.ft16_333}>混元霹雳手纪晓岚、</Text>
                        <Text style={PublicStyles.ft16_333}>刘备、</Text>
                        <Text style={PublicStyles.ft16_333}>松花蛋、</Text>
                        <Text style={PublicStyles.ft16_333}>松花蛋1、</Text>
                        <Text style={PublicStyles.ft16_333}>松花蛋2、</Text>
                        <Text style={PublicStyles.ft16_333}>松花蛋3、</Text>
                    </View>
                    <View style={[PublicStyles.ju_around_Direction,PublicStyles.mv5]}>
                        <View>
                            <Image style={PublicStyles.noticeUserPic} source={require('../../img/userPic.jpg')}/>
                        </View>
                        <View style={PublicStyles.noticeUserComment}>
                            <View style={PublicStyles.ju_start_Direction}>
                                <Text style={[PublicStyles.ft16_green,PublicStyles.mb4]}>混元霹雳手纪晓岚:</Text>
                            </View>
                            <Text style={PublicStyles.ft14_333}>蒙特梭利儿童之家-历经110年后到达贵阳。2019年3月23日，蒙特梭利携手钟书阁举办一场【“乐”来越亲密】的公益父母讲座及音乐体验</Text>
                        </View>
                    </View>
                    <View style={[PublicStyles.ju_around_Direction,PublicStyles.mv5]}>
                        <View>
                            <Image style={PublicStyles.noticeUserPic} source={require('../../img/FoodPhoto-1.jpeg')}/>
                        </View>
                        <View style={PublicStyles.noticeUserComment}>
                            <View style={PublicStyles.ju_start_Direction}>
                                <Text style={[PublicStyles.ft16_green,PublicStyles.mb4]}>松花蛋:</Text>
                                <Text style={[PublicStyles.ft16_333,PublicStyles.mb4]}>回复</Text>
                                <Text style={[PublicStyles.ft16_green,PublicStyles.mb4]}>混元霹雳手纪晓岚:</Text>
                            </View>
                            <Text style={PublicStyles.ft14_333}>想去做个兼职想去做个兼职想去做个兼职想去做个兼职想去做个兼职想去做个兼职想去做个兼职想去做个兼职想去做个兼职想去做个兼职想去做个兼职想去做个兼职想去做个兼职想去做个兼职想去做个兼职想去做个兼职想去做个兼职，专车司机什么的。</Text>
                            <View style={[PublicStyles.flexDirection,PublicStyles.flexWrap,PublicStyles.mt10]}>
                                <View style={[PublicStyles.noticeCommentPhotos,PublicStyles.mr10]}>
                                    <Image style={PublicStyles.noticeCommentPhotos} source={require('../../img/FoodPhoto-1.jpeg')}/>
                                </View>
                                <View style={[PublicStyles.noticeCommentPhotos,PublicStyles.mr10]}>
                                    <Image style={PublicStyles.noticeCommentPhotos} source={require('../../img/FoodPhoto-2.jpeg')}/>
                                </View>
                                <View style={[PublicStyles.noticeCommentPhotos,PublicStyles.mr10]}>
                                    <Image style={PublicStyles.noticeCommentPhotos} source={require('../../img/FoodPhoto-3.jpeg')}/>
                                </View>
                                <View style={[PublicStyles.noticeCommentPhotos,PublicStyles.mr10]}>
                                    <Image style={PublicStyles.noticeCommentPhotos} source={require('../../img/FoodPhoto-4.jpeg')}/>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={[PublicStyles.ju_around_Direction,PublicStyles.mv5]}>
                        <View>
                            <Image style={PublicStyles.noticeUserPic} source={require('../../img/userPic.jpg')}/>
                        </View>
                        <View style={PublicStyles.noticeUserComment}>
                            <View style={PublicStyles.ju_start_Direction}>
                                <Text style={[PublicStyles.ft16_green,PublicStyles.mb4]}>混元霹雳手纪晓岚:</Text>
                                <Text style={[PublicStyles.ft16_333,PublicStyles.mb4]}>回复</Text>
                                <Text style={[PublicStyles.ft16_green,PublicStyles.mb4]}>松花蛋:</Text>
                            </View>
                            <Text style={PublicStyles.ft14_333}>你已经是个成熟的人了，在开茶饮店之前，要对行业有个全面的了解，先看完这篇行业分析再做决定也不迟～</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    // 4、点赞图标切换
    collectBtn() {
        this.setState({
            collectBtn: !this.state.collectBtn,
        })
    }

}
