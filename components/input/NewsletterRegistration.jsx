import Button from "../ui/Button";
import styles from "./NewsletterRegistration.module.css";

const NewsletterRegistration = () => {
    async function handleNewsletterRegistration(event) {
        event.preventDefault();

        // fetch user input (state or refs)
        // optional: validate input
        // send valid data to API
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.newsletter}>
                <h2>Registre-se para receber notícias</h2>

                <form onSubmit={handleNewsletterRegistration}
                    className={styles.form}>
                    <div className={styles.control}>
                        <label htmlFor="email">Email</label>
                        <div className={styles.inputGroup}>
                            <input type="email" id="email" />
                            <Button>Registrar</Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewsletterRegistration