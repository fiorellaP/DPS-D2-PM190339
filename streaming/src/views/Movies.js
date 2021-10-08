import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import Carousel from '../components/Carousel';
import ModalView from '../components/ModalView';
import Preview from '../components/Preview';

const APIKey = 'AIzaSyBEvYq6KrXttTUgOG0I3_OT62UZaHMkaqA'
const peliculas = {
    comedia: [
        {
            id: 1,
            nombre: 'Holidate',
            img: 'https://m.media-amazon.com/images/M/MV5BYWVmYTFjODItOTY2Ni00NDhhLTk1ZDYtMzBmOGFhZTMyY2Q0XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg',
            trailer: "hxaaAoI57fk/hq720.jpg",
            anio: 2020
        },
        {
            id: 2,
            nombre: 'Yes day',
            img: 'https://m.media-amazon.com/images/M/MV5BNTMwMzA4YzYtMzkwNC00N2ZhLTk5MjQtMjg3ODA3NDY3ZmVmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg',
            trailer: 'Y-3Vr8Ut8d0/hq720.jpg',
            anio: 2021
        },
        {
            id: 3,
            nombre: 'Parasite',
            img: 'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg',
            trailer: '5xH0HfJHsaY/hq720.jpg',
            anio: 2019
        },
        {
            id: 4,
            nombre: 'Work it',
            img: 'https://upload.wikimedia.org/wikipedia/en/6/6c/Work_It_film_poster.png',
            trailer: 'OqcP_wkcl2I/hq720.jpg',
            anio: 2020
        },
        {
            id: 5,
            nombre: 'Tall Girl',
            img: 'https://m.media-amazon.com/images/M/MV5BMDI3YmEwOTItNDEyNC00MGNlLWJiMjEtMzc0MTJjZmM1NGEzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
            trailer: 'NfpXeLVzJIw/hq720.jpg',
            anio: 2019
        },
        {
            id: 6,
            nombre: 'The kissing booth',
            img: 'https://m.media-amazon.com/images/M/MV5BNjQ0Mzk0OTE5MF5BMl5BanBnXkFtZTgwNDkyOTI0NTM@._V1_.jpg',
            trailer: '7bfS6seiLhk/hq720.jpg',
            anio: 2018
        },
    ],
    romance: [
        {
            id: 1,
            nombre: 'Holiday in the wild',
            img: 'https://m.media-amazon.com/images/M/MV5BMzc1MWI3MWMtYmNlYi00NjllLWIyNjctNWU2NWRjNjE2ZjhkXkEyXkFqcGdeQXVyNTU5MzI1OTM@._V1_.jpg',
            trailer: "8miCh30GcGU/hq720.jpg",
            anio: 2019
        },
        {
            id: 2,
            nombre: 'The Knight Before Christmas',
            img: 'https://m.media-amazon.com/images/M/MV5BYzkyZjMyOTAtYzAwZS00NWFiLTkyOWYtYzBlN2E5YTBkMGRmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
            trailer: '-JtwROpSVWc/hq720.jpg',
            anio: 2019
        },
        {
            id: 3,
            nombre: 'The Princess Switch',
            img: 'https://upload.wikimedia.org/wikipedia/en/2/2e/The_Princess_Switch.png',
            trailer: '-WBhj57fHeI/hq720.jpg',
            anio: 2018
        },
        {
            id: 4,
            nombre: 'A Christmas Prince',
            img: 'https://m.media-amazon.com/images/M/MV5BNWMzZTE4NTYtOGRiNi00YzQ2LWJiNjctMzk1NDU4NmY5ZGQwXkEyXkFqcGdeQXVyODIyMzA4NDc@._V1_.jpg',
            trailer: 'tG4Fbj1B1bY/hq720.jpg',
            anio: 2017
        },
        {
            id: 5,
            nombre: 'A Cinderella Story: Christmas Wish',
            img: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/A_Cinderella_Story-_Christmas_Wish.jpg/220px-A_Cinderella_Story-_Christmas_Wish.jpg',
            trailer: 'smUhoKhozPw/hq720.jpg',
            anio: 2019
        },
        {
            id: 6,
            nombre: 'Operation Christmas Drop',
            img: 'https://m.media-amazon.com/images/M/MV5BZjM2MTNjNzAtMjU0Yy00MTNmLWFkMDctMWZmMjA0ODE0YTVhXkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_.jpg',
            trailer: 'JTHWAQG6Gxw/hq720.jpg',
            anio: 2020
        },
    ],
    accion: [
        {
            id: 1,
            nombre: 'The Marksman',
            img: 'https://images-na.ssl-images-amazon.com/images/I/917gRihNOtL._RI_.jpg',
            trailer: "lEBPNi4bEbc/hq720.jpg",
            anio: 2021
        },
        {
            id: 2,
            nombre: 'Blood Red Sky',
            img: 'https://pics.filmaffinity.com/Blood_Red_Sky-418181225-large.jpg',
            trailer: 'U8M_1eyrBtQ/hq720.jpg',
            anio: 2021
        },
        {
            id: 3,
            nombre: 'Invasion',
            img: 'https://m.media-amazon.com/images/M/MV5BMWQxNzlkZDItZjczNC00NmQ3LTg1NGItMGM3NjNkMDFiNDVhXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg',
            trailer: 'DlaHxL3mHAU/hq720.jpg',
            anio: 2020
        },
        {
            id: 4,
            nombre: 'Sweet Girl',
            img: 'https://es.web.img3.acsta.net/pictures/21/07/12/11/38/1972167.jpg',
            trailer: 'NiFuJV2GLkY/hq720.jpg',
            anio: 2021
        },
        {
            id: 5,
            nombre: 'AVA',
            img:'https://m.media-amazon.com/images/M/MV5BOTI5OWZiYTYtN2Y3ZC00YjM4LTk2YzItZTU2YmEzMThmNTVjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
            trailer: 'eLEwNo78f0k/hq720.jpg',
            anio: 2020
        },
        {
            id: 6,
            nombre: 'Extraction',
            img: 'https://m.media-amazon.com/images/M/MV5BMDJiNzUwYzEtNmQ2Yy00NWE4LWEwNzctM2M0MjE0OGUxZTA3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
            trailer: 'L6P3nI6VnlY/hq720.jpg',
            anio: 2020
        },
    ]
}

const Movies = () => {

    const [ preview, setPreview ] = useState('');
    const [ modalVisible, setModalVisible ] = useState(false);

    return(
        <View>
            <Preview previewVideo = { preview  } setModalVisible = { setModalVisible } />
            
            <SafeAreaView style = {{ height: '60%' }}>
                <ScrollView>
                    <View style = { styles.container }>
                        <Text style = { styles.clasificacion }>Comedia</Text>
                        <Carousel data = { peliculas.comedia } setPreview = { setPreview }/>
                    </View>
                    <View style = { styles.container }>
                        <Text style = { styles.clasificacion }>Romance</Text>
                        <Carousel data = { peliculas.romance } setPreview = { setPreview }/>
                    </View>
                    <View style = { styles.container }>
                        <Text style = { styles.clasificacion }>Acción</Text>
                        <Carousel data = { peliculas.accion } setPreview = { setPreview }/>
                    </View>
                </ScrollView>
            </SafeAreaView>

            { preview === '' ? (
                null
            ):(
                <ModalView modalVisible = { modalVisible } setModalVisible = { setModalVisible } preview = { preview } />
            )}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 10,
    },
    clasificacion: {
        textAlign: 'center',
        fontSize: 25,
        marginVertical: 5,
    },
})

export default Movies;