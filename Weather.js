import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
    Haze: {
        iconName : "weather-fog",
        gradient: [ "#dbc3c7", "#2c3e50"],
        title: "안개가 자욱하다잉",
        subtitle: "거 신선놀음 하기 딱 좋은 날씨네"
    },
    Drizzle: {
        iconName : "weather-partly-rainy",
        gradient : [ "#8360c3", "#2ebf91"],
        title: "이슬비가 주룩주룩",
        subtitle: "밖에 비온다 주룩주룩"
    },
    Rain: {
        iconName : "weather-rainy",
        gradient : [ "#667db6", "#0082c8", "#0082c8", "#667db6"],
        title: "비내리는 호남선~🎤",
        subtitle: "비내리는 날엔 막걸리에 파전인데.."
    },
    Snow: {
        iconName : "weather-snowy",
        gradient : [ "#c9d6ff", "#e2e2e2"],
        title: "겨울 왕국",
        subtitle: "올라프의 계절 커밍"
    },
    Clear: {
        iconName : "weather-sunny",
        gradient : [ "#2980b9", "#6dd5fa", "#ffffff"],
        title: "맑은 하늘",
        subtitle: "파란 하늘 위로 훨훨 날아 가겠죠🎤"
    },
    Clouds: {
        iconName : "weather-cloudy",
        gradient : [ "#bdc3c7", "#2c3e50"],
        title: "구름 보소",
        subtitle: "구름 묻고 더블로 가!☁️"
    },
    Mist: {
        iconName : "weather-fog",
        gradient : [ "#304352", "#d7d2cc" ],
        title: "미스트 슝슝",
        subtitle: "부슬부슬 비가 내려와~~~요"
    },
    Dust: {
        iconName : "weather-windy",
        gradient : [ "#603813", "#b29f94"],
        title: "황사다 방콕각",
        subtitle: "고맙소 중국🖕"
    },
    Thunderstorm: {
        iconName : "weather-lightning",
        gradient : [ "#141e30", "#243b55"],
        title: "천둥 번개가 친다",
        subtitle: "밖은 이미 지옥이야~!"
    },
    Smoke: {
        iconName : "weather-fog",
        gradient : [ "#304352", "#d7d2cc"],
        title: "연기가 자욱하구만",
        subtitle: "누가 어디서 불 피웠나?"
    },
    Fog: {
        iconName : "weather-fog",
        gradient : [ "#304352", "#d7d2cc"],
        title: "안개 보소",
        subtitle: "한치 앞도 모르는 세상."
    },
    Sand: {
        iconName : "weather-windy",
        gradient : [ "#603813", "#b29f94"],
        title: "모래가 온다",
        subtitle: "오우 쒯 모래가 날라다녀"
    },
    Tornado: { 
        iconName : "weather-tornado",
        gradient : [ "#0f0c29", "#302b63", "#24243e"],
        title:"토(미)네이도",
        subtitle:"위잉 칙 위잉 칙 밖으로 나가지 마시오."
    }
}


export default function Weather({temp, condition}) {
    return (
            <LinearGradient
                colors = {weatherOptions[condition].gradient}
                style={Styles.container}
            >
                <StatusBar barStyle="light-content"/>
                <View style = {Styles.halfcontainer}>
                    <MaterialCommunityIcons
                        size={96}
                        color="white"
                        name={weatherOptions[condition].iconName} />
                    <Text style = {Styles.temp}>{temp}º</Text>
                </View>
                <View style = {{...Styles.halfcontainer, ...Styles.textContainer}}>
                        <Text style = {Styles.title}>{weatherOptions[condition].title}</Text>
                        <Text style = {Styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
                
                </View>
            </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust",
        "Smoke",
        "Fog",
        "Sand",
        "Tornado"
    ]).isRequired
};

const Styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    temp : {
      fontSize: 42,
      color : "white"
    },
    halfcontainer: {
        flex:1,
        justifyContent:"center",
        alignItems: "center"
    },
    title: {
        color:"white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        fontWeight: "600",
        color:"white",
        fontSize: 24

    },
    textContainer: {
        paddingHorizontal:20,
        alignItems: "flex-start"
    }
})