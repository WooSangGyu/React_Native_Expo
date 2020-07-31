import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Weather({temp}) {
    return (
            <View style = {Styles.container}>
                <View style = {Styles.halfcontainer}>
                    <MaterialCommunityIcons size={96} name="weather-lightning-rainy"/>
                    <Text style = {Styles.temp}>{temp}`</Text>
                </View>
                <View style = {Styles.halfcontainer} />
            </View>
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
        "Dust"
    ]).isRequired
};

const Styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    temp : {
      fontSize: 42  
    },
    halfcontainer: {
        flex:1,
        justifyContent:"center",
        alignItems: "center"
    }
})