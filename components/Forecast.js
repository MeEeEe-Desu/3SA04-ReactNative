import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Forecast(props){
    return (
        <View>
            <Text style={styles.property}>{props.main}</Text>
            <Text style={styles.property}>{props.description}</Text>
            <Text style={styles.property}>{props.temp} °C</Text>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex:1,
      flexDirection: 'column',
      
      alignItems: 'center',
    },
    backdrop:{
        width:'100%',
        height: '100%'
    },
    property:{
        fontSize:20,
    }

  });