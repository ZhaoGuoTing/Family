/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 *
 *
 *
 * 命名规则
 * BabySafety 宝宝安全
 * BabyHealthy 宝宝健康
 * BabyAttendance 宝宝考勤
 * BabyDrug 宝宝药品
 * BabyDrugAdd 添加宝宝药品
 *
 * HomePage
 *
 * NoticeClass 班级公告
 * NoticeClassDetails 班级公告详情页
 * NoticeHomework 家庭作业
 * NoticeHomeworkDetails 家庭作业详情页
 * NoticeKindergarten 园区通知
 * NoticeKindergartenDetails 园区通知详情页
 *
 * NoticeComplain 投诉建议
 * NoticeComplainDetails 投诉建议详情页
 * NoticeComplainAdd 添加投诉建议
 *
 * SchoolScenery 园区风采
 * SchoolSceneryDetails 园区风采详情页
 *
 * TabBarFindPage 找到
 * TabBarHomePage 首页
 * TabBarInfoPage 消息
 * TabBarMyPage 我的
 *
 * TimeTable 课程安排
 * WeekFood 一周食谱
 * WelcomePage 启动页
 *
 * ClassInterest 兴趣班列表
 * ClassInterestDetails 兴趣班详情页
 * ClassNurseryDetails 幼儿班详情页
 * ClassParentingDetails 亲子班详情页
 *
 * ApplyInterest 报名兴趣班
 * ApplyNursery 报名幼儿班
 * ApplyParenting 报名亲子班
 * ApplySchoolScenery 报名园区风采
 *
 *
 * ChatGroup 芒果班群聊
 * PhoneList 索引列表

 *
 * 个人中心
 * MyClass 我的班级
 * MyBaby 我的宝宝
 * MyBabyAdd 添加宝宝
 * MyBabyModify 修改宝宝资料
 * PaymentRecords 缴费记录
 * PaymentRecordsDetails 缴费记录详情页
 * BabyLeave 宝宝请假
 * BabyLeaveAdd 添加宝宝请假
 * BasicsInfo 基础资料
 * setUp 设置
 * AboutUs 关于我们
 * ChangePassword 修改密码
 * UpDatePhoneNumber 更新手机号码
 * PhoneVerification手机验证
 * TrackRecord 成长档案
 * TrackRecordPublish 发表成长档案
 *
 * 登录页
 * LogonPage 登录页
 * LogonRegisterPage 快速注册
 * LogonForgetPassword 忘记密码
 * LogonRegistrationProtocol 注册协议
 *
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
