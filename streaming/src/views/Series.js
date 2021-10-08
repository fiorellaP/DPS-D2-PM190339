import React, { useState } from 'react';
import { Text, StyleSheet, SafeAreaView, SectionList, TouchableHighlight } from 'react-native';
import Preview from '../components/Preview';
import List from '../components/List';
import ModalView from '../components/ModalView';

const dataSeries = [
    {
        titulo: 'Comedia',
        data: [
            {
                id: 1,
                nombre: 'I Am Not Okay With This',
                img: 'https://m.media-amazon.com/images/M/MV5BMWM5YzhmNGMtZTI4Ny00MGM4LThkYjAtMDIyMTEwNTQyZmQ1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
                trailer: 'LQVQHLEPZQM/hq720.jpg',
                temporadas: 1
            },
            {
                id: 2,
                nombre: 'Modern Family',
                img: 'https://upload.wikimedia.org/wikipedia/en/b/b6/Modern_Family_season_10_poster.jpg',
                trailer: 'Ub_lfN2VMIo/hqdefault.jpg.jpg',
                temporadas: 11
            },
            {
                id: 3,
                nombre: 'The Boss Baby: Back in Business',
                img: 'https://m.media-amazon.com/images/M/MV5BMDVlOWFlYWQtZDdjYS00MWI2LTk2MzUtYjg1N2QyOGIwZDIzXkEyXkFqcGdeQXVyNzQwMTExNDA@._V1_.jpg',
                tariler:'WGNwOoWnOMw/hq720.jpg',
                temporadas: 4
            },
            {
                id: 4,
                nombre: 'Atypical',
                img: 'https://m.media-amazon.com/images/M/MV5BMjNjNThmYTUtMjY2Ni00OGE4LTgzOTItYTgzMDllNDM5NTI5XkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_FMjpg_UX1000_.jpg',
                trailer: 'ieHh4U-QYwU/hq720.jpg',
                temporadas: 3
            },
            {
                id: 5,
                nombre: 'Brooklyn Nine-Nine',
                img: 'https://www.formulatv.com/images/series/posters/700/760/dest_1.jpg',
                trailer: 'sEOuJ4z5aTc/hq720.jpg',
                temporadas: 7
            },
            {
                id: 6,
                nombre: 'Julie and the Phantoms',
                img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1613831600l/55065400.jpg',
                trailer: '5U-66CmEkEA/hq720.jpg',
                temporadas: 1
            },
        ]
    },
    {
        titulo: 'Romance',
        data: [
            {
                id: 1,
                nombre: 'Dash & Lily',
                img: 'https://m.media-amazon.com/images/M/MV5BYmZmN2NlMjQtOTJiYS00ZmI4LWFmMTItNDk1ZDNmYTBkZDZiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
                trailer: 'AmW5GO6btMM/hq720.jpg',
                temporadas: 1
            },
            {
                id: 2,
                nombre: 'The Baker and the Beauty',
                img: 'https://m.media-amazon.com/images/M/MV5BYmIzNDdkZDktYTVjMC00MzA3LWJkZmMtZTM3MjRlMmZlMjRkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
                trailer: 'SKDUW-tS9vA/hq720.jpg',
                temporadas: 1
            },
            {
                id: 3,
                nombre: "Sweet Magnolias",
                img: 'https://m.media-amazon.com/images/M/MV5BZjBmNTI2ZDEtOThhMy00OTkyLTg5Y2ItMTUxMzU4NWI1MzhhXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_.jpg',
                trailer: 'TEgrH93KLgY',
                temporadas: 4
            },
            {
                id: 4,
                nombre: 'Go! Vive a Tu Manera',
                img: 'https://pics.filmaffinity.com/go_vive_a_tu_manera_tv_series-755342954-large.jpg',
                trailer: '60wD6dxtlgk.jpg',
                temporadas: 1
            },
            {
                id: 5,
                nombre: 'Anne With An E',
                img: 'https://m.media-amazon.com/images/M/MV5BNThmMzJlNzgtYmY5ZC00MDllLThmZTMtNTRiMjQwNmY0NmRhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
                trailer: 'S5qJXYNNINo.jpg',
                temporadas: 1
            },
            {
                id: 6,
                nombre: 'Away',
                img: 'https://m.media-amazon.com/images/M/MV5BZDg0NDAxOTctZjdmNy00ODVjLTgyMDItZjFmMjdjYTk3ZTYxXkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_.jpg',
                trailer: '3f_REapPwio.jpg',
                temporadas: 2
            },
        ]
    },
    {
        titulo: 'Acción',
        data: [
            {
                id: 1,
                nombre: 'Shadow and Bone',
                img: 'https://m.media-amazon.com/images/M/MV5BNTNhY2JlMmItMGMzZi00ZTM2LTlmNTItZDBkMGVhNGJhYWRhXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg',
                trailer: 'b1WHQTbJ7vE/hq720.jpg',
                temporadas: 1
            },
            {
                id: 2,
                nombre: 'The Umbrella Academy',
                img: 'https://m.media-amazon.com/images/M/MV5BNzA5MjkwYzMtNGY2MS00YWRjLThkNTktOTNmMzdlZjE3Y2IxXkEyXkFqcGdeQXVyMjkwMzMxODg@._V1_.jpg',
                trailer: '0DAmWHxeoKw/hq720.jpg',
                temporadas: 2
            },
            {
                id: 3,
                nombre: 'Supergirl',
                img: 'https://www.alohacriticon.com/wp-content/uploads/2020/10/supergirl-teleserie-poster-sinopsis.jpg',
                trailer: '49RZx5tUKM4/hq720.jpg',
                temporadas: 5
            },
            {
                id: 4,
                nombre: 'Kingdom',
                img: 'https://static.wikia.nocookie.net/doblaje/images/f/fd/Kingdom_portada_netlfix.png/revision/latest?cb=20200806131604&path-prefix=es',
                trailer: '4l-yByZpaaM/hq720.jpg',
                temporadas: 2
            },
            {
                id: 5,
                nombre: 'Titans',
                img: 'https://static.wikia.nocookie.net/batman/images/8/80/Titans_Season_2_poster.png/revision/latest?cb=20190820162449&path-prefix=es',
                trailer: 'iH44Z0QwrWQ/hq720.jpg',
                temporadas: 3
            },
            {
                id: 6,
                nombre: 'Cursed',
                img: 'https://m.media-amazon.com/images/M/MV5BYjczN2Q2N2UtYzU4YS00NjEyLThmNDgtZDkxNGQ1N2NjYzFlXkEyXkFqcGdeQXVyNDY2NDU1MzA@._V1_.jpg',
                trailer: 'xLTdy6PfotA/hq720.jpg',
                temporadas: 1
            },
        ]
    }
]

const Series = () => {

    const [ previewSerie, setPreviewSerie ] = useState('');
    const [ modalVisible, setModalVisible ] = useState(false);

    return(
        <>
            <Preview previewVideo = { previewSerie } setModalVisible = { setModalVisible } />
            <SafeAreaView style = {{ height: '65%' }}>
                <SectionList 
                    sections = { dataSeries }
                    keyExtractor = { (item, index) => item + index }
                    renderItem = { ({ item }) => (
                        <TouchableHighlight
                            onPress = { () => setPreviewSerie(item.trailer) }
                            underlayColor="white"
                        >
                            <List serie = { item } />
                        </TouchableHighlight>
                    ) }
                    renderSectionHeader = { ({ section: { titulo } }) => (
                        <Text style = { styles.titulo }>{ titulo }</Text>
                    )}
                />
            </SafeAreaView>

            { previewSerie === '' ? (
                null
            ):(
                <ModalView modalVisible = { modalVisible } setModalVisible = { setModalVisible } preview = { previewSerie } />
            )}
        </>
    )
}

const styles = StyleSheet.create({
    titulo: {
        textAlign: 'center',
        fontSize: 25,
        color: '#000',
        marginVertical: 5,
    },
})

export default Series;