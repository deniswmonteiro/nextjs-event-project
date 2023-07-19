import { useRouter } from "next/router";
import { getAllEvents } from "../../helpers/api-util";
import EventsSearch from "../../components/events/EventsSearch";
import EventList from "../../components/events/EventList";

const Events = ({events}) => {
    const router = useRouter();

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

export async function getStaticProps() {
    const events = await getAllEvents();

    return {
        props: {
            events: events
        },
        revalidate: 60
    }
}

export default Events