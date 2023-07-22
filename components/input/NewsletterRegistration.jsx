import React from "react";
import Button from "../ui/Button";
import styles from "./NewsletterRegistration.module.css";

const NewsletterRegistration = () => {
    const [email, setEmail] = React.useState("");
    const emailRef = React.useRef();

    async function handleNewsletterRegistration(event) {
        event.preventDefault();

        const response = await fetch("/api/newsletter", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email })
        });

        if (response.ok) emailRef.current.value = "";
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
                            <input type="email" id="email"
                                onChange={({target}) => setEmail(target.value)}
                                ref={emailRef} />
                            <Button>Registrar</Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewsletterRegistration