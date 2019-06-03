/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { StyleSheet, Dimensions, Platform } from "react-native";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

//  班级聊天群 判断 ScrollView 高度
// iPhoneX、XS
const X_WIDTH = 375;
const X_HEIGHT = 812;
// iPhoneXR、iPhoneX Max
const XR_WIDTH = 414;
const XR_HEIGHT = 896;

export function isIphoneX() {
    return (
        Platform.OS === 'ios' &&
        (
            (screenHeight === X_HEIGHT && screenWidth === X_WIDTH) ||
            (screenHeight === X_WIDTH && screenWidth === X_HEIGHT) ||
            (screenHeight === XR_HEIGHT && screenWidth === XR_WIDTH) ||
            (screenHeight === XR_WIDTH && screenWidth === XR_HEIGHT)
        )
    )
}



export default StyleSheet.create({
    /**
     *  =============================================  公共样式 Start  =========================================
     */
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    listItem: {
        height: 64,
        width: screenWidth - 30,
    },
    listPic: {
        width: 48,
        height: 48,
    },
    listTitle: {
        height: 48 + 16,
    },
    listTitleName: {
        width: 72,
    },
    listCon: {
        width: screenWidth - 86,
    },
    listMoreBtn: {
        width: 16,
        height: 16,
    },
    /* ==================
        导航栏有按钮
    ==================== */
    tabBarRight: {
        width: 44,
        height: 44,
    },
    tabBarRightIcon: {
        width: 24,
        height: 24,
    },
    /* ==================
        距离、间隔块
    ==================== */

    intervalBar: {
        width: screenWidth,
        height: 10,
        backgroundColor: '#F5FCFF',
    },
    intervalBarWhite: {
        width: screenWidth,
        height: 10,
        backgroundColor: '#FFFFFF',
    },
    borderTop: {
        borderTopWidth: 1,
        borderTopColor: '#DDD',
    },
    borderBottom: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#DDD',
    },
    borderRadius: {
        borderRadius: 4,
    },
    mv20: {
        marginVertical: 20,
    },
    mv16: {
        marginVertical: 16,
    },
    mv10: {
        marginVertical: 10,
    },
    mv8: {
        marginVertical: 8,
    },
    mv5: {
        marginVertical: 5,
    },
    mh10: {
        marginHorizontal: 10,
    },
    mh4: {
        marginHorizontal: 4,
    },
    mt24: {
        marginTop: 24,
    },
    mt15: {
        marginTop: 15,
    },
    mt10: {
        marginTop: 10,
    },
    mt6: {
        marginTop: 6,
    },
    mt4: {
        marginTop: 4,
    },
    mt2: {
        marginTop: 2,
    },
    mb10: {
        marginBottom: 10,
    },
    mb30: {
        marginBottom: 30,
    },
    mb60: {
        marginBottom: 60,
    },
    mb80: {
        marginBottom: 80,
    },
    mb6: {
        marginBottom: 6,
    },
    mb4: {
        marginBottom: 4,
    },
    ml20: {
        marginLeft: 20,
    },
    ml10: {
        marginLeft: 10,
    },
    ml6: {
        marginLeft: 6,
    },
    mr20: {
        marginRight: 20,
    },
    mr10: {
        marginRight: 10,
    },
    mb34: {
        marginBottom: 34,
    },
    ph15: {
        paddingHorizontal: 15,
    },
    ph10: {
        paddingHorizontal: 10,
    },
    ph6: {
        paddingHorizontal: 6,
    },
    pv50: {
        paddingVertical: 50,
    },
    pv20: {
        paddingVertical: 20,
    },
    pv12: {
        paddingVertical: 12,
    },
    pv8: {
        paddingVertical: 8,
    },
    pv6: {
        paddingVertical: 6,
    },
    pt12: {
        paddingTop: 12,
    },
    pb30: {
        paddingBottom: 30,
    },

    /**
     * Flex 布局
     * flexDirection:row  水平排列（左 -> 右）
     * flexWrap:wrap  自动换行
     */
    flexDirection: {
        flexDirection: 'row',
    },
    flexWrap: {
        flexWrap: 'wrap',
    },
    ju_start_Direction: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    ju_end_Direction: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
    ju_around_Direction: {
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    ju_between_Direction: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },

    // 横
    ju_center: {
        justifyContent: 'center',
    },
    ju_end: {
        justifyContent: 'flex-end',
    },
    // 竖
    al_center: {
        alignItems: 'center',
    },
    /**
     *  背景颜色
     */
    bg_white: {
        backgroundColor: '#ffffff',
    },
    bg_green: {
        backgroundColor: '#33D9B5',
    },
    bg_orange: {
        backgroundColor: '#FF6666',
    },
    bg_aqua: {
        backgroundColor: '#e7f9f5',
    },
    bg_gray: {
        backgroundColor: '#EEEEEE',
    },
    /**
     *  字体
     */
    ft32_fff: {
        color: '#fff',
        fontSize: 32,
        lineHeight: 36,
        fontWeight: '600',
    },
    ft20_333: {
        color: '#333',
        fontSize: 20,
        lineHeight: 26,
        fontWeight: '600',
    },
    ft16_333: {
        color: '#333',
        fontSize: 16,
        lineHeight: 22,
        fontWeight: '500',
    },
    ft16_red: {
        color: '#ff3333',
        fontSize: 16,
        lineHeight: 22,
        fontWeight: '500',
    },
    ft16_666: {
        color: '#666',
        fontSize: 16,
        lineHeight: 22,
        fontWeight: '500',
    },
    ft16_888: {
        color: '#888',
        fontSize: 16,
        lineHeight: 22,
        fontWeight: '500',
    },
    ft16_bbb: {
        color: '#bbb',
        fontSize: 16,
        lineHeight: 22,
        fontWeight: '500',
    },
    ft16_fff: {
        color: '#fff',
        fontSize: 16,
        lineHeight: 22,
        fontWeight: '500',
    },
    ft16_green: {
        color: '#13C09A',
        fontSize: 16,
        lineHeight: 22,
        fontWeight: '500',
    },
    ft14_green: {
        color: '#13C09A',
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '400',
    },
    ft14_orange: {
        color: '#EE5826',
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '400',
    },
    ft14_333: {
        color: '#333',
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '500',
    },
    ft14_666: {
        color: '#666',
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '500',
    },
    ft14_888: {
        color: '#888',
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '400',
    },
    ft14_bbb: {
        color: '#bbb',
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '400',
    },
    ft14_fff: {
        color: '#fff',
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '400',
    },

    /**
     *  =============================================  公共样式 End  =========================================
     */

    /**
     *  =============================================  各个页面样式 Start  =========================================
     */

    /* ==================
            首页
     ==================== */
    pageIcon: {
        width: 56,
        height: 56,
    },
    banner: {
        width: screenWidth,
        height: screenWidth*0.44,
    },
    /* ==================
            消息提示
    ==================== */
    badges: {
        width: 16,
        height: 16,
        position: 'absolute',
        right: 0,
        top: 0,
        backgroundColor: 'red',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    /* ==================
            一周食谱
     ==================== */
    WeekFoodListPic: {
        width: 32,
        height: 60,
        position: 'relative',
        paddingHorizontal: 15.5,
    },
    WeekFoodListLine: {
        width: 1,
        height: 60,
        backgroundColor: '#bbb',
    },
    WeekFoodListIcon: {
        width: 32,
        height: 32,
        position: 'absolute',
        top: 14,
    },
    WeekFoodListCont: {
        width: screenWidth - 75,
    },
    WeekFoodPhoto: {
        width: 150,
        height: 150,
        marginRight: 10,
        borderRadius: 8,
    },
    /* ==================
           课程列表
    ==================== */
    weekTableTitle: {
        width: 70,
    },
    weekTable: {
        width: 70,
        borderWidth: 0.5,
        borderColor: '#ddd',
    },
    courseTableTitle: {
        width: (screenWidth - 70) / 2,
    },
    courseTable: {
        width: (screenWidth - 70) / 2,
        borderWidth: 0.5,
        borderColor: '#ddd',
        padding: 5,
    },
    parentTable: {
        width: screenWidth,
        borderWidth: 0.5,
        borderColor: '#ddd',
    },
    hintText: {
        paddingHorizontal: 50,
        paddingVertical: 20,

    },
    /* ==================
       园区通知、班级公告、家庭作业
    ==================== */
    noticeBox: {
        borderWidth: 0.5,
        borderColor: '#ddd',
        borderRadius: 4,
        padding: 15,
        margin: 10,
    },
    noticeSendInfo: {
        width: screenWidth,
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0,
    },
    noticeSendInput: {
        width: screenWidth - 30,
        height: 90,
        backgroundColor: '#f0f4f7',
        borderRadius: 4,
        paddingVertical: 8,
        paddingHorizontal: 10,
        textAlignVertical: 'top'
    },
    noticePhotos: {
        width: 72,
        height: 72,
        borderRadius: 4,
        marginBottom: 10,
    },
    noticeCommentPhotos: {
        width: 94,
        height: 94,
        borderRadius: 4,
        marginBottom: 10,
    },
    noticePhotoIcon: {
        width: 24,
        height: 24,
    },
    noticeSendBtn: {
        width: 72,
        height: 32,
        borderRadius: 4,
        textAlign: 'center',
    },
    noticePraiseIcon: {
        width: 29,
        height: 18,
    },
    noticeCommentWrap: {
        backgroundColor: '#f0f4f7',
        borderRadius: 4,
    },
    noticeCommentIcon: {
        width: 18,
        height: 18,
    },
    noticeUserPic: {
        width: 44,
        height: 44,
        borderRadius: 4,
    },
    noticeUserComment: {
        width: screenWidth - 94,
    },
    /* ==================
        TabBar个人中心
    ==================== */
    myCenterBg: {
        width: screenWidth,
        height: screenWidth * 0.4,
    },
    UserPic: {
        width: 70,
        height: 70,
        borderRadius: 4,
    },
    /* ==================
        兴趣班
    ==================== */
    courseIntroWrap: {
        borderWidth: 1,
        borderColor: '#33D9B5',
    },
    LearningEffectWrap: {
        borderWidth: 1,
        borderColor: '#70CDFF',
    },
    courseIntroTitle: {
        width: screenWidth - 30,
        height: 50,
    },
    SuitsTheCrowd: {
        width: screenWidth - 30,
        height: 40,
        backgroundColor: '#32CBDF',
    },
    LearningEffect: {
        width: screenWidth - 30,
        height: 40,
        backgroundColor: '#70CDFF',
    },
    RegistrationFee: {
        height: 48,
    },
    ClassTabIcon: {
        backgroundColor: '#F8B551',
        // width: 72,
        height: 24,
        borderRadius: 4,
        marginTop: 4,
        marginBottom: 10,
        paddingHorizontal: 8,
    },
    /* ==================
        幼儿园风采
    ==================== */

    SchoolActivitiesListPic: {
        width: 100,
        height: 85,
        borderRadius: 4,
    },
    SchoolActivitiesListCont: {
        width: screenWidth - 30 - 100 - 10,

    },
    SchoolActivitiesBanner: {
        width: screenWidth - 30,
        height: (screenWidth - 30) / 2,
        borderRadius: 3,
    },
    /* ==================
        宝宝健康
    ==================== */
    BabyWeekTableTitle: {
        width: 120,
    },
    BabyWeekTable: {
        width: 120,
        borderWidth: 0.5,
        borderColor: '#ddd',
    },
    BabyTableTitle: {
        width: (screenWidth - 120) / 3,
    },
    babyTable: {
        width: (screenWidth - 120) / 3,
        borderWidth: 0.5,
        borderColor: '#ddd',
        padding: 5,
    },
    BabyHealthyIcon: {
        width: 28,
        height: 28,
    },
    /* ==================
        宝宝考勤
    ==================== */

    AttendanceTableTitle: {
        width: screenWidth / 7,
    },
    AttendanceTable: {
        width: screenWidth / 7,
        borderWidth: 0.5,
        borderColor: '#ddd',
        padding: 5,
    },
    AttendanceItem_White: {
        width: 28,
        height: 28,
        backgroundColor: '#FFFFFF',
        borderRadius: 6,
    },
    AttendanceItem_Orange: {
        width: 28,
        height: 28,
        backgroundColor: '#FFC1B5',
        borderRadius: 6,
    },
    AttendanceItem_Green: {
        width: 28,
        height: 28,
        backgroundColor: '#33D9B5',
        borderRadius: 6,
    },
    /* ==================
          添加宝宝
    ==================== */
    BabylistItem: {
        height: 80,
        width: screenWidth - 30,
    },

    BabyListCon: {
        width: screenWidth - 30 - 40,
    },
    BabylistBtn: {
        width: 24,
        height: 24,
    },
    BabyDrugTag: {
        width: screenWidth - 80,
        height: 40,
        backgroundColor: '#f0f4f7',
        borderRadius: 4,
        paddingVertical: 8,
        paddingHorizontal: 10,
        textAlignVertical: 'top'
    },
    BabyDrugComment: {
        width: screenWidth - 30,
        height: 140,
        backgroundColor: '#f0f4f7',
        borderRadius: 4,
        paddingVertical: 8,
        paddingHorizontal: 10,
        textAlignVertical: 'top'
    },
    /* ==================
          单选框、多选框
    ==================== */
    radio: {
        width: 16,
        height: 16,
        borderWidth: 1,
        borderColor: '#BBBBBB',
        borderRadius: 8,
    },
    radioCur: {
        width: 16,
        height: 16,
        borderWidth: 1,
        borderColor: '#33D9B5',
        borderRadius: 8,
        backgroundColor: '#33D9B5',
    },
    radioIcon: {
        width: 12,
        height: 12,
        margin: 1,
    },
    radioItem: {
        width: 120,
    },
    checkbox: {
        width: 16,
        height: 16,
        borderWidth: 1,
        borderColor: '#BBBBBB',
        borderRadius: 2,
        backgroundColor: '#FFFFFF',

    },
    checkboxCur: {
        width: 16,
        height: 16,
        borderWidth: 1,
        borderColor: '#33D9B5',
        borderRadius: 2,
        backgroundColor: '#33D9B5',
    },
    /* ==================
          表单登录
    ==================== */
    logo: {
        width: 220,
        height: 61,
    },
    logonIcon: {
        width: 28,
        height: 28,
    },
    logonProtocol: {
        width: screenWidth,
        marginTop: 60,
    },
    codeBox: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#888',
        paddingHorizontal: 10,
        paddingVertical: 6,
    },
    codeBoxCur: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#33D9B5',
        paddingHorizontal: 10,
        paddingVertical: 6,
    },
    InputCon: {
        width: 200,
    },
    /* ==================
          聊天
    ==================== */
    chatBox: {
        width: screenWidth - 30 - 75,
        height: 36,
        backgroundColor: 'red',
        borderRadius: 4,
    },
    chatSendBox: {
        width: 60,
        height: 36,
        borderRadius: 4,
        backgroundColor: '#33D9B5',
    },
    chatSendPic: {
        width: screenWidth * 0.4,
    },
    VoiceChat: {
        width: 24,
        height: 24,
    },
    VoiceChatDidNotAnswer: {
        width: 4,
        height: 4,
        borderRadius: 2,
        backgroundColor: 'red',
    },
    /* ==================
      输入框定位在底部(虚拟键盘弹起)
    ==================== */
    ChatContainer: {
        flex: 1
    },
    ChatInput: {
        height: 40,
        width: screenWidth - 180,
        fontSize: 16,
        color: '#333333',
        backgroundColor: '#fff',
        borderRadius: 4,
        paddingHorizontal: 20,
        paddingVertical: 0
    },
    ChatInput2: {
        display: 'none',
    },
    ChatBox: {
        width: screenWidth,
        backgroundColor: '#F5F5F5',
        position: 'absolute',
        bottom: 0,
    },
    ChatTxt: {
        color: 'red'
    },
    ScrollHeight: {
        backgroundColor: 'pink',
        height: 100,
    },
    BottomFunctionItem: {
        width: 64,
        height: 64,
        marginVertical: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ChatPic: {
        width: 48,
        height: 48,
        borderRadius: 4,
        marginHorizontal: 10,
    },
    ChatCont: {
        width: screenWidth - 80,

    },
    ChatContBar: {
        alignSelf:'flex-start',
        backgroundColor: '#ffffff',
        padding: 8,
        borderRadius: 4,
        marginTop: 10,
    },
    enjoyBtn: {
        width: 32,
        height: 32,
    },
    moreBtn: {
        width: 16,
        height: 16,
    },
    ChatIcon: {
        width: 64,
        height: 64,
    },
    /* ==================
        自定义导航栏
    ==================== */
    navigationBar: {
        height: 44,
        width: screenWidth,
        backgroundColor: '#33D9B5',
    },
    /* ==================
        成长档案
    ==================== */
    ModalBabyWrap: {
        width: screenWidth,
    },
    ModalCameraWrap: {
        width: screenWidth,
        backgroundColor: 'white',
        marginTop: 44,
    },
    ModalBabyName: {
        width: 200,
        backgroundColor: 'white',
        borderRadius: 4,
        marginTop: 50,
        padding: 10,
    },
    ModalUpBtn: {
        width: 32,
        height: 32,
        position: 'absolute',
        left: 84,
        top: -18,
    },
    ModalCameraItemBg_yellow: {
        backgroundColor: '#f6b63a',
    },
    ModalCameraItemBg_red: {
        backgroundColor: '#f66856',
    },
    ModalCameraItemBg_green: {
        backgroundColor: '#01cf97',
    },
    ModalCameraItemBg_blue: {
        backgroundColor: '#1abdf3',
    },
    ModalBabyImg: {
        width: (screenWidth - 50) / 3,
        height: (screenWidth - 50) / 3,
        marginVertical: 5,
    },
    TrackRecordDate: {
        width: 60,
        height: 60,
        backgroundColor: '#33D9B5',
    },
    ModalHint: {
        width: 230,
        padding: 20,
        borderRadius: 4,
        backgroundColor: 'white',
    },
    TimePhoto: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        backgroundColor: '#33D9B5',
        borderRadius: 20,
    },
    TimePhotoIcon: {
        width: 18,
        height: 18,
    },
    /* ==================
          园区通讯录
    ==================== */
    PhoneListTitle: {
        height: 28,
        backgroundColor: '#e7f9f5',
        paddingHorizontal: 15,
        justifyContent: 'center',
    },
    PhoneListLetter: {
        width: 30,
        height: 30,
        backgroundColor: '#ddd',
        alignItems: 'center',
    },
    PhoneListItem: {
        width: screenWidth - 30,
        height: 72,
        borderBottomWidth: 1,
        backgroundColor: 'white',
        borderBottomColor: '#ccc',
        paddingHorizontal: 15,
        alignItems: 'center',
        flexDirection: 'row',
    }
});
