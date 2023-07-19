import Head from "next/head";
import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/EventList";

const Home = ({ events }) => {    
    return (
        <section>
            <Head>
                <title>NextEvents &bull; Próximos Eventos</title>
                <meta name="description"
                    content="Encontre o próximo evento que você pode fazer parte." />
            </Head>

            <h1 className="title titleDark" style={{ marginTop: "3rem" }}>
                Próximos Eventos
            </h1>

            <EventList featuredEvents={events} />
        </section>
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