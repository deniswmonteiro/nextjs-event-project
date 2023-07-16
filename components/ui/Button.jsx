import Link from "next/link";
import styles from "./Button.module.css";

const Button = ({children, link}) => {
    return (
        <Link href={link} className={styles.button}>
            {children}
        </Link>
    )
}

export default Button