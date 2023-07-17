import {getAllEvents} from "../dummy-data";
import EventList from "../../components/events/EventList";

const Events = () => {
    const events = getAllEvents();

    return (
        <div>
            <EventList featuredEvents={events} />
        </div>
    )
}

export default Events