import { useState, useEffect } from 'react'
import { Filme } from '../../components/Filme'
import api from '../../services/api'
import styles from './styles.module.css'

export function Home() {

    const [filmes, setFilmes] = useState([])

    useEffect( () => {
        async function loadFilmes() {
            try {
                const response = await api.get('/movie/now_playing', {
                    params: {
                        api_key: '302f4c804ba1620ae1281c6dd6314a7c',
                        language: 'pt-BR',
                        page: 1
                    }
                })

                //console.log('reponse', response.data.results.slice(0, 10))
                setFilmes(response.data.results)
            }

            catch(err) {
                console.log('Nooooooo, we got an error', err)
            }
        }

        loadFilmes()
    }, [])

    return(
        <div className={styles.container}>
            <div className={styles.lista__filmes}>
                {filmes.map(filme => <Filme title={filme.title} key={filme.id} id={filme.id} img={filme.poster_path}/>)}
            </div>
        </div>
    )
}