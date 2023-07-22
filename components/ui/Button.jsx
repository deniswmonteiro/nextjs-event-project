import Link from "next/link";
import styles from "./Button.module.css";

const Button = ({ children, link, onClick, ...props }) => {
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
                onClick={onClick}
                {...props}>
                {children}
            </button>
        )
    }
}

export default Button