/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';

// 公共样式
import PublicStyles from '../styles/PublicStyles';



export default class WeekFood extends Component {

    constructor(props) {
        super(props);
        this.state = {
            foodMenuToggle: 'Mon',    //  2、菜单列表选项卡、默认"周一"

        }
    }

    render() {
        return (
            <View style={PublicStyles.container}>
                <ScrollView>
                    <View style={[PublicStyles.ph15,PublicStyles.mt10]}>
                        <Text style={PublicStyles.ft16_333}>今日食谱</Text>
                    </View>
                    <View style={[PublicStyles.pv12]}>
                        <ScrollView style={[PublicStyles.flexDirection,PublicStyles.ph15]} horizontal={true}>
                            <Image style={PublicStyles.WeekFoodPhoto} source={require('../../img/FoodPhoto-1.jpeg')} />
                            <Image style={PublicStyles.WeekFoodPhoto} source={require('../../img/FoodPhoto-2.jpeg')} />
                            <Image style={PublicStyles.WeekFoodPhoto} source={require('../../img/FoodPhoto-3.jpeg')} />
                            <Image style={PublicStyles.WeekFoodPhoto} source={require('../../img/FoodPhoto-4.jpeg')} />
                        </ScrollView>
                    </View>
                    <View style={PublicStyles.intervalBar}/>
                    <View style={PublicStyles.bg_white}>
                        <TouchableOpacity style={[PublicStyles.pv12,PublicStyles.ju_between_Direction,PublicStyles.ph15,PublicStyles.borderTop,this.state.foodMenuToggle==='Mon'?PublicStyles.bg_aqua:'']} onPress={()=>this.setState({foodMenuToggle: 'Mon'})}>
                            <Text style={PublicStyles.ft14_green}>周一</Text>
                            <Text style={PublicStyles.ft14_green}>2017-09-01</Text>
                        </TouchableOpacity>
                        {this.foodMenuMonCont()}
                        <TouchableOpacity style={[PublicStyles.pv12,PublicStyles.ju_between_Direction,PublicStyles.ph15,PublicStyles.borderTop,this.state.foodMenuToggle==='Tues'?PublicStyles.bg_aqua:'']} onPress={()=>this.setState({foodMenuToggle: 'Tues'})}>
                            <Text style={PublicStyles.ft14_green}>周二</Text>
                            <Text style={PublicStyles.ft14_green}>2017-09-02</Text>
                        </TouchableOpacity>
                        {this.foodMenuTuesCont()}
                        <TouchableOpacity style={[PublicStyles.pv12,PublicStyles.ju_between_Direction,PublicStyles.ph15,PublicStyles.borderTop,this.state.foodMenuToggle==='Wed'?PublicStyles.bg_aqua:'']} onPress={()=>this.setState({foodMenuToggle: 'Wed'})}>
                            <Text style={PublicStyles.ft14_green}>周三</Text>
                            <Text style={PublicStyles.ft14_green}>2017-09-03</Text>
                        </TouchableOpacity>
                        {this.foodMenuWedCont()}
                        <TouchableOpacity style={[PublicStyles.pv12,PublicStyles.ju_between_Direction,PublicStyles.ph15,PublicStyles.borderTop,this.state.foodMenuToggle==='Thur'?PublicStyles.bg_aqua:'']} onPress={()=>this.setState({foodMenuToggle: 'Thur'})}>
                            <Text style={PublicStyles.ft14_green}>周四</Text>
                            <Text style={PublicStyles.ft14_green}>2017-09-04</Text>
                        </TouchableOpacity>
                        {this.foodMenuThurCont()}
                        <TouchableOpacity style={[PublicStyles.pv12,PublicStyles.ju_between_Direction,PublicStyles.ph15,PublicStyles.borderTop,this.state.foodMenuToggle==='Fri'?PublicStyles.bg_aqua:'']} onPress={()=>this.setState({foodMenuToggle: 'Fri'})}>
                            <Text style={PublicStyles.ft14_green}>周五</Text>
                            <Text style={PublicStyles.ft14_green}>2017-09-05</Text>
                        </TouchableOpacity>
                        {this.foodMenuFriCont()}
                    </View>
                </ScrollView>
            </View>
        );
    }


