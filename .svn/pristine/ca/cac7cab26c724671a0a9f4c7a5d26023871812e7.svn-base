import React, { Component } from 'react'
import {
    View,
    Platform,
    TextInput,
    ScrollView,
    KeyboardAvoidingView, TouchableOpacity, Text, Dimensions, Image
} from 'react-native'

import PublicStyles from "../styles/PublicStyles";
import NavigationUtil from "../navigator/NavigationUtil";




export default class SetUp extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <View style={PublicStyles.container}>
                <ScrollView>

                    <View style={PublicStyles.intervalBar}/>
                    <View style={[PublicStyles.bg_white,PublicStyles.ph15]}>
                        <View style={PublicStyles.ju_between_Direction}>
                            <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.pv8,PublicStyles.listItem,PublicStyles.borderBottom]}>
                                <Text style={PublicStyles.ft16_333}>清除缓存</Text>
                                <View style={[PublicStyles.ju_start_Direction,PublicStyles.al_center]}>
                                    <Image style={[PublicStyles.listMoreBtn,PublicStyles.ml10]} source={require('../../img/more.png')} />
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity style={PublicStyles.ju_between_Direction} onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"AboutUs")}}>
                            <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.pv8,PublicStyles.listItem,PublicStyles.borderBottom]}>
                                <Text style={PublicStyles.ft16_333}>关于我们</Text>
                                <View style={[PublicStyles.ju_start_Direction,PublicStyles.al_center]}>
                                    <Image style={[PublicStyles.listMoreBtn,PublicStyles.ml10]} source={require('../../img/more.png')} />
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={PublicStyles.ju_between_Direction}>
                            <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.pv8,PublicStyles.listItem,PublicStyles.borderBottom]}>
                                <Text style={PublicStyles.ft16_333}>版本更新</Text>
                                <View style={[PublicStyles.ju_start_Direction,PublicStyles.al_center]}>
                                    <Text style={PublicStyles.ft16_333}>1.0.0</Text>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity style={PublicStyles.ju_between_Direction} onPress={() => {NavigationUtil.goPage({navigation: this.props.navigation},"LogonRegistrationProtocol")}}>
                            <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.pv8,PublicStyles.listItem,PublicStyles.borderBottom]}>
                                <Text style={PublicStyles.ft16_333}>用户协议</Text>
                                <View style={[PublicStyles.ju_start_Direction,PublicStyles.al_center]}>
                                    <Image style={[PublicStyles.listMoreBtn,PublicStyles.ml10]} source={require('../../img/more.png')} />
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={PublicStyles.ju_between_Direction}>
                            <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.pv8,PublicStyles.listItem,PublicStyles.borderBottom]}>
                                <Text style={PublicStyles.ft16_333}>推荐给朋友</Text>
                                <View style={[PublicStyles.ju_start_Direction,PublicStyles.al_center]}>
                                    <Image style={[PublicStyles.listMoreBtn,PublicStyles.ml10]} source={require('../../img/more.png')} />
                                </View>
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
        )

    }


}

