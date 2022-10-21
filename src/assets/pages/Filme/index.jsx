import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import api from '../../services/api'

export function Filme() {

    const { id } = useParams();
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
            }
            
        }

        loadDetails()
        
        console.log(datails)

        return () => {
            console.log('Componente foi desmontado')
        }
    }, [])


    if(loading){
        return(
            <div className='filme-info'>
                <h1>Carregando detalhes do filme...</h1>
            </div>
        )
    }

    return(
        <div className="filme-info">
            <h1>{datails.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${datails.backdrop_path}`} alt={datails.title} />
            <h3>Sinopse:</h3>
            <p>{datails.overview}</p>
            <p><strong>Avaliação: {datails.vote_average} / 10</strong></p>
        </div>
    )
}