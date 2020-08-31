import React, { useState, useEffect } from 'react'
import { Text, ImageBackground, StyleSheet } from 'react-native'
import Forecast from './Forecast'

export default function Weather(props){
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0,
        temp_max:0,
        temp_min:0
    })

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`) 
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=3312d5162157f9286fecbc1619d009f5`) .then((response) => response.json())
            .then((json) => {
                setForecastInfo({
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    temp: json.main.temp });
                    
                })
            .catch((error) => {
                console.warn(error); 
            });
        }
    }, [props.zipCode])

    return (
        <ImageBackground source={require('../bg02.jpg')} style={styles.backdrop}>
            <Text style = {styles.Textchange}>Zip Code</Text>
            <Text style = {styles.Textchange}>{props.zipCode}</Text>
            <Forecast {...forecastInfo}/>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    backdrop: {
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "100%"
    },
    Textchange: {
        fontSize: 20,

    }
})