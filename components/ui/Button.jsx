import Link from "next/link";
import styles from "./Button.module.css";

const Button = ({ children, link, onClick }) => {
    if (link) {
        return (
            <Link href={link} className={styles.button}>
                {children}
            </Link>
        )
    }

    else {
        return (
            <button className={styles.button}
                onClick={onClick}>
                {children}
            </button>
        )
    }
}

export default Button