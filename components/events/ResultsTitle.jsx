import Button from "../ui/Button";
import styles from "./ResultsTitle.module.css";

const ResultsTitle = ({date}) => {
    const eventDate = new Date(date).toLocaleDateString("pt-BR", {
        month: "long",
        year: "numeric"
    });

    return (
        <section className={styles.title}>
            <h1>Eventos em {eventDate}</h1>

            <Button link="/events">Todos os eventos</Button>
        </section>
    )
}

export default ResultsTitle