import styles from "./EventContent.module.css";

const EventContent = ({children}) => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.content}>
                {children}
            </div>
        </section>
    )
}

export default EventContent