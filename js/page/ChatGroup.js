import React, { Component } from 'react'
import {
    View,
    Platform,
    TextInput,
    ScrollView,
    KeyboardAvoidingView, TouchableOpacity, Text, Dimensions, Image, SafeAreaView, Button
} from 'react-native'

import PublicStyles from "../styles/PublicStyles";
import IfIphoneX from "../styles/IfIphoneX";

// 获取屏幕高度
let screenH = Dimensions.get('window').height;


export default class ChatGroup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '', // 1、监听文本框 有文字执行send() 、 没有文字执行more()
            TextInputBottomContToggle: false, // 2、点击"+"弹出 8个功能键
            IphoneXHeight: 122, // 3、设定iPhone X的导航栏+状态栏+Home条高度
            voiceBtnToggle: true, // 7、切换 语音和文字按钮
        }
    }



// style={{height: screenH - IfIphoneX.ifIphoneX(this.state.IphoneXHeight ,64,73)}}

    render() {
        let behavior = Platform.OS === 'ios' ? 'position' : null;

        return (
            <KeyboardAvoidingView  behavior={behavior}>
                <ScrollView>
                    {this.OtherChat()}
                </ScrollView>
                <View style={[PublicStyles.ChatBox,PublicStyles.ju_center,{paddingBottom: IfIphoneX.ifIphoneX(34,0,0)}]}>
                    <View style={[PublicStyles.ju_between_Direction,PublicStyles.al_center,PublicStyles.borderBottom,PublicStyles.ph10,PublicStyles.pv8]}>
                        <TouchableOpacity style={PublicStyles.enjoyBtn} onPress={() => this.voiceBtnToggleFun() }>
                            <Image style={PublicStyles.enjoyBtn} source={this.state.voiceBtnToggle === true?require("../../img/voiceBtn.png"):require("../../img/keyboardBtn.png")}/>
                        </TouchableOpacity>

                        {this.TextInputContFun()}

                        <View>
                            <Image style={PublicStyles.enjoyBtn} source={require('../../img/enjoyBtn.png')} />
                        </View>
                        {this.state.text.length > 0 ? this.send() :  this.more()}
                    </View>
                    {this.TextInputBottomCont()}
                </View>
            </KeyboardAvoidingView>
        )
    }

    // 1、监听文本框 有文字执行send() 、 没有文字执行more()
    more() {
        return(
            <TouchableOpacity style={[PublicStyles.chatSendBox,PublicStyles.ju_center,PublicStyles.al_center]} onPress={() => {this.loseFocus(); this.TextInputBottomFun();} }>
                <Image style={PublicStyles.moreBtn} source={require('../../img/MoreBtn.png')} />
            </TouchableOpacity>
        )
    }
    send() {
        return(
            <View style={[PublicStyles.chatSendBox,PublicStyles.ju_center,PublicStyles.al_center]}>
                <Text style={PublicStyles.ft16_fff}>发送</Text>
            </View>
        )
    }


    // 2、点击"+"弹出 8个功能键
    TextInputBottomCont() {
        if(this.state.TextInputBottomContToggle === true) {
            return(
                <View style={PublicStyles.ph10}>
                    <View style={[PublicStyles.ju_around_Direction,PublicStyles.mv8]}>
                        <View style={PublicStyles.al_center}>
                            <View style={PublicStyles.BottomFunctionItem}>
                                <Image style={PublicStyles.enjoyBtn} source={require('../../img/ChatIcon-1.png')} />
                            </View>
                            <Text style={PublicStyles.ft14_666}>相册</Text>
                        </View>
                        <View style={PublicStyles.al_center}>
                            <View style={PublicStyles.BottomFunctionItem}>
                                <Image style={PublicStyles.enjoyBtn} source={require('../../img/ChatIcon-2.png')} />
                            </View>
                            <Text style={PublicStyles.ft14_666}>拍摄</Text>
                        </View>
                        <View style={PublicStyles.al_center}>
                            <View style={PublicStyles.BottomFunctionItem}>
                                <Image style={PublicStyles.enjoyBtn} source={require('../../img/ChatIcon-3.png')} />
                            </View>
                            <Text style={PublicStyles.ft14_666}>小视频</Text>
                        </View>
                        <View style={PublicStyles.al_center}>
                            <View style={PublicStyles.BottomFunctionItem}>
                                <Image style={PublicStyles.enjoyBtn} source={require('../../img/ChatIcon-4.png')} />
                            </View>
                            <Text style={PublicStyles.ft14_666}>文件共享</Text>
                        </View>
                    </View>
                    <View style={[PublicStyles.ju_around_Direction,PublicStyles.mv8]}>
                        <View style={PublicStyles.al_center}>
                            <View style={PublicStyles.BottomFunctionItem}>
                                <Image style={PublicStyles.enjoyBtn} source={require('../../img/ChatIcon-1.png')} />
                            </View>
                            <Text style={PublicStyles.ft14_666}>家庭作业</Text>
                        </View>
                        <View style={PublicStyles.al_center}>
                            <View style={PublicStyles.BottomFunctionItem}>
                                <Image style={PublicStyles.enjoyBtn} source={require('../../img/ChatIcon-1.png')} />
                            </View>
                            <Text style={PublicStyles.ft14_666}>通知</Text>
                        </View>
                        <View style={PublicStyles.al_center}>
                            <View style={PublicStyles.BottomFunctionItem}>
                                <Image style={PublicStyles.enjoyBtn} source={require('../../img/ChatIcon-1.png')} />
                            </View>
                            <Text style={PublicStyles.ft14_666}>投诉建议</Text>
                        </View>
                        <View style={PublicStyles.al_center}>
                            <View style={PublicStyles.BottomFunctionItem}>
                                <Image style={PublicStyles.enjoyBtn} source={require('../../img/ChatIcon-1.png')} />
                            </View>
                            <Text style={PublicStyles.ft14_666}>缴费</Text>
                        </View>
                    </View>
                </View>
            )
        }
    }

    // 2、点击"+"弹出 8个功能键 取反事件
    TextInputBottomFun() {
        this.setState({
            TextInputBottomContToggle: !this.state.TextInputBottomContToggle,
        })
    }

    // 4、输入框失去焦点事件
    loseFocus() {
        this.refs.input.blur()
    }

    // 5、聊天室，别人发的留言
    OtherChat() {
        return(
            <View style={{marginBottom: 100}}>
                <View style={[PublicStyles.al_center,PublicStyles.mv10]}>
                    <Text style={PublicStyles.ft14_888}>昨天22:28</Text>
                </View>

                <View style={[PublicStyles.ju_start_Direction,PublicStyles.mv10]}>
                    <Image style={PublicStyles.ChatPic} source={require('../../img/userPic.jpg')} />
                    <View>
                        <View style={PublicStyles.ju_start_Direction}>
                            <Text style={PublicStyles.ft16_green}>家长</Text>
                            <Text style={PublicStyles.ft16_666}>ASN、xswl别人</Text>
                        </View>
                        <View style={PublicStyles.ChatCont}>
                            <View style={[PublicStyles.ChatContBar,PublicStyles.ju_start_Direction,PublicStyles.al_center]}>
                                <Text style={PublicStyles.ft16_666}>别人别人别人别人别人内内内内内内内内内内内内内内内内内内内内容。。。</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={[PublicStyles.ju_start_Direction,PublicStyles.mv10]}>
                    <Image style={PublicStyles.ChatPic} source={require('../../img/userPic.jpg')} />
                    <View>
                        <View style={PublicStyles.ju_start_Direction}>
                            <Text style={PublicStyles.ft16_green}>家长</Text>
                            <Text style={PublicStyles.ft16_666}>ASN、xswl别人</Text>
                        </View>
                        <View style={PublicStyles.ChatCont}>
                            <View style={[PublicStyles.ChatContBar,PublicStyles.ju_start_Direction,PublicStyles.al_center]}>
                                <Text style={PublicStyles.ft16_666}>别人内容。。。</Text>
                            </View>
                        </View>
                    </View>
                </View>



                <View style={[PublicStyles.ju_end_Direction,PublicStyles.mv10]}>
                    <View>
                        <View style={PublicStyles.ju_end_Direction}>
                            <Text style={PublicStyles.ft16_green}>家长</Text>
                            <Text style={PublicStyles.ft16_666}>ASN、xswl别人</Text>
                        </View>
                        <View style={[PublicStyles.ChatCont,PublicStyles.ju_end_Direction]}>
                            <View style={[PublicStyles.ChatContBar,PublicStyles.bg_green,PublicStyles.ju_start_Direction,PublicStyles.al_center]}>
                                <Text style={PublicStyles.ft16_fff}>别人别人别人别人别人内内内内内内内内内内内内内内内内内内内内容。。。</Text>
                            </View>
                        </View>
                    </View>
                    <Image style={PublicStyles.ChatPic} source={require('../../img/userPic.jpg')} />
                </View>
                <View style={[PublicStyles.ju_end_Direction,PublicStyles.mv10]}>
                    <View>
                        <View style={PublicStyles.ju_end_Direction}>
                            <Text style={PublicStyles.ft16_green}>家长</Text>
                            <Text style={PublicStyles.ft16_666}>ASN、xswl别人</Text>
                        </View>
                        <View style={[PublicStyles.ChatCont,PublicStyles.ju_end_Direction]}>
                            <View style={[PublicStyles.ChatContBar,PublicStyles.bg_green,PublicStyles.ju_start_Direction,PublicStyles.al_center]}>
                                <Text style={PublicStyles.ft16_fff}>别人内容。。。</Text>
                            </View>
                        </View>
                    </View>
                    <Image style={PublicStyles.ChatPic} source={require('../../img/userPic.jpg')} />
                </View>

                <View style={[PublicStyles.ju_start_Direction,PublicStyles.mv10]}>
                    <Image style={PublicStyles.ChatPic} source={require('../../img/userPic.jpg')} />
                    <View>
                        <View style={PublicStyles.ju_start_Direction}>
                            <Text style={PublicStyles.ft16_green}>家长</Text>
                            <Text style={PublicStyles.ft16_666}>ASN、xswl别人</Text>
                        </View>
                        <View style={PublicStyles.mt10}>
                            <Image style={PublicStyles.chatSendPic} source={require('../../img/userPic.jpg')} />
                        </View>
                    </View>
                </View>

                <View style={[PublicStyles.ju_start_Direction,PublicStyles.mv10]}>
                    <Image style={PublicStyles.ChatPic} source={require('../../img/userPic.jpg')} />
                    <View>
                        <View style={PublicStyles.ju_start_Direction}>
                            <Text style={PublicStyles.ft16_green}>家长</Text>
                            <Text style={PublicStyles.ft16_666}>ASN、xswl别人</Text>
                        </View>
                        <View style={PublicStyles.ChatCont}>
                            <View style={[PublicStyles.ChatContBar,PublicStyles.ju_start_Direction,PublicStyles.al_center]}>
                                <Image style={PublicStyles.VoiceChat} source={require('../../img/VoiceChat.png')} />
                                <View style={[PublicStyles.ju_start_Direction,PublicStyles.ph6]}>
                                    <Text style={PublicStyles.ft14_green}>2"</Text>
                                    <View style={PublicStyles.VoiceChatDidNotAnswer}/>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>


                <View style={[PublicStyles.ju_end_Direction,PublicStyles.mv10]}>
                    <View>
                        <View style={PublicStyles.ju_end_Direction}>
                            <Text style={PublicStyles.ft16_green}>家长</Text>
                            <Text style={PublicStyles.ft16_666}>ASN、xswl别人</Text>
                        </View>
                        <View style={[PublicStyles.ChatCont,PublicStyles.ju_end_Direction]}>
                            <View style={[PublicStyles.ChatContBar,PublicStyles.bg_green,PublicStyles.ju_start_Direction,PublicStyles.al_center]}>
                                <Image style={PublicStyles.VoiceChat} source={require('../../img/VoiceChatWhite.png')} />
                                <View style={[PublicStyles.ju_start_Direction,PublicStyles.ph6]}>
                                    <Text style={PublicStyles.ft14_fff}>2"</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <Image style={PublicStyles.ChatPic} source={require('../../img/userPic.jpg')} />
                </View>
                <View style={[PublicStyles.ju_end_Direction,PublicStyles.mv10]}>
                    <View>
                        <View style={PublicStyles.ju_end_Direction}>
                            <Text style={PublicStyles.ft16_green}>家长</Text>
                            <Text style={PublicStyles.ft16_666}>ASN、xswl别人</Text>
                        </View>
                        <View style={[PublicStyles.ChatCont,PublicStyles.ju_end_Direction,PublicStyles.mt10]}>
                            <Image style={PublicStyles.chatSendPic} source={require('../../img/userPic.jpg')} />
                        </View>
                    </View>
                    <Image style={PublicStyles.ChatPic} source={require('../../img/userPic.jpg')} />
                </View>
            </View>
        )
    }

    // 6、聊天室，自己发的留言
    MyChat() {

    }

    // 7、切换 语音和文字按钮 取反
    voiceBtnToggleFun() {
        this.setState({
            voiceBtnToggle: !this.state.voiceBtnToggle,
        })
    }

    // 7、切换 语音和文字按钮
    TextInputContFun() {

        if(this.state.voiceBtnToggle === true) {
            return(
                <TextInput
                    ref="input"
                    style={PublicStyles.ChatInput}
                    placeholderTextColor='#999999'
                    placeholder={'你又想说啥子！'}
                    underlineColorAndroid="transparent"
                    onFocus={() => this.setState({TextInputBottomContToggle: false})}  // 获取焦点时执行
                    onChangeText={(text) => this.setState({text})} // 文本框内容改变执行
                    value={this.state.text}
                />
            )
        }else {
            return(
                <View>
                    <TextInput
                        ref="input"
                        style={PublicStyles.ChatInput2}
                        placeholderTextColor='#999999'
                        placeholder={'你又想说啥子！'}
                        underlineColorAndroid="transparent"
                        onFocus={() => this.setState({TextInputBottomContToggle: false})}  // 获取焦点时执行
                        onChangeText={(text) => this.setState({text})} // 文本框内容改变执行
                        value={this.state.text}
                    />
                    <View style={[PublicStyles.ChatInput,PublicStyles.ju_center,PublicStyles.al_center]}>
                        <Text style={PublicStyles.ft16_333}>按住说话</Text>
                    </View>
                </View>
            )
        }
    }



}

