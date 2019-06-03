import React, {Component} from 'react';
import {Image, Platform, StyleSheet, Text, View, SafeAreaView} from 'react-native';

import NavigationUtil from "../navigator/NavigationUtil";
import PublicStyles from "../styles/PublicStyles";
import Swiper from "react-native-swiper";

export default class WelcomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            seconds: 3, // 2、倒计时3秒
        }
    }
    
    
    render() {
        return(
            <SafeAreaView style={styles.container}>
                <Image style={styles.bootPage} source={require('../../img/bootPage.png')} />
                <View style={styles.wrap}>
                    
                    <Text>倒计时{this.state.seconds}</Text>
                </View>
            </SafeAreaView>
        )
    }

    // 生命周期 componentDidMount 在第一次渲染后调用，只在客户端
    componentDidMount() {
        // 定时器、希望启动页停留几秒后，进入首页
        this.timer = setTimeout(() => {
            NavigationUtil.resetToHomePage({
                navigation: this.props.navigation
            })
            // this.props.navigation.navigate('Main')
        }, 3000);

        // 2、倒计时3秒
        this.countTimer = setInterval(() => {
            this.setState({
                seconds: this.state.seconds - 1
            });
        }, 1000)
    }

    // 生命周期 componentWillUnMount 在组件从 DOM 中移除之前立刻被调用。
    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
        this.countTimer && clearInterval(this.countTimer);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    bootPage: {
        width: 360,
        height: 496,
    },
    wrap: {
        width: 100,
        height: 32,
        backgroundColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        position: 'absolute',
        top: 60,
        right: 30,
    }
});