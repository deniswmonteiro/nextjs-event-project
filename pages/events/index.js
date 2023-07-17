import { useRouter } from "next/router";
import {getAllEvents} from "../dummy-data";
import EventsSearch from "../../components/events/EventsSearch";
import EventList from "../../components/events/EventList";

const Events = () => {
    const router = useRouter();
    const events = getAllEvents();

    function findEventsHandler(month, year) {
        const path = `/events/${year}/${month}`;

        router.push(path);
    }

    return (
        <>
            <EventsSearch events={events} onSearch={findEventsHandler} />
            <EventList featuredEvents={events} />
        </>
    )
}

export default Events