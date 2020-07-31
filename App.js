import React from 'react';
import Loading from './Loading';
import * as Location from "expo-location";
import { Alert } from 'react-native';
import axios from "axios";
import getEnv from "./env";
import Weather from "./Weather";
const { APIKEY } = getEnv();

// console.log(APIKEY);
const API_KEY = APIKEY;

export default class extends React.Component {
  state = {
    isLoading : true
  }
  getWeather = async(latitude, longitude) => {
    const { 
      data: {
        main: { temp },
        weather
      }
     } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );

    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp
    })
  };
  
  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude)
      //this.setState({ isLoading: false })
      //sned to API and get weather
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  };
  componentDidMount() {
    this.getLocation();
  };

  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? ( 
      <Loading /> 
    ) : ( 
      <Weather temp={Math.round(temp)} condition={condition} />
    );
  }
}