    //  2、菜单列表选项卡、默认"周一"
    foodMenuMonCont(){
        if(this.state.foodMenuToggle ==='Mon') {
            return(
                <View style={PublicStyles.bg_white}>
                    <View style={[PublicStyles.ju_between_Direction,PublicStyles.ph15]}>
                        <View style={[PublicStyles.WeekFoodListPic,PublicStyles.mh10]}>
                            <View style={PublicStyles.WeekFoodListLine}/>
                            <Image style={PublicStyles.WeekFoodListIcon} source={require('../../img/foodmenu-1.png')} />
                        </View>
                        <View style={[PublicStyles.WeekFoodListCont,PublicStyles.ju_center]}>
                            <Text style={[PublicStyles.ft16_333,PublicStyles.mt10]}>早餐</Text>
                            <Text style={[PublicStyles.ft14_888,PublicStyles.mt2]} numberOfLines={1}>牛奶、鸡蛋、蛋糕</Text>
                        </View>
                    </View>
                    <View style={[PublicStyles.ju_between_Direction,PublicStyles.ph15]}>
                        <View style={[PublicStyles.WeekFoodListPic,PublicStyles.mh10]}>
                            <View style={PublicStyles.WeekFoodListLine}/>
                            <Image style={PublicStyles.WeekFoodListIcon} source={require('../../img/foodmenu-2.png')} />
                        </View>
                        <View style={[PublicStyles.WeekFoodListCont,PublicStyles.ju_center]}>
                            <Text style={[PublicStyles.ft16_333,PublicStyles.mt10]}>上午加餐</Text>
                            <Text style={[PublicStyles.ft14_888,PublicStyles.mt2]} numberOfLines={1}>小面包、绿豆汤、苹果</Text>
                        </View>
                    </View>
                    <View style={[PublicStyles.ju_between_Direction,PublicStyles.ph15]}>
                        <View style={[PublicStyles.WeekFoodListPic,PublicStyles.mh10]}>
                            <View style={PublicStyles.WeekFoodListLine}/>
                            <Image style={PublicStyles.WeekFoodListIcon} source={require('../../img/foodmenu-3.png')} />
                        </View>
                        <View style={[PublicStyles.WeekFoodListCont,PublicStyles.ju_center]}>
                            <Text style={[PublicStyles.ft16_333,PublicStyles.mt10]}>午餐</Text>
                            <Text style={[PublicStyles.ft14_888,PublicStyles.mt2]} numberOfLines={1}>鱼香肉丝、西红柿鸡蛋、土豆丝、紫菜汤、米饭</Text>
                        </View>
                    </View>
                    <View style={[PublicStyles.ju_between_Direction,PublicStyles.ph15]}>
                        <View style={[PublicStyles.WeekFoodListPic,PublicStyles.mh10]}>
                            <View style={PublicStyles.WeekFoodListLine}/>
                            <Image style={PublicStyles.WeekFoodListIcon} source={require('../../img/foodmenu-4.png')} />
                        </View>
                        <View style={[PublicStyles.WeekFoodListCont,PublicStyles.ju_center]}>
                            <Text style={[PublicStyles.ft16_333,PublicStyles.mt10]}>下午加餐</Text>
                            <Text style={[PublicStyles.ft14_888,PublicStyles.mt2]} numberOfLines={1}>酸奶、香蕉、火龙果</Text>
                        </View>
                    </View>
                    <View style={[PublicStyles.ju_between_Direction,PublicStyles.ph15]}>
                        <View style={[PublicStyles.WeekFoodListPic,PublicStyles.mh10]}>
                            <View style={PublicStyles.WeekFoodListLine}/>
                            <Image style={PublicStyles.WeekFoodListIcon} source={require('../../img/foodmenu-5.png')} />
                        </View>
                        <View style={[PublicStyles.WeekFoodListCont,PublicStyles.ju_center]}>
                            <Text style={[PublicStyles.ft16_333,PublicStyles.mt10]}>晚餐</Text>
                            <Text style={[PublicStyles.ft14_888,PublicStyles.mt2]} numberOfLines={1}>回家吃去吧</Text>
                        </View>
                    </View>
                </View>
            )
        }
    }

