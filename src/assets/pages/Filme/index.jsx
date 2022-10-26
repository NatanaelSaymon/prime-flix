import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify";

import api from '../../services/api'
import styles from './styles.module.css'

export function Filme() {

    const { id } = useParams();
    const navigate = useNavigate()
    const [details, setdetails] = useState({})
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
    
                setdetails(response.data)
                setLoading(false)

            }

            catch(error) {
                console.log('Nooooooo, we got an error', error)
                navigate("/", { replace: true })
            }
            
        }

        loadDetails()
        
        console.log(details)

        // return () => {
        //     console.log('Componente foi desmontado')
        // }
    }, [])

    function salvarFilme() {
        const minhaLista = localStorage.getItem('filmes')

        let filmesSalvo;

        if(minhaLista) {
            filmesSalvo = JSON.parse(minhaLista)
        } else {
            filmesSalvo = []
        }

        const hasFilme = filmesSalvo.some(filme => filme.id === details.id)

        if(hasFilme) {
            toast.warning('Esse filme já foi salvo!');
            return
        }

        filmesSalvo.push(details)
        localStorage.setItem("filmes", JSON.stringify(filmesSalvo))
        toast.success('Filme salvo com sucesso!');

    }


    if(loading){
        return(
            <div className='filme-info'>
                <h1>Carregando detalhes do filme...</h1>
            </div>
        )
    }

    return(
        <div className={styles.filme__info}>
            <h1>{details.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${details.backdrop_path}`} alt={details.title} />
            <h3>Sinopse:</h3>
            <p>{details.overview}</p>
            <p><strong>Avaliação: {details.vote_average} / 10</strong></p>

            <div className={styles.actions}>
                <button className={styles.actions__btn} onClick={salvarFilme}>Salvar</button>

                <a 
                    href={`https://www.youtube.com/results?search_query=${details.title} trailer`} 
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