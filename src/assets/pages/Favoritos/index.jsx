import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styles from './styles.module.css'

export function Favoritos() {

    const [ filmes , setFilmes ] = useState([])

    useEffect(() => {
        const minhaLista = localStorage.getItem('filmes')

        setFilmes(JSON.parse(minhaLista) || [])
    }, [])

    function handleExcluirFilme(id) {
        console.log('id do filme', id)
        //console.log(filmes)

        const newList = filmes.filter(filme => filme.id !== id)

        setFilmes(newList)
        localStorage.setItem("filmes", JSON.stringify(newList))
    }

    return(
        <div className={styles['meus-filmes__container']}>
            <h1>Meus Filmes</h1>

            {filmes.length === 0 && <span>Você não possui filmes salvos ;(</span>}

            <ul>
                {filmes.map(filme => {
                    return(
                        <li key={filme.id}>
                            <p className={styles['meus-filmes__titles']}>{filme.title}</p>
                            
                            <div className={styles['meus-filmes__actions']}>
                                <Link to={`/filme/${filme.id}`}>Acessar</Link>
                                <button onClick={() => handleExcluirFilme(filme.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
            
        </div>

    )
}