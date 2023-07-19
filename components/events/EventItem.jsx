import Image from "next/image";
import Button from "../ui/Button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import styles from "./EventItem.module.css";

const EventItem = ({ event }) => {
    const eventDate = new Date(event.date).toLocaleDateString("pt-BR", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
    const eventAddress = event.location.replace(", ", "\n");

    return (
        <li className={styles.event}>
            <Image src={`/${event.image}`} alt={event.title}
                width={250}
                height={160} />

            <div className={styles.content}>
                <div className={styles.summary}>
                    <h2>{event.title}</h2>

                    <div className={styles.date}>
                        <DateIcon />
                        <time>{eventDate}</time>
                    </div>
                    <div className={styles.address}>
                        <AddressIcon />
                        <address>{eventAddress}</address>
                    </div>
                </div>
                <div className={styles.actions}>
                    <Button link={`/events/${event.id}`} disabled>
                        <span>Ver Evento</span>
                        <span className={styles.icon}><ArrowRightIcon /></span>
                    </Button>
                </div>
            </div>
        </li>
    )
}

export default EventItem