import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import api from '../../services/api'
import styles from './styles.module.css'

export function Filme() {

    const { id } = useParams();
    const navigate = useNavigate()
    const [datails, setDatails] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        async function loadDetails() {
            try{

                const response = await api.get(`/movie/${id}`, {
                    params: {
                        api_key: '302f4c804ba1620ae1281c6dd6314a7c',
                        language: 'pt-BR',
                    }
                })
    
                setDatails(response.data)
                setLoading(false)

            }

            catch(error) {
                console.log('Nooooooo, we got an error', error)
                navigate("/", { replace: true })
            }
            
        }

        loadDetails()
        
        console.log(datails)

        // return () => {
        //     console.log('Componente foi desmontado')
        // }
    }, [])


    if(loading){
        return(
            <div className='filme-info'>
                <h1>Carregando detalhes do filme...</h1>
            </div>
        )
    }

    return(
        <div className={styles.filme__info}>
            <h1>{datails.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${datails.backdrop_path}`} alt={datails.title} />
            <h3>Sinopse:</h3>
            <p>{datails.overview}</p>
            <p><strong>Avaliação: {datails.vote_average} / 10</strong></p>

            <div className={styles.actions}>
                <button className={styles.actions__btn}>Salvar</button>

                <a 
                    href={`https://www.youtube.com/results?search_query=${datails.title} trailer`} 
                    target="_blank" 
                    className={styles.actions__btn}
                    rel="external"
                >
                    Trailer
                </a>
            </div>
        </div>
    )
}