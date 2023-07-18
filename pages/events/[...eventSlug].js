import { useRouter } from "next/router";
import { getFilteredEvents } from "../dummy-data";
import Error from "../../components/ui/Error";
import Button from "../../components/ui/Button";
import ResultsTitle from "@/components/events/ResultsTitle";
import EventList from "@/components/events/EventList";

const FilteredEvent = () => {
    const router = useRouter();
    const filterData = router.query.eventSlug;

    if (!filterData) return <p className="center">Loading...</p>

    const year = Number(filterData[0]);
    const month = Number(filterData[1]);

    if (isNaN(year) || isNaN(month) || year < 2021 || year > 2030 || month < 1 || month > 12) {
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

    const filteredEvents = getFilteredEvents({year, month});

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
            <EventList featuredEvents={filteredEvents} />
        </>
    )
}

export default FilteredEvent