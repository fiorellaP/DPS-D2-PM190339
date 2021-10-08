import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const ciudades = ['Aguilares', 'Apopa', 'Ayutuxtepeque', 'Ciudad Delgado', 'Cuscatancingo', 'El Paisnal', 
'Guazapa', 'Ilopango', 'Mejicanos', 'Nejapa', 'Panchimalco', 'Rosario de Mora', 'San Marcos', 'San Martín', 
'San Salvador', 'Santiago Texacuangos', 'Santo Tomás', 'Soyapango', 'Tonacatepeque']

const Form = ({ city, setCity }) => {
    return(
        <View style = { styles.contenedor }>
            <Text style = { styles.titulo }>Ejercicio 2 - Clima</Text>
            <Picker 
                style = { styles.PKcity }
                selectedValue = { city }
                onValueChange = { ciudad => setCity(ciudad) }
            >
                <Picker.Item style = { styles.ciudad_el } label="Seleccione una ciudad" value="" />
                { ciudades.map( (city, index) => (
                    <Picker.Item key={ index } style= { styles.ciudad_el }  label={ city } value={ city } />
                )) }
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        width: '100%',
        marginVertical: 20,
        alignItems: 'center'
    },
    titulo: {
        marginVertical: 15,
        width: '100%',
        fontSize: 24,
        textAlign: 'center',
        color: 'lightgrey',
    },
    ciudad_el: {
        fontSize: 18
    },
    PKcity: {
        width: '90%',
        height: 60,
        backgroundColor: '#FFF',
        borderBottomWidth: 5,
    },
})

export default Form;