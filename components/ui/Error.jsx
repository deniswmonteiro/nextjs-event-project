import styles from "./Error.module.css";

const Error = ({children}) => {
    return (
        <div className={styles.alert}>
            {children}
        </div>
    )
}

export default Error