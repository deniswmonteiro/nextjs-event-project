import EventItem from "./EventItem";
import styles from "./EventList.module.css";

const EventList = ({featuredEvents}) => {
    return (
        <ul className={styles.list}>
            {featuredEvents.map((event) => <EventItem key={event.id} event={event} />)}
        </ul>
    )
}

export default EventList