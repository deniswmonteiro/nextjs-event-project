import {useRouter} from "next/router";
import {getEventById} from "../dummy-data";
import Error from "../../components/ui/Error";
import Button from "../../components/ui/Button";
import EventSummary from "../../components/event-detail/EventSummary";
import EventLogistics from "../../components/event-detail/EventLogistics";
import EventContent from "../../components/event-detail/EventContent";

const Event = () => {
    const router = useRouter();
    const event = getEventById(router.query.eventId);

    if (!event) {
        return (
            <>
                <Error>
                    <p>Evento não encontrado.</p>
                </Error>
                <div className="center">
                    <Button link="/" style={{display: "inline-block"}}>
                        Página inicial
                    </Button>
                </div>
            </>
        )
    }

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