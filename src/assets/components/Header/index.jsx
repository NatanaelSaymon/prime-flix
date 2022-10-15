import { Link } from "react-router-dom"
import styles from "./styles.module.css"

export function Header() {
    return(
        <header>
            <Link className={`${styles.header__link} ${styles.header__logo}`} to="/">Prime Flix</Link>
            <Link className={`${styles.header__link} ${styles.header__favorito}`} to="/favoritos">Meus Filmes</Link>
        </header>
    )
}