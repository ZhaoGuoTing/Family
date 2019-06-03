import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, Button, TouchableNativeFeedback} from 'react-native';
import PublicStyles from "../styles/PublicStyles";
import NavigationUtil from "./NavigationUtil";


// "react-navigation"组件、创建导航路由
// 1、引入我们需要的导航器
// createStackNavigator 屏幕上方导航栏，返回功能
// createMaterialTopTabNavigator 顶部导航
// createBottomTabNavigator 底部导航
// createSwitchTabNavigator 启动页跳转首页，不会跳转回来
import {
    createStackNavigator,
    createMaterialTopTabNavigator,
    createBottomTabNavigator,
    createSwitchNavigator
} from "react-navigation";

// 引入页面
import WelcomePage from '../page/WelcomePage';
import HomePage from '../page/HomePage';
import BabySafety from '../page/BabySafety';
import SchoolScenery from '../page/SchoolScenery';
import WeekFood from '../page/WeekFood';
import TimeTable from '../page/TimeTable';
import NoticeKindergarten from '../page/NoticeKindergarten';
import NoticeKindergartenDetails from '../page/NoticeKindergartenDetails';
import NoticeClass from '../page/NoticeClass';
import NoticeClassDetails from '../page/NoticeClassDetails';
import NoticeHomework from '../page/NoticeHomework';
import NoticeHomeworkDetails from '../page/NoticeHomeworkDetails';

import ClassInterest from '../page/ClassInterest';
import ClassInterestDetails from '../page/ClassInterestDetails';
import ClassParentingDetails from '../page/ClassParentingDetails';
import ApplyInterest from '../page/ApplyInterest';
import ApplyParenting from '../page/ApplyParenting';
import SchoolSceneryDetails from '../page/SchoolSceneryDetails';
import ApplySchoolScenery from '../page/ApplySchoolScenery';
import ClassNurseryDetails from '../page/ClassNurseryDetails';
import BabyHealthy from '../page/BabyHealthy';
import BabyAttendance from '../page/BabyAttendance';
import MyClass from '../page/MyClass';
import PaymentRecords from '../page/PaymentRecords';
import PaymentRecordsDetails from '../page/PaymentRecordsDetails';
import MyBaby from '../page/MyBaby';
import MyBabyAdd from '../page/MyBabyAdd';
import BabyDrug from '../page/BabyDrug';
import BabyDrugAdd from '../page/BabyDrugAdd';
import MyBabyModify from '../page/MyBabyModify';
import BabyLeave from '../page/BabyLeave';
import BabyLeaveAdd from '../page/BabyLeaveAdd';
import NoticeComplain from '../page/NoticeComplain';
import NoticeComplainDetails from '../page/NoticeComplainDetails';
import NoticeComplainAdd from '../page/NoticeComplainAdd';
import BasicsInfo from '../page/BasicsInfo';
import LogonPage from '../page/LogonPage';
import LogonRegisterPage from '../page/LogonRegisterPage';
import LogonRegistrationProtocol from '../page/LogonRegistrationProtocol';
import LogonForgetPassword from '../page/LogonForgetPassword';
import ChatGroup from '../page/ChatGroup';
import PhoneList from '../page/PhoneList';
import SetUp from '../page/SetUp';
import AboutUs from '../page/AboutUs';
import ChangePassword from '../page/ChangePassword';
import UpDatePhoneNumber from '../page/UpDatePhoneNumber';
import TrackRecord from '../page/TrackRecord';
import TrackRecordPublish from '../page/TrackRecordPublish';













export default class AppNavigator extends Component {