    //  2、菜单列表选项卡、默认"周二"
    foodMenuTuesCont(){
        if(this.state.foodMenuToggle ==='Tues') {
            return(
                <View style={PublicStyles.bg_white}>
                    <View style={[PublicStyles.ju_between_Direction,PublicStyles.ph15]}>
                        <View style={[PublicStyles.WeekFoodListPic,PublicStyles.mh10]}>
                            <View style={PublicStyles.WeekFoodListLine}/>
                            <Image style={PublicStyles.WeekFoodListIcon} source={require('../../img/foodmenu-1.png')} />
                        </View>
                        <View style={[PublicStyles.WeekFoodListCont,PublicStyles.ju_center]}>
                            <Text style={[PublicStyles.ft16_333,PublicStyles.mt10]}>早餐</Text>
                            <Text style={[PublicStyles.ft14_888,PublicStyles.mt2]} numberOfLines={1}>牛奶、鸡蛋、蛋糕</Text>
                        </View>
                    </View>
                </View>
            )
        }
    }
    //  2、菜单列表选项卡、默认"周三"
    foodMenuWedCont(){
        if(this.state.foodMenuToggle ==='Wed') {
            return(
                <View style={PublicStyles.bg_white}>
                    <View style={[PublicStyles.ju_between_Direction,PublicStyles.ph15]}>
                        <View style={[PublicStyles.WeekFoodListPic,PublicStyles.mh10]}>
                            <View style={PublicStyles.WeekFoodListLine}/>
                            <Image style={PublicStyles.WeekFoodListIcon} source={require('../../img/foodmenu-2.png')} />
                        </View>
                        <View style={[PublicStyles.WeekFoodListCont,PublicStyles.ju_center]}>
                            <Text style={[PublicStyles.ft16_333,PublicStyles.mt10]}>上午加餐</Text>
                            <Text style={[PublicStyles.ft14_888,PublicStyles.mt2]} numberOfLines={1}>小面包、绿豆汤、苹果</Text>
                        </View>
                    </View>
                </View>
            )
        }
    }
    //  2、菜单列表选项卡、默认"周四"
    foodMenuThurCont(){
        if(this.state.foodMenuToggle ==='Thur') {
            return(
                <View style={PublicStyles.bg_white}>
                    <View style={[PublicStyles.ju_between_Direction,PublicStyles.ph15]}>
                        <View style={[PublicStyles.WeekFoodListPic,PublicStyles.mh10]}>
                            <View style={PublicStyles.WeekFoodListLine}/>
                            <Image style={PublicStyles.WeekFoodListIcon} source={require('../../img/foodmenu-3.png')} />
                        </View>
                        <View style={[PublicStyles.WeekFoodListCont,PublicStyles.ju_center]}>
                            <Text style={[PublicStyles.ft16_333,PublicStyles.mt10]}>午餐</Text>
                            <Text style={[PublicStyles.ft14_888,PublicStyles.mt2]} numberOfLines={1}>鱼香肉丝、西红柿鸡蛋、土豆丝、紫菜汤、米饭</Text>
                        </View>
                    </View>
                </View>
            )
        }
    }
    //  2、菜单列表选项卡、默认"周五"
    foodMenuFriCont(){
        if(this.state.foodMenuToggle ==='Fri') {
            return(
                <View style={PublicStyles.bg_white}>
                    <View style={[PublicStyles.ju_between_Direction,PublicStyles.ph15]}>
                        <View style={[PublicStyles.WeekFoodListPic,PublicStyles.mh10]}>
                            <View style={PublicStyles.WeekFoodListLine}/>
                            <Image style={PublicStyles.WeekFoodListIcon} source={require('../../img/foodmenu-1.png')} />
                        </View>
                        <View style={[PublicStyles.WeekFoodListCont,PublicStyles.ju_center]}>
                            <Text style={[PublicStyles.ft16_333,PublicStyles.mt10]}>早餐</Text>
                            <Text style={[PublicStyles.ft14_888,PublicStyles.mt2]} numberOfLines={1}>牛奶、鸡蛋、蛋糕</Text>
                        </View>
                    </View>
                </View>
            )
        }
    }




}



