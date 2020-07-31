import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
    Haze: {
        iconName : "weather-fog",
        gradient: [ "#dbc3c7", "#2c3e50"]
    },
    Drizzle: {
        iconName : "weather-partly-rainy",
        gradient : [ "#8360c3", "#2ebf91"]
    },
    Rain: {
        iconName : "weather-rainy",
        gradient : [ "#667db6", "#0082c8", "#0082c8", "#667db6"]
    },
    Snow: {
        iconName : "weather-snowy",
        gradient : [ "#c9d6ff", "#e2e2e2"]
    },
    Clear: {
        iconName : "weather-sunny",
        gradient : [ "#2980b9", "#6dd5fa", "#ffffff"]
    },
    Clouds: {
        iconName : "weather-cloudy",
        gradient : [ "#bdc3c7", "#2c3e50"]
    },
    Mist: {
        iconName : "weather-fog",
        gradient : [ "#304352", "#d7d2cc" ]
    },
    Dust: {
        iconName : "weather-windy",
        gradient : [ "#603813", "#b29f94"]
    },
    Thunderstorm: {
        iconName : "weather-lightning",
        gradient : [ "#141e30", "#243b55"]
    },
    Smoke: {
        iconName : "weather-fog",
        gradient : [ "#304352", "#d7d2cc"]
    },
    Fog: {
        iconName : "weather-fog",
        gradient : [ "#304352", "#d7d2cc"]
    },
    Sand: {
        iconName : "weather-windy",
        gradient : [ "#603813", "#b29f94"]
    },
    Tornado: { 
        iconName : "weather-tornado",
        gradient : [ "#0f0c29", "#302b63", "#24243e"]
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
                <View style = {Styles.halfcontainer} />
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
    }
})