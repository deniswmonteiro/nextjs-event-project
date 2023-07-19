import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">
                    NextEvents
                </Link>
            </div>
            <nav className={styles.navigation}>
                <ul>
                    <li>
                        <Link href="/events">
                            Todos os Eventos
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header