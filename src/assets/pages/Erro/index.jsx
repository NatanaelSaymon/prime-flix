import { Link } from 'react-router-dom'
import styles from './styles.module.css'

export function Erro(){
    return(
        <section className={styles.erro__container}>
            <h1>404</h1>
            <p>Ops... essa página não existe!</p>
            
            <Link to="/" className={styles.btn__back}>
                Click aqui para voltar a Home
            </Link>
        </section>
    )
}