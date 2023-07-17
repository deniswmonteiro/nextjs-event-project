import {useRouter} from "next/router";
import {getEventById} from "../dummy-data";
import EventSummary from "../../components/event-detail/EventSummary";
import EventLogistics from "../../components/event-detail/EventLogistics";
import EventContent from "../../components/event-detail/EventContent";

const Event = () => {
    const router = useRouter();
    const event = getEventById(router.query.eventId);

    if (!event) return <p>Evento não encontrado.</p>

    return (
        <>
            <EventSummary title={event.title} />
            <EventLogistics event={event} />
            <EventContent>
                {event.description}
            </EventContent>
        </>
    )
}

export default Event