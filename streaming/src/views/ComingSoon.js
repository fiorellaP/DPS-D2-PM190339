import React from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

const dataComingSoon = [
    {
        id: '1',
        titulo: 'Sing 2',
        descripcion: 'La película sigue a Buster (Matthew McConaughey) y su nuevo elenco, que ahora tienen la vista puesta en debutar en un nuevo espectáculo en el Crystal Tower Theatre.',
        fechaEstreno: '22/11/2021',
        trailer: 'EPZu5MA2uqI/hq720.jpg'
    },
    {
        id: '2',
        titulo: 'Spider-Man: No Way Home',
        descripcion: 'Tras los acontecimientos de Spider-Man: Far From Home, la vida de Peter Parker y su reputación se ponen patas arriba cuando su identidad queda expuesta a manos de Mysterio.',
        fechaEstreno: '17/12/2021',
        trailer: 'WgU7P6o-GkM/hqdefault.jpg'
    },
    {
        id: '3',
        titulo: 'Encanto',
        descripcion: 'La principal inspiración para el desarrollo de Encanto fue la cultura colombiana.',
        fechaEstreno: '24/11/2021',
        trailer: 'CaimKeDcudo/hq720.jpg'
    },
]

const ComingSoon = () => {

    return(
        <SafeAreaView>
            <FlatList
                data = { dataComingSoon }
                keyExtractor= { ( item ) => item.id }
                renderItem = { ( {item} ) => (
                    <View style = { styles.container }>
                        <View style = { styles.video }>
                            <WebView
                                source={{
                                    uri: `https://www.youtube.com/embed/${item.trailer}`
                                }} 
                            />
                        </View>
                        <View style = { styles.containerInfo }>
                            <Text style ={ styles.texto }>{ item.titulo }</Text>
                            <Text style = {{ textAlign: 'justify', fontSize: 18, marginVertical: 4 }}>{ item.descripcion }</Text>
                            <Text style = {{ fontSize: 16, marginBottom: 4 }}>Fecha de Estreno: { item.fechaEstreno }</Text>
                        </View>
                    </View>
                )}
            />
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: '2%',
        marginVertical: 10,
        borderBottomWidth: 1,
    },
    video: {
        width: '100%',
        height: 200,
    },
    containerInfo:{
        marginTop: 10,
        paddingHorizontal: 10,
    },
    texto: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})

export default ComingSoon;