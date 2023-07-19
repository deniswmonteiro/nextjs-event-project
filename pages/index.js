import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/EventList";

const Home = ({events}) => {    
    return (
        <div>
            <EventList featuredEvents={events} />
        </div>
    )
}

export async function getStaticProps() {
    const featuredEvents = await getFeaturedEvents();

    return {
        props: {
            events: featuredEvents,
        },
        revalidate: 1800
    }
}

export default Home