import EventList from "@/components/events/EventList";
import { getFeaturedEvents } from "./dummy-data";

const Home = () => {
    const featuredEvents = getFeaturedEvents();
    
    return (
        <div>
            <EventList featuredEvents={featuredEvents} />
        </div>
    )
}

export default Home