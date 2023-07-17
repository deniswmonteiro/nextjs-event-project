import styles from "./EventSummary.module.css";

const EventSummary = ({title}) => {
    return (
        <section className={styles.summary}>
            <h1>{title}</h1>
        </section>
    )
}

export default EventSummary