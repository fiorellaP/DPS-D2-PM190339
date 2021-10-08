import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Icon  from 'react-native-vector-icons/Ionicons';

const Cards = ({ dataWeather }) => {
    const  { weather, main, wind, ciudad }   = dataWeather;
    const icon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

    return(
        <View style = { styles.containerInfo }>
            <Text style = { styles.texto_ciudad }>{ ciudad }</Text>
            <Image 
                source = {{ uri: icon }} 
                style = {{ width: 100, height: 100 }} 
            />
            <View style = { styles.texto_temp}>
                <Icon size = {60} name="thermometer-outline"  color='grey' />
                <Text style = { styles.therm }>{ main.temp }°</Text>
                <Text style = { [styles.therm, { fontSize: 18 }] }>{ weather[0].description }</Text>
            </View>
            <View style = { styles.temperaturas }>
                <Text style = { styles.texto }>Mínima: { main.temp_min }°</Text>
                <Text style = { styles.texto }>Máxima: { main.temp_max }°</Text>
            </View>
            <Text style = { styles.texto } >Humedad: { main.humidity }%</Text>
            <Text style = { styles.texto } >Viento: { (wind.speed * 3.6).toFixed(2) } km/h</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerInfo: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
    },
    texto: {
        fontSize: 18,
        margin: 5,
        fontWeight: '700',
        color: 'grey',
    },
    therm: {
        fontSize: 24,
        color: 'grey',
        fontWeight: '200',
        marginRight: 14,
        textAlign: 'center',
    },
    texto_ciudad: {
        fontWeight: '200',
        fontWeight: 'bold',
        color: '#FFF',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 10,
    },
    texto_temp: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
    },
    temperaturas: {
        flexDirection: 'row'
    }
})

export default Cards;