    render() {

        const InitNavigator = createStackNavigator({
            WelcomePage: {
                screen: WelcomePage,
                navigationOptions: {
                    header: null, // 可以通过将header 设置为 null，来禁止StackNavigator的Navigator Bar，
                }
            }
        });
        const MainNavigator = createStackNavigator({

            HomePage: {
                screen: HomePage,
                navigationOptions: {
                    // header:null, // 可以通过将header 设置为 null，来禁止StackNavigator的Navigator Bar，
                    headerTitle: '贝宝娃幼儿园',
                    headerStyle: {backgroundColor: '#33D9B5'},
                    headerTintColor: '#fff',
                }
            },
            BabySafety: {
                screen: BabySafety,
                navigationOptions: {
                    // header:null, // 可以通过将header 设置为 null，来禁止StackNavigator的Navigator Bar，
                    headerTitle: '宝宝安全',
                    headerStyle: {backgroundColor: '#33D9B5'},
                    headerTintColor: '#fff',
                }
            },
            SchoolScenery: {
                screen: SchoolScenery,
                navigationOptions: {
                    // header:null, // 可以通过将header 设置为 null，来禁止StackNavigator的Navigator Bar，
                    headerTitle: '园区风采',
                    headerStyle: {backgroundColor: '#33D9B5'},
                    headerTintColor: '#fff',
                }
            },
            WeekFood: {
                screen: WeekFood,
                navigationOptions: {
                    // header:null, // 可以通过将header 设置为 null，来禁止StackNavigator的Navigator Bar，
                    headerTitle: '一周食谱',
                    headerStyle: {backgroundColor: '#33D9B5'},
                    headerTintColor: '#fff',
                }
            },
            TimeTable: {
                screen: TimeTable,
                navigationOptions: {
                    // header:null, // 可以通过将header 设置为 null，来禁止StackNavigator的Navigator Bar，
                    headerTitle: '课程安排',
                    headerStyle: {backgroundColor: '#33D9B5'},
                    headerTintColor: '#fff',
                }
            },
            NoticeKindergarten: {
                screen: NoticeKindergarten,
                navigationOptions: {
                    // header:null, // 可以通过将header 设置为 null，来禁止StackNavigator的Navigator Bar，
                    headerTitle: '园区通知',
                    headerStyle: {backgroundColor: '#33D9B5'},
                    headerTintColor: '#fff',
                }
            },
            NoticeClass: {
                screen: NoticeClass,
                navigationOptions: {
                    // header:null, // 可以通过将header 设置为 null，来禁止StackNavigator的Navigator Bar，
                    headerTitle: '班级公告',
                    headerStyle: {backgroundColor: '#33D9B5'},
                    headerTintColor: '#fff',
                }
            },
            NoticeHomework: {
                screen: NoticeHomework,
                navigationOptions: {
                    // header:null, // 可以通过将header 设置为 null，来禁止StackNavigator的Navigator Bar，
                    headerTitle: '家庭作业',
                    headerStyle: {backgroundColor: '#33D9B5'},
                    headerTintColor: '#fff',
                }
            },
            NoticeKindergartenDetails: {
                screen: NoticeKindergartenDetails,
                navigationOptions: {
                    // header:null, // 可以通过将header 设置为 null，来禁止StackNavigator的Navigator Bar，
                    headerTitle: '园区通知评论区',
                    headerStyle: {backgroundColor: '#33D9B5'},
                    headerTintColor: '#fff',
                }
            },
            NoticeClassDetails: {
                screen: NoticeClassDetails,
                navigationOptions: {
                    // header:null, // 可以通过将header 设置为 null，来禁止StackNavigator的Navigator Bar，
                    headerTitle: '班级公告评论区',
                    headerStyle: {backgroundColor: '#33D9B5'},
                    headerTintColor: '#fff',
                }
            },
            NoticeHomeworkDetails: {
                screen: NoticeHomeworkDetails,
                navigationOptions: {
                    // header:null, // 可以通过将header 设置为 null，来禁止StackNavigator的Navigator Bar，
                    headerTitle: '家庭作业评论区',
                    headerStyle: {backgroundColor: '#33D9B5'},
                    headerTintColor: '#fff',
                }
            },
            ClassInterest: {
                screen: ClassInterest,
                navigationOptions: {
                    // header:null, // 可以通过将header 设置为 null，来禁止StackNavigator的Navigator Bar，
                    headerTitle: '兴趣班',
                    headerStyle: {backgroundColor: '#33D9B5'},
                    headerTintColor: '#fff',
                }
            },
            ClassInterestDetails: {
                screen: ClassInterestDetails,
                navigationOptions: {
                    // header:null, // 可以通过将header 设置为 null，来禁止StackNavigator的Navigator Bar，
                    headerTitle: '兴趣班详情',
                    headerStyle: {backgroundColor: '#33D9B5'},
                    headerTintColor: '#fff',
                }
            },
            ClassParentingDetails: {
                screen: ClassParentingDetails,
                navigationOptions: {
                    // header:null, // 可以通过将header 设置为 null，来禁止StackNavigator的Navigator Bar，
                    headerTitle: '亲子班详情',
                    headerStyle: {backgroundColor: '#33D9B5'},
                    headerTintColor: '#fff',
                }
            },
            ApplyInterest: {
                screen: ApplyInterest,
                navigationOptions: {
                    // header:null, // 可以通过将header 设置为 null，来禁止StackNavigator的Navigator Bar，
                    headerTitle: '兴趣班报名',
                    headerStyle: {backgroundColor: '#33D9B5'},
                    headerTintColor: '#fff',
                }
            },
            ApplyParenting: {
                screen: ApplyParenting,
                navigationOptions: {
                    // header:null, // 可以通过将header 设置为 null，来禁止StackNavigator的Navigator Bar，
                    headerTitle: '亲子班报名',
                    headerStyle: {backgroundColor: '#33D9B5'},
                    headerTintColor: '#fff',
                }
            },
            SchoolSceneryDetails: {
                screen: SchoolSceneryDetails,
                navigationOptions: {
                    // header:null, // 可以通过将header 设置为 null，来禁止StackNavigator的Navigator Bar，
                    headerTitle: '园区风采详情',
                    headerStyle: {backgroundColor: '#33D9B5'},
                    headerTintColor: '#fff',
                }
            },
            ApplySchoolScenery: {
                screen: ApplySchoolScenery,
                navigationOptions: {
                    // header:null, // 可以通过将header 设置为 null，来禁止StackNavigator的Navigator Bar，
                    headerTitle: '报名幼园风采',
                    headerStyle: {backgroundColor: '#33D9B5'},
                    headerTintColor: '#fff',
                }
            },
            ClassNurseryDetails: {
                screen: ClassNurseryDetails,
                navigationOptions: {
                    // header:null, // 可以通过将header 设置为 null，来禁止StackNavigator的Navigator Bar，
                    headerTitle: '幼小衔接班',
                    headerStyle: {backgroundColor: '#33D9B5'},
                    headerTintColor: '#fff',
                }
            },
            BabyHealthy: {
                screen: BabyHealthy,
                navigationOptions: {
                    // header:null, // 可以通过将header 设置为 null，来禁止StackNavigator的Navigator Bar，
                    headerTitle: '宝宝健康',
                    headerStyle: {backgroundColor: '#33D9B5'},
                    headerTintColor: '#fff',
                }
            },
            BabyAttendance: {
                screen: BabyAttendance,
                navigationOptions: {
                    // header:null, // 可以通过将header 设置为 null，来禁止StackNavigator的Navigator Bar，
                    headerTitle: '宝宝考勤',
                    headerStyle: {backgroundColor: '#33D9B5'},
                    headerTintColor: '#fff',
                }
            },
            MyClass: {
                screen: MyClass,
                navigationOptions: {
                    // header:null, // 可以通过将header 设置为 null，来禁止StackNavigator的Navigator Bar，
                    headerTitle: '我的班级',
                    headerStyle: {backgroundColor: '#33D9B5'},
                    headerTintColor: '#fff',
                }
            },
            PaymentRecords: {
                screen: PaymentRecords,
                navigationOptions: {
                    // header:null, // 可以通过将header 设置为 null，来禁止StackNavigator的Navigator Bar，
                    headerTitle: '缴费记录',
                    headerStyle: {backgroundColor: '#33D9B5'},
                    headerTintColor: '#fff',
                }
            },
            PaymentRecordsDetails: {
                screen: PaymentRecordsDetails,
                navigationOptions: {
                    // header:null, // 可以通过将header 设置为 null，来禁止StackNavigator的Navigator Bar，
                    headerTitle: '缴费详情',
                    headerStyle: {backgroundColor: '#33D9B5'},
                    headerTintColor: '#fff',
                }
            },
            MyBaby: {
                screen: MyBaby,
                navigationOptions: {
                    // header:null, // 可以通过将header 设置为 null，来禁止StackNavigator的Navigator Bar，
                    headerTitle: '我的宝宝',
                    headerStyle: {backgroundColor: '#33D9B5'},
                    headerTintColor: '#fff',
                    headerRight: (
                        <TouchableOpacity style={[PublicStyles.tabBarRight,PublicStyles.mv8,PublicStyles.ju_center,PublicStyles.al_center]}  onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"MyBabyAdd")}}>
                            <Image style={PublicStyles.tabBarRightIcon} source={require('../../img/AddIcon.png')} />
                        </TouchableOpacity>
                    ),
                }
            },
            BabyDrug: {
                screen: BabyDrug,
                navigationOptions: {
                    // header:null, // 可以通过将header 设置为 null，来禁止StackNavigator的Navigator Bar，
                    headerTitle: '宝宝药品',
                    headerStyle: {backgroundColor: '#33D9B5'},
                    headerTintColor: '#fff',

                }
            },
            BabyDrugAdd: {
                screen: BabyDrugAdd,
                navigationOptions: {
                    // header:null, // 可以通过将header 设置为 null，来禁止StackNavigator的Navigator Bar，
                    headerTitle: '添加宝宝药品',
                    headerStyle: {backgroundColor: '#33D9B5'},
                    headerTintColor: '#fff',
                    headerRight: (
                        <View style={[PublicStyles.tabBarRight,PublicStyles.mv8,PublicStyles.ju_center,PublicStyles.al_center]} >
                            <Text style={PublicStyles.ft16_fff}>保存</Text>
                        </View>
                    ),
                }
            },
            MyBabyAdd: {
                screen: MyBabyAdd,
                navigationOptions: {
                    // header:null, // 可以通过将header 设置为 null，来禁止StackNavigator的Navigator Bar，
                    headerTitle: '添加宝宝',
                    headerStyle: {backgroundColor: '#33D9B5'},
                    headerTintColor: '#fff',
                }
            },
            MyBabyModify: {
                screen: MyBabyModify,
                navigationOptions: {
                    // header:null, // 可以通过将header 设置为 null，来禁止StackNavigator的Navigator Bar，
                    headerTitle: '修改宝宝资料',
                    headerStyle: {backgroundColor: '#33D9B5'},
                    headerTintColor: '#fff',
                }
            },
            BabyLeave: {
                screen: BabyLeave,
                navigationOptions: {
                    // header:null, // 可以通过将header 设置为 null，来禁止StackNavigator的Navigator Bar，
                    headerTitle: '宝宝请假',
                    headerStyle: {backgroundColor: '#33D9B5'},
                    headerTintColor: '#fff',
                    headerRight: (
                        <TouchableOpacity style={[PublicStyles.tabBarRight,PublicStyles.mv8,PublicStyles.ju_center,PublicStyles.al_center]}  onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"BabyLeaveAdd")}}>
                            <Image style={PublicStyles.tabBarRightIcon} source={require('../../img/AddIcon.png')} />
                        </TouchableOpacity>
                    ),
                }
            },
            BabyLeaveAdd: {
                screen: BabyLeaveAdd,
                navigationOptions: {
                    // header:null, // 可以通过将header 设置为 null，来禁止StackNavigator的Navigator Bar，
                    headerTitle: '添加宝宝请假消息',
                    headerStyle: {backgroundColor: '#33D9B5'},
                    headerTintColor: '#fff',
                }
            },
            NoticeComplain: {
                screen: NoticeComplain,
                navigationOptions: {
                    // header:null, // 可以通过将header 设置为 null，来禁止StackNavigator的Navigator Bar，
                    headerTitle: '投诉建议',
                    headerStyle: {backgroundColor: '#33D9B5'},
                    headerTintColor: '#fff',
                    headerRight: (
                        <TouchableOpacity style={[PublicStyles.tabBarRight,PublicStyles.mv8,PublicStyles.ju_center,PublicStyles.al_center]}  onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"NoticeComplainAdd")}}>
                            <Image style={PublicStyles.tabBarRightIcon} source={require('../../img/AddIcon.png')} />
                        </TouchableOpacity>
                    ),
                }
            },
            NoticeComplainDetails: {
                screen: NoticeComplainDetails,
                navigationOptions: {
                    // header:null, // 可以通过将header 设置为 null，来禁止StackNavigator的Navigator Bar，
                    headerTitle: '投诉建议评论区',
                    headerStyle: {backgroundColor: '#33D9B5'},
                    headerTintColor: '#fff',
                }
            },
            NoticeComplainAdd: {
                screen: NoticeComplainAdd,
                navigationOptions: {
                    // header:null, // 可以通过将header 设置为 null，来禁止StackNavigator的Navigator Bar，
                    headerTitle: '添加投诉建议',
                    headerStyle: {backgroundColor: '#33D9B5'},
                    headerTintColor: '#fff',
                }
            },
            BasicsInfo: {
                screen: BasicsInfo,
                navigationOptions: {
                    // header:null, // 可以通过将header 设置为 null，来禁止StackNavigator的Navigator Bar，
                    headerTitle: '基本资料',
                    headerStyle: {backgroundColor: '#33D9B5'},
                    headerTintColor: '#fff',
                }
            },
            LogonPage: {
                screen: LogonPage,
                navigationOptions: {
                    // header:null, // 可以通过将header 设置为 null，来禁止StackNavigator的Navigator Bar，
                    headerTitle: '登录',
                    headerStyle: {backgroundColor: '#33D9B5'},
                    headerTintColor: '#fff',
                }
            },
            LogonRegisterPage: {
                screen: LogonRegisterPage,
                navigationOptions: {
                    // header:null, // 可以通过将header 设置为 null，来禁止StackNavigator的Navigator Bar，
                    headerTitle: '快速注册',
                    headerStyle: {backgroundColor: '#33D9B5'},
                    headerTintColor: '#fff',
                }
            },
            LogonRegistrationProtocol: {
                screen: LogonRegistrationProtocol,
                navigationOptions: {
                    // header:null, // 可以通过将header 设置为 null，来禁止StackNavigator的Navigator Bar，
                    headerTitle: '注册协议',
                    headerStyle: {backgroundColor: '#33D9B5'},
                    headerTintColor: '#fff',
                }
            },
            LogonForgetPassword: {
                screen: LogonForgetPassword,
                navigationOptions: {
                    // header:null, // 可以通过将header 设置为 null，来禁止StackNavigator的Navigator Bar，
                    headerTitle: '忘记密码',
                    headerStyle: {backgroundColor: '#33D9B5'},
                    headerTintColor: '#fff',
                }
            },
            ChatGroup: {
                screen: ChatGroup,
                navigationOptions: {
                    // header:null, // 可以通过将header 设置为 null，来禁止StackNavigator的Navigator Bar，
                    headerTitle: '班级群聊',
                    headerStyle: {backgroundColor: '#33D9B5'},
                    headerTintColor: '#fff',
                }
            },
            PhoneList: {
                screen: PhoneList,
                navigationOptions: {
                    // header:null, // 可以通过将header 设置为 null，来禁止StackNavigator的Navigator Bar，
                    headerTitle: '园区通讯',
                    headerStyle: {backgroundColor: '#33D9B5'},
                    headerTintColor: '#fff',
                }
            },
            SetUp: {
                screen: SetUp,
                navigationOptions: {
                    // header:null, // 可以通过将header 设置为 null，来禁止StackNavigator的Navigator Bar，
                    headerTitle: '设置',
                    headerStyle: {backgroundColor: '#33D9B5'},
                    headerTintColor: '#fff',
                }
            },
            AboutUs: {
                screen: AboutUs,
                navigationOptions: {
                    // header:null, // 可以通过将header 设置为 null，来禁止StackNavigator的Navigator Bar，
                    headerTitle: '关于我们',
                    headerStyle: {backgroundColor: '#33D9B5'},
                    headerTintColor: '#fff',
                }
            },
            ChangePassword: {
                screen: ChangePassword,
                navigationOptions: {
                    // header:null, // 可以通过将header 设置为 null，来禁止StackNavigator的Navigator Bar，
                    headerTitle: '修改密码',
                    headerStyle: {backgroundColor: '#33D9B5'},
                    headerTintColor: '#fff',
                }
            },
            UpDatePhoneNumber: {
                screen: UpDatePhoneNumber,
                navigationOptions: {
                    // header:null, // 可以通过将header 设置为 null，来禁止StackNavigator的Navigator Bar，
                    headerTitle: '更新手机号码',
                    headerStyle: {backgroundColor: '#33D9B5'},
                    headerTintColor: '#fff',
                }
            },
            TrackRecord: {
                screen: TrackRecord,
                navigationOptions: {
                    header:null, // 可以通过将header 设置为 null，来禁止StackNavigator的Navigator Bar，
                    headerTitle: (
                        <TouchableOpacity style={[PublicStyles.ju_center,PublicStyles.al_center]}  onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"NoticeComplainAdd")}}>
                            <View style={PublicStyles.al_center}>
                                <Text style={PublicStyles.ft16_fff}>成长档案·小土豆</Text>
                                <Image style={PublicStyles.moreBtn} source={require('../../img/downward.png')} />
                            </View>
                        </TouchableOpacity>
                    ),
                    headerStyle: {backgroundColor: '#33D9B5'},
                    headerTintColor: '#fff',
                    headerRight: (
                        <TouchableOpacity style={[PublicStyles.tabBarRight,PublicStyles.mv8,PublicStyles.ju_center,PublicStyles.al_center]} onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"NoticeComplainAdd")}}>
                            <Image style={PublicStyles.tabBarRightIcon} source={require('../../img/ChatIcon-9.png')} />
                        </TouchableOpacity>
                    ),
                }
            },
            TrackRecordPublish: {
                screen: TrackRecordPublish,
                navigationOptions: {
                    // header:null, // 可以通过将header 设置为 null，来禁止StackNavigator的Navigator Bar，
                    headerTitle: '发表成长档案',
                    headerStyle: {backgroundColor: '#33D9B5'},
                    headerTintColor: '#fff',
                }
            },


        });


        const SwitchNavigator =  createSwitchNavigator({
            Init: InitNavigator,
            Main: MainNavigator,

        },{
            navigationOptions: {
                header:null, // 可以通过将header 设置为 null，来禁止StackNavigator的Navigator Bar，
            }
        });
        return(
            <SwitchNavigator/>
        )
    }
}


