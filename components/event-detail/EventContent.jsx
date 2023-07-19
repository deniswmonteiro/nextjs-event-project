import styles from "./EventContent.module.css";

const EventContent = ({ children }) => {
    return (
        <div className={styles.wrapper}>
            <p className={styles.content}>
                {children}
            </p>
        </div>
    )
}

export default EventContent