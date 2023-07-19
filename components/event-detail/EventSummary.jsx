import styles from "./EventSummary.module.css";

const EventSummary = ({ title }) => {
    return (
        <div className={styles.summary}>
            <h1 className="title titleLight">{title}</h1>
        </div>
    )
}

export default EventSummary