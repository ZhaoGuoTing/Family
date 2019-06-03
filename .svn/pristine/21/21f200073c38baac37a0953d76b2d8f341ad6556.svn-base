/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
// 1、引入我们需要的导航器
import {createMaterialTopTabNavigator} from "react-navigation";
// 公共样式
import PublicStyles from '../styles/PublicStyles';
import NavigationUtil from "../navigator/NavigationUtil";




export default class ClassNurseryDetails extends Component {
    render() {
        const TabNavigator = createMaterialTopTabNavigator({
            SchoolSceneryTab1: {
                screen: SchoolSceneryTab,
                navigationOptions: {
                    title: '全年班',
                },
            },
            SchoolSceneryTab2: {
                screen: SchoolSceneryTab,
                navigationOptions: {
                    title: '半年班',
                }
            },
            SchoolSceneryTab3: {
                screen: SchoolSceneryTab,
                navigationOptions: {
                    title: '短期班',
                }
            }
        },{
            tabBarOptions: {
                activeTintColor: '#33D9B5',
                inactiveTintColor: '#333333',
                style: {
                    backgroundColor: '#fff',
                },
                indicatorStyle: {
                    height: 1,
                    backgroundColor: '#33D9B5',
                },
                labelStyle: {
                    fontSize: 16,
                },
            }
        });
        return <TabNavigator/>
    }
}

class SchoolSceneryTab extends Component {
    render() {
        // const {tabLabel} = this.props;
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={PublicStyles.ph15}>
                        <View style={[PublicStyles.courseIntroWrap,PublicStyles.mt15]}>
                            <View style={[PublicStyles.courseIntroTitle,PublicStyles.bg_green,PublicStyles.al_center,PublicStyles.ju_center]}>
                                <Text style={PublicStyles.ft16_fff}>课程简介</Text>
                            </View>
                            <View style={[PublicStyles.bg_white,PublicStyles.pv6,PublicStyles.ph10]}>
                                <View style={PublicStyles.ju_start_Direction}>
                                    <View style={[PublicStyles.ClassTabIcon,PublicStyles.ju_center,PublicStyles.al_center]}>
                                        <Text style={PublicStyles.ft16_fff}>语文</Text>
                                    </View>
                                </View>
                                <Text style={PublicStyles.ft14_333}>
                                    学习23个声母、24个韵母、16个整体认读音节的认读和书写，能拼读拼写由声母和韵母组成的拼读音节。
                                    掌握1000个左右的生字认读。通过部首识字法、主题识字法借助字理和构字规律等识字方法，帮助学生快速、科学的识字。
                                    通过丰富的绘本故事，培养学生的逻辑能力和语言表达能力，掌握词汇、和句型的应用，为小学生的写作储备词语量。
                                    学习常见笔划和80左右的汉字书写，掌握生字书写规律，培养学生良好的握笔姿势和坐姿.
                                </Text>
                            </View>
                            <View style={[PublicStyles.bg_white,PublicStyles.pv6,PublicStyles.ph10]}>
                                <View style={PublicStyles.ju_start_Direction}>
                                    <View style={[PublicStyles.ClassTabIcon,PublicStyles.ju_center,PublicStyles.al_center]}>
                                        <Text style={PublicStyles.ft16_fff}>艺术综合</Text>
                                    </View>
                                </View>
                                <Text style={PublicStyles.ft14_333}>
                                    掌握跳绳、拍球的技巧，能够连续跳绳100个左右，连续拍球100个左右，根据学龄前儿童体能特点，制定每月的体能目标，更大化的激发学生的体能。
                                </Text>
                            </View>
                        </View>
                        <View style={[PublicStyles.SuitsTheCrowd,PublicStyles.mt15,PublicStyles.ju_center]}>
                            <Text style={[PublicStyles.ft14_fff,PublicStyles.ml10]} numberOfLines={1}>
                                招生对象：
                                5-7岁学龄前儿童，次年9月份升入小学的学员
                            </Text>
                        </View>
                        <View style={[PublicStyles.LearningEffectWrap,PublicStyles.mt15]}>
                            <View style={[PublicStyles.LearningEffect,PublicStyles.al_center,PublicStyles.ju_center]}>
                                <Text style={PublicStyles.ft16_fff}>课程特色</Text>
                            </View>
                            <View style={[PublicStyles.bg_white,PublicStyles.pv6,PublicStyles.ph10]}>
                                <Text style={PublicStyles.ft14_333}>
                                    1、全学科教学，课程涉及五大领域，涵盖语、数、英等课程的	全面学习和发展。
                                    2、针对3-7岁儿童身心发展特点，研发一系列教育课程体系。
                                    3、运用渗透式教学法，让孩子在玩中学，在教学过程中，对学生的知识和能力双向培养。
                                    4、循序渐进的完成幼升小的无缝衔接。
                                </Text>
                            </View>
                        </View>
                        <TouchableOpacity style={[PublicStyles.courseIntroTitle,PublicStyles.bg_green,PublicStyles.al_center,PublicStyles.ju_center,PublicStyles.mt15,PublicStyles.borderRadius,PublicStyles.mb60]} onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"ApplyParenting")}} >
                            <Text style={PublicStyles.ft16_fff}>我要报名</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
