import {Dimensions, Platform,} from 'react-native';
import React from "react";

let screenW = Dimensions.get('window').width;
let screenH = Dimensions.get('window').height;


// iPhoneX
const X_WIDTH = 375;
const X_HEIGHT = 812;
const XR_WIDTH = 414;
const XR_HEIGHT = 896;


export default class IfIphoneX extends React.Component {

    /**
     * 根据是否是iPhoneX返回不同的样式
     * @param iphoneXStyle
     * @param iosStyle
     * @param androidStyle
     * @returns {*}
     */
    static ifIphoneX(iphoneXStyle, iosStyle = {}, androidStyle) {
        if (Platform.OS === 'ios' && ((screenH === X_HEIGHT && screenW === X_WIDTH) || (screenH === X_WIDTH && screenW === X_HEIGHT))) {
            return iphoneXStyle;
        } else if (Platform.OS === 'ios' && ((screenH === XR_HEIGHT && screenW === XR_WIDTH) || (screenH === XR_WIDTH && screenW === XR_HEIGHT))) {
            return iphoneXStyle;
        } else if (Platform.OS === 'ios') {
            return iosStyle
        } else {
            if (androidStyle) return androidStyle;
            return iosStyle
        }
    }



}
