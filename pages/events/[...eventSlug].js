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

    if (!events) {
        return (
            <div className="center" style={{marginTop: "3rem"}}>
                <p style={{fontSize: "1.125rem", color: "#55c"}}>
                    Carregando...
                </p>
            </div>
        )
    }

    const year = Number(filterData[0]);
    const month = Number(filterData[1]);

    if (isNaN(year) || isNaN(month) || year < 2021 || year > 2030 || month < 1 || month > 12 || error) {
        return (
            <>
                <Error>
                    <p>
                        Pesquisa inválida.
                    </p>
                </Error>
                <div className="center">
                    <Button link="/events" style={{display: "inline-block"}}>
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
                <Error>
                    <p>
                        Nenhum evento encontrado.
                    </p>
                </Error>
                <div className="center">
                    <Button link="/events" style={{display: "inline-block"}}>
                        Todos os eventos
                    </Button>
                </div>
            </>
        )
    }

    const date = new Date(year, month - 1);

    return (
        <>
            <ResultsTitle date={date} />
            <EventList featuredEvents={events} />
        </>
    )
}

export default FilteredEvent