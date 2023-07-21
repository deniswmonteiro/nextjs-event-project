import React from "react";
import styles from "./NewComment.module.css";
import Button from "../ui/Button";

const NewComment = ({ onAddComment }) => {
    const [invalid, setInvalid] = React.useState(false);
    const emailRef = React.useRef();
    const nameRef = React.useRef();
    const commentRef = React.useRef();

    async function handleCommentFormSubmit(event) {
        event.preventDefault();

        const email = emailRef.current.value;
        const name = nameRef.current.value;
        const comment = commentRef.current.value;

        if (!enteredEmail || enteredEmail.trim() === "" || !enteredEmail.includes("@") ||
            !enteredName || enteredName.trim() === "" ||
            !enteredComment || enteredComment.trim() === "") {
                setInvalid(true);
                return false;
        }

        else {
            onAddComment({ email, name, comment });
        }
    }

    return (
        <form className={styles.form} onSubmit={handleCommentFormSubmit}>
            <div className={styles.row}>
                <div className={styles.control}>
                    <label htmlFor="email">
                        Email
                    </label>
                    <input type="email" id="email"
                        ref={emailRef} />
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.control}>
                    <label htmlFor="name">
                        Nome
                    </label>
                    <input type="text" id="nome"
                        ref={nameRef} />
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.control}>
                    <label htmlFor="comment">Comentário</label>
                    <textarea id="comment" rows="5"
                        ref={commentRef}></textarea>
                </div>
            </div>
            
            {invalid && <p>Preencha um Email e um Comentário válido.</p>}

            <Button>Enviar</Button>
        </form>
    )
}

export default NewComment