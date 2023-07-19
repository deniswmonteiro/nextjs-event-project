import LogisticsItem from "./LogisticsItem";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import styles from "./EventLogistics.module.css";

const EventLogistics = ({ event }) => {
    const eventDate = new Date(event.date).toLocaleDateString("pt-BR", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
    const eventAddress = event.location.replace(", ", "\n");

    return (
        <div className={styles.wrapper}>
            <div className={styles.logistics}>
                <img src={`../${event.image}`} alt={event.title}
                    className={styles.image} />

                <ul className={styles.list}>
                    <LogisticsItem icon={DateIcon}>
                        <time>{eventDate}</time>
                    </LogisticsItem>
                    <LogisticsItem icon={AddressIcon}>
                        <address>{eventAddress}</address>
                    </LogisticsItem>
                </ul>
            </div>
        </div>
    )
}

export default EventLogistics