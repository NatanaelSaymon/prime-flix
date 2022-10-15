import { Link } from "react-router-dom"
import styles from './styles.module.css'

export function Filme({ title, id, img }){
    return(
        <article key={id} className={styles.article}>
            <h2 className={styles.title}>{title}</h2>
            <img src={`https://image.tmdb.org/t/p/original/${img}`} alt={title} className={styles.img}/>
            <Link to={`filmes/${id}`} className={styles.link}>Acessar</Link>
        </article>
    )
}