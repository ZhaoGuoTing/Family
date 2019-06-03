/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
// 全局导航 跳转工具类
import NavigationUtil from '../navigator/NavigationUtil';
// 公共样式
import PublicStyles from '../styles/PublicStyles';
import Swiper from "react-native-swiper";



export default class ClassParentingDetails extends Component {
    render() {
        return (
            <View style={PublicStyles.container}>
                <ScrollView>
                    <View style={PublicStyles.banner}>
                        <Image style={PublicStyles.banner} source={require('../../img/ClassBanner-1.png')} />
                    </View>
                    <View style={PublicStyles.ph15}>
                        <View style={[PublicStyles.courseIntroWrap,PublicStyles.mt15]}>
                            <View style={[PublicStyles.courseIntroTitle,PublicStyles.bg_green,PublicStyles.al_center,PublicStyles.ju_center]}>
                                <Text style={PublicStyles.ft16_fff}>课程简介</Text>
                            </View>
                            <View style={[PublicStyles.bg_white,PublicStyles.pv6,PublicStyles.ph10]}>
                                <Text style={PublicStyles.ft14_333}>
                                    0-3岁作为生命中发展的关键时期，幼儿的各项技能，如语言、动作、音乐智能等都是发展最快，最容易受影响的，如果在这个时期施加正确的教育可收到事半功倍的效果，一旦错过这个时期，就需要花费几倍的努力才能弥补，或者将永远无法弥补。
                                    红苹果幼儿园的亲子班（Mommy & Me 亲子课）专为1.5岁—3岁幼儿研发，致力于发展孩子的语言与社交能力、体能与感觉统合能力、良好的独立生活能力、对不同环境的适应能力。围绕着这些教育目标，红苹果专业的教学团队编写了适合入园前孩子的特色亲子课程：
                                    我们的课程内容包括：音乐热身与欢迎（10分钟）→蒙氏工作时间（20-25分钟）→游戏时间/户外互动时间（10分钟）→家园互动沟通（10-15分钟）
                                    其中蒙氏工作时间是红苹果亲子课的特色所在，课程把 “生活“、”社交“、”感官“、“语言”、 “美术” 五大领域的教育目标分配到每一天的蒙氏工作时间中实施，让孩子通过多样的蒙氏工作得到全面的发展。
                                    将奥尔夫音乐亲子律动同蒙特梭利学习方法相结合，让你与宝宝在亦静亦动之间充分互动；
                                    让宝宝在您的陪伴和支持下，自然地融入到舒适的学习环境之中；
                                    让宝宝与家长共享快乐的同时，使宝宝的大运动和精细动作得到发展，增强宝宝的手、眼协调能力，培养宝宝的专注力，生活自理能力，增强宝宝的身体控制力，学会帮助别人，照顾环境，培养责任感，形成良好的社会交往行为；
                                    给予孩子足够的尊重和自由，宝宝将会更好地懂得尊重自我，更加自信；
                                    提前进入宝宝与集体生活的连接，减轻日后入园的分离焦虑；
                                    在这个舒适的环境里，您和宝宝将学习到一些适合在家里进行的律动和歌曲。
                                </Text>
                            </View>
                        </View>
                        <View style={[PublicStyles.SuitsTheCrowd,PublicStyles.mt15,PublicStyles.ju_center]}>
                            <Text style={[PublicStyles.ft14_fff,PublicStyles.ml10]}>适合人群：1岁—3岁</Text>
                        </View>
                        <View style={[PublicStyles.SuitsTheCrowd,PublicStyles.mt15,PublicStyles.ju_center]}>
                            <Text style={[PublicStyles.ft14_fff,PublicStyles.ml10]}>上课时间：每周六（ 9：30—11：00 ）</Text>
                        </View>
                        <View style={[PublicStyles.SuitsTheCrowd,PublicStyles.mt15,PublicStyles.ju_center]}>
                            <Text style={[PublicStyles.ft14_fff,PublicStyles.ml10]}>学时：每期两个月    共8次</Text>
                        </View>
                        <View style={[PublicStyles.LearningEffectWrap,PublicStyles.mt15]}>
                            <View style={[PublicStyles.LearningEffect,PublicStyles.al_center,PublicStyles.ju_center]}>
                                <Text style={PublicStyles.ft16_fff}>课程特色</Text>
                            </View>
                            <View style={[PublicStyles.bg_white,PublicStyles.pv6,PublicStyles.ph10]}>
                                <Text style={PublicStyles.ft14_333}>
                                    1、帮助缓解孩子入园前的焦虑，释放他们的更大潜能；
                                    2、特色的混龄教学。混龄教学让不同年龄阶段的孩子一起活动，有效地促进他们的相互模仿与学习，扩展他们的兴趣，促进其语言与社会性的发展
                                    3、特色蒙氏工作环境。精心布置的蒙氏工作环境让孩子在自主选择与探索玩具、材料的过程中发现事物的内在规律，自主地建构完善的人格。
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
