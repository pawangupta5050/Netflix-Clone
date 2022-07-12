import requests from "../Utilities/requests"
import { useRouter } from "next/router"
import styles from '../styles/Nav.module.css'

const Nav = () => {
    const router = useRouter();
    return (
        <nav className={styles.app__navbar_container}>
            <div className={styles.app__navbar}>
                {Object.entries(requests).map(([key, { title, url }]) =>
                    <h2 
                    key={key}
                    onClick={ () => router.push(`/?genre=${key}`)}
                    className={styles.app__navbar_text}
                    >
                    {title}
                    </h2>
                )}
            </div>
            <div className={styles.app__navbar_last}/> 
        </nav>
    )
}

export default Nav