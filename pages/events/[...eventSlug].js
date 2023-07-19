import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";
import useSwr from "swr";
import Error from "../../components/ui/Error";
import Button from "../../components/ui/Button";
import ResultsTitle from "../../components/events/ResultsTitle";
import EventList from "../../components/events/EventList";

const FilteredEvent = () => {
    const [events, setEvents] = React.useState(null);
    const router = useRouter();
    const filterData = router.query.eventSlug;

    const {data, error} = useSwr("https://events-d8e86-default-rtdb.firebaseio.com/events.json",
        async(url) => (await fetch(url)).json());

    React.useEffect(() => {
        if (data) {
            const arrEvents = [];

            for (let key in data) {
                arrEvents.push({
                    id: key,
                    ...data[key]
                });
            }

            setEvents(arrEvents);
        }
    }, [data]);

    let pageHead = (
        <Head>
            <title>NextEvents &bull; Lista de Eventos Buscados</title>
            <meta name="description"
                content={`Lista com todos os eventos no mês buscado.`} />
        </Head>
    );

    if (!events) {
        return (
            <div className="center" style={{ marginTop: "3rem" }}>
                {pageHead}

                <p style={{ fontSize: "1.125rem", color: "#55c" }}>
                    Carregando...
                </p>
            </div>
        )
    }

    const year = Number(filterData[0]);
    const month = Number(filterData[1]);
    const date = new Date(year, month - 1);
    const eventDate = new Date(date).toLocaleDateString("pt-BR", {
        month: "long",
        year: "numeric"
    });

    pageHead = (
        <Head>
            <title>NextEvents &bull; Eventos em {eventDate}</title>
            <meta name="description"
                content={`Todos os eventos no mês de ${eventDate}.`} />
        </Head>
    );

    if (isNaN(year) || isNaN(month) || year < 2021 || year > 2030 || month < 1 || month > 12 || error) {
        return (
            <>
                {pageHead}

                <Error>
                    <p>
                        Pesquisa inválida.
                    </p>
                </Error>
                <div className="center">
                    <Button link="/events" style={{ display: "inline-block" }}>
                        Todos os eventos
                    </Button>
                </div>
            </>
        )
    }

    const filteredEvents = events.filter((event) => {
        const eventDate = new Date(event.date);

        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });

    if (!filteredEvents || filteredEvents.length === 0) {
        return (
            <>
                {pageHead}

                <Error>
                    <p>
                        Nenhum evento encontrado.
                    </p>
                </Error>
                <div className="center">
                    <Button link="/events" style={{ display: "inline-block" }}>
                        Todos os eventos
                    </Button>
                </div>
            </>
        )
    }

    return (
        <>
            {pageHead}

            <ResultsTitle date={eventDate} />
            <EventList featuredEvents={events} />
        </>
    )
}

export default FilteredEvent