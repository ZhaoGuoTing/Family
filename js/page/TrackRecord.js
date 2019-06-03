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
import TrackRecordPublish from "./TrackRecordPublish";

export default class TrackRecord extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ModalBabyNameToggle: false,   // 1、模态框 宝宝选择弹窗 默认false不显示
            ModalCameraToggle:false,   // 2、模态框 右上角相机展开菜单弹窗 默认false不显示
            ModalDeleteToggle:false,   // 3、模态框 提示删除弹窗 默认false不显示
        }
    }

    render() {
        return (
            <SafeAreaView style={{flex: 1,backgroundColor: '#33D9B5'}}>
                <View style={[PublicStyles.navigationBar,PublicStyles.ju_between_Direction,PublicStyles.al_center]}>
                    <TouchableOpacity style={[PublicStyles.tabBarRight,PublicStyles.mv8,PublicStyles.ju_center,PublicStyles.al_center]} onPress={() => this.props.navigation.goBack()}>
                        <Image style={PublicStyles.tabBarRightIcon} source={require('../../img/returnBtn.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[PublicStyles.ju_center,PublicStyles.al_center]}  onPress={() => this.ModalBabyNameToggleFun()}>
                        <View style={PublicStyles.al_center}>
                            <Text style={PublicStyles.ft16_fff}>成长档案·小土豆</Text>
                            <Image style={PublicStyles.moreBtn} source={require('../../img/downward.png')} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[PublicStyles.tabBarRight,PublicStyles.mv8,PublicStyles.ju_center,PublicStyles.al_center]}  onPress={() => this.ModalCameraToggleFun()}>
                        <Image style={PublicStyles.tabBarRightIcon} source={require('../../img/ChatIcon-9.png')} />
                    </TouchableOpacity>
                </View>
                <ScrollView style={PublicStyles.bg_white}>
                    <ImageBackground style={[PublicStyles.myCenterBg,PublicStyles.ju_center,PublicStyles.al_center]}  source={require('../../img/myCenterBg.png')} >
                        <Image style={PublicStyles.UserPic} source={require('../../img/userPic.jpg')} />
                        <View>
                            <View style={[PublicStyles.ju_around_Direction,PublicStyles.pv6]}>
                                <Text style={[PublicStyles.ft16_333,PublicStyles.ph6]}>小土豆</Text>
                                <Text style={[PublicStyles.ft16_333,PublicStyles.ph6]}>3岁</Text>
                            </View>
                        </View>
                        <View style={[PublicStyles.TimePhoto,PublicStyles.ju_around_Direction,PublicStyles.al_center]}>
                            <Image style={PublicStyles.TimePhotoIcon} source={require('../../img/ModalCamera-1.png')} />
                            <Text style={[PublicStyles.ft16_fff,PublicStyles.ph6]}>时光相册</Text>
                            <Text style={[PublicStyles.ft16_fff,PublicStyles.ph6]}>2017-05-26</Text>
                            <Image style={PublicStyles.TimePhotoIcon} source={require('../../img/calendar.png')} />
                        </View>
                    </ImageBackground>
                    <View style={[PublicStyles.bg_white,PublicStyles.ph15,PublicStyles.borderBottom]}>
                        <View>
                            <View style={[PublicStyles.ju_start_Direction,PublicStyles.al_center,PublicStyles.pv12]}>
                                <View style={[PublicStyles.TrackRecordDate,PublicStyles.ju_center,PublicStyles.al_center]}>
                                    <Text style={PublicStyles.ft32_fff}>24</Text>
                                    <Text style={PublicStyles.ft14_fff}>2017.05</Text>
                                </View>
                                <View style={PublicStyles.ph15}>
                                    <Text style={PublicStyles.ft16_333}>周三下午</Text>
                                    <Text style={PublicStyles.ft14_666}>3岁5个月28天</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={PublicStyles.ft16_333}>宝宝能够健康的成长，是家长最大的安慰！宝宝能够健康的成长，是家长最大的安慰！</Text>
                            </View>
                            <View style={[PublicStyles.flexWrap,PublicStyles.flexDirection,PublicStyles.ju_between_Direction]}>
                                <Image style={PublicStyles.ModalBabyImg} source={require('../../img/userPic.jpg')} />
                                <Image style={PublicStyles.ModalBabyImg} source={require('../../img/userPic.jpg')} />
                                <Image style={PublicStyles.ModalBabyImg} source={require('../../img/userPic.jpg')} />
                                <Image style={PublicStyles.ModalBabyImg} source={require('../../img/userPic.jpg')} />
                            </View>
                            <View style={[PublicStyles.ju_end_Direction,PublicStyles.pv12]}>
                                <TouchableOpacity  onPress={() => this.ModalDeleteToggleFun()}>
                                    <Image style={[PublicStyles.BabylistBtn,PublicStyles.mh10]} source={require('../../img/delete.png')} />
                                </TouchableOpacity>
                                <Image style={[PublicStyles.BabylistBtn,PublicStyles.mh10]} source={require('../../img/share.png')} />
                            </View>
                        </View>
                    </View>
                </ScrollView>
                {this.ModalBabyNameToggleFunWrap()}
                {this.ModalCameraToggleFunWrap()}
                {this.ModalDeleteToggleFunWrap()}
            </SafeAreaView>

        )
    }



    // 1、模态框 宝宝选择弹窗 取反函数
    ModalBabyNameToggleFun() {
        this.setState({
            ModalBabyNameToggle: !this.state.ModalBabyNameToggle,
        })
    }
    // 1、模态框 宝宝选择弹窗
    ModalBabyNameToggleFunWrap() {
        return(
            <Modal isVisible={this.state.ModalBabyNameToggle} backdropOpacity={0.3} style={{margin: 0, alignItems:'flex-start', justifyContent: 'flex-start'}} onBackdropPress={() => this.setState({ ModalBabyNameToggle: false })}>
                <SafeAreaView>
                    <View style={[PublicStyles.ModalBabyWrap,PublicStyles.al_center]}>
                        <View style={[PublicStyles.ModalBabyName,PublicStyles.al_center]}>
                            <Image style={PublicStyles.ModalUpBtn} source={require('../../img/ModalUpBtn.png')} />
                            <View style={PublicStyles.pv6}>
                                <Text style={PublicStyles.ft16_green}>小土豆</Text>
                            </View>
                            <View style={PublicStyles.pv6}>
                                <Text style={PublicStyles.ft16_333}>小罗罗</Text>
                            </View>
                            <View style={PublicStyles.pv6}>
                                <Text style={PublicStyles.ft16_333}>三胞胎</Text>
                            </View>
                        </View>
                    </View>
                </SafeAreaView>
            </Modal>
        )
    }



    // 2、模态框 右上角相机展开菜单弹窗 取反函数
    ModalCameraToggleFun() {
        this.setState({
            ModalCameraToggle: !this.state.ModalCameraToggle,
        })
    }
    // 2、模态框 右上角相机展开菜单弹窗
    ModalCameraToggleFunWrap() {
        return(
            <Modal isVisible={this.state.ModalCameraToggle} backdropOpacity={0.3} style={{margin: 0, alignItems:'flex-start', justifyContent: 'flex-start'}} onBackdropPress={() => this.setState({ ModalCameraToggle: false })}>
                <SafeAreaView>
                    <View style={[PublicStyles.ModalCameraWrap,PublicStyles.ju_around_Direction,PublicStyles.pv8]}>
                        <TouchableOpacity style={PublicStyles.al_center} onPress={() => NavigationUtil.goPage({navigation: this.props.navigation},"TrackRecordPublish") || this.ModalCameraToggleFun()}>
                            <View style={[PublicStyles.BottomFunctionItem,PublicStyles.ModalCameraItemBg_yellow]}>
                                <Image style={PublicStyles.enjoyBtn} source={require('../../img/ModalCamera-1.png')} />
                            </View>
                            <Text style={PublicStyles.ft14_666}>相册</Text>
                        </TouchableOpacity>
                        <View style={PublicStyles.al_center}>
                            <View style={[PublicStyles.BottomFunctionItem,PublicStyles.ModalCameraItemBg_red]}>
                                <Image style={PublicStyles.enjoyBtn} source={require('../../img/ModalCamera-2.png')} />
                            </View>
                            <Text style={PublicStyles.ft14_666}>拍摄</Text>
                        </View>
                        <View style={PublicStyles.al_center}>
                            <View style={[PublicStyles.BottomFunctionItem,PublicStyles.ModalCameraItemBg_green]}>
                                <Image style={PublicStyles.enjoyBtn} source={require('../../img/ModalCamera-3.png')} />
                            </View>
                            <Text style={PublicStyles.ft14_666}>小视频</Text>
                        </View>
                        <View style={PublicStyles.al_center}>
                            <View style={[PublicStyles.BottomFunctionItem,PublicStyles.ModalCameraItemBg_blue]}>
                                <Image style={PublicStyles.enjoyBtn} source={require('../../img/ModalCamera-4.png')} />
                            </View>
                            <Text style={PublicStyles.ft14_666}>文件共享</Text>
                        </View>
                    </View>
                </SafeAreaView>
            </Modal>
        )
    }

    // 3、模态框 提示删除弹窗 取反函数
    ModalDeleteToggleFun() {
        this.setState({
            ModalDeleteToggle: !this.state.ModalDeleteToggle,
        })
    }

    // 3、模态框 提示删除弹窗
    ModalDeleteToggleFunWrap() {
        return(
            <Modal isVisible={this.state.ModalDeleteToggle} backdropOpacity={0.3} style={{margin: 0, alignItems:'flex-start', justifyContent: 'center'}} onBackdropPress={() => this.setState({ ModalDeleteToggle: false })}>
                <SafeAreaView>
                    <View style={[PublicStyles.ModalBabyWrap,PublicStyles.al_center,PublicStyles.ju_center]}>
                        <View style={PublicStyles.ModalHint}>
                            <Text style={PublicStyles.ft16_333}>提示</Text>
                            <Text style={[PublicStyles.ft14_666,PublicStyles.pv12]}>确定删除吗？</Text>
                            <View style={PublicStyles.ju_end_Direction}>
                                <Text style={[PublicStyles.ft16_666,PublicStyles.ph10]} onPress={() => this.ModalDeleteToggleFun()}>取消</Text>
                                <Text style={[PublicStyles.ft16_green,PublicStyles.ph10]} onPress={() => this.ModalDeleteToggleFun()}>确定</Text>
                            </View>
                        </View>
                    </View>
                </SafeAreaView>
            </Modal>
        )
    }

}

