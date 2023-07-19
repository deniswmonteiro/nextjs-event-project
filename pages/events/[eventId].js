import { getFeaturedEvents, getEventById } from "../../helpers/api-util";
import Error from "../../components/ui/Error";
import Button from "../../components/ui/Button";
import EventSummary from "../../components/event-detail/EventSummary";
import EventLogistics from "../../components/event-detail/EventLogistics";
import EventContent from "../../components/event-detail/EventContent";

const Event = ({event}) => {
    if (!event) {
        return (
            <div className="center" style={{marginTop: "3rem"}}>
                <p style={{fontSize: "1.125rem", color: "#55c"}}>
                    Carregando...
                </p>
            </div>
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

export async function getStaticProps(context) {
    const eventId = context.params.eventId;
    const event = await getEventById(eventId);

    return {
        props: {
            event: event
        },
        revalidate: 30
    }
}

export async function getStaticPaths() {
    const events = await getFeaturedEvents();
    const paths = events.map((event) => ({params: {eventId: event.id}}));

    return {
        paths: paths,
        fallback: true
    }
}

export default Event