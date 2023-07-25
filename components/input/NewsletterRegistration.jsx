import React from "react";
import Button from "../ui/Button";
import styles from "./NewsletterRegistration.module.css";

const NewsletterRegistration = () => {
    const [email, setEmail] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [success, setSuccess] = React.useState(null);
    const emailRef = React.useRef();

    async function handleNewsletterRegistration(event) {
        event.preventDefault();

        setLoading(true);

        const response = await fetch("/api/newsletter", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email })
        });

        const result = await response.json();

        if (response.status === 500) {
            setLoading(false);
            setError(result.message);
            setTimeout(() => setError(null), 5000);
        }

        else if (response.status === 422) {
            setLoading(false);
            setError(result.message);
            setTimeout(() => setError(null), 5000);
        }

        else {
            setLoading(false);
            setSuccess(result.message);
            setTimeout(() => setSuccess(null), 5000);
            emailRef.current.value = "";
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.newsletter}>
                <h2>Registre-se para receber atualizações sobre os eventos</h2>

                <form onSubmit={handleNewsletterRegistration}
                    className={styles.form}>
                    <div className={styles.control}>
                        <label htmlFor="email">Email</label>
                        <div className={styles.inputGroup}>
                            <input type="email" id="email"
                                onChange={({target}) => setEmail(target.value)}
                                ref={emailRef} />
                            
                            {loading ? 
                                (
                                    <Button disabled>Registrando...</Button>
                                ) : (
                                    <Button>Registrar</Button>
                                )
                            }
                        </div>
                    </div>
                    
                    {success && <p className={styles.success}>{success}</p>}
                    {error && <p className={styles.error}>{error}</p>}
                </form>
            </div>
        </div>
    )
}

export default NewsletterRegistration