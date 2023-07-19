import { useRef } from "react";
import Button from "../ui/Button";
import styles from "./EventsSearch.module.css";

const EventsSearch = ({ events, onSearch }) => {
    const monthRef = useRef();
    const yearRef = useRef();
    const years = [...new Set(events.map((event) => event.date.split("-")[0]))];

    function submitFormSearchEvent(event) {
        event.preventDefault();

        const selectedMonth = monthRef.current.value;
        const selectedYear = yearRef.current.value;

        onSearch(selectedMonth, selectedYear);
    }

    return (
        <div className={styles.wrapper}>
            <form className={styles.form} onSubmit={submitFormSearchEvent}>
                <div className={styles.controls}>
                    <div className={styles.control}>
                        <label htmlFor="month">
                            Mês
                        </label>
                        <select name="month" id="month" ref={monthRef}>
                            <option value="1">Janeiro</option>
                            <option value="2">Fevereiro</option>
                            <option value="3">Março</option>
                            <option value="4">Abril</option>
                            <option value="5">Maio</option>
                            <option value="6">Junho</option>
                            <option value="7">Julho</option>
                            <option value="8">Agosto</option>
                            <option value="9">Setembro</option>
                            <option value="10">Outubro</option>
                            <option value="11">Novembro</option>
                            <option value="12">Dezembro</option>
                        </select>
                    </div>
                    <div className={styles.control}>
                        <label htmlFor="year">
                            Ano
                        </label>
                        <select name="year" id="year" ref={yearRef}>
                            {years.map((year) => <option key={year} value={year}>{year}</option>)}
                        </select>
                    </div>
                </div>

                <Button>Pesquisar</Button>
            </form>
        </div>
    )
}

export default EventsSearch