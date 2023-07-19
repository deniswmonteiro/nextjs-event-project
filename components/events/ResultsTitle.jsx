import Button from "../ui/Button";
import styles from "./ResultsTitle.module.css";

const ResultsTitle = ({ date }) => {
    return (
        <section className={styles.title}>
            <h1>Eventos em {date}</h1>

            <Button link="/events">Todos os eventos</Button>
        </section>
    )
}

export default ResultsTitle