import React from "react";
import Button from "../ui/Button";
import styles from "./NewComment.module.css";

const NewComment = ({ onAddComment, errorMessage, successMessage, commentAdded, loading }) => {
    const [invalid, setInvalid] = React.useState(false);
    const emailRef = React.useRef();
    const nameRef = React.useRef();
    const commentRef = React.useRef();

    async function handleCommentFormSubmit(event) {
        event.preventDefault();

        let email = emailRef.current.value;
        let name = nameRef.current.value;
        let comment = commentRef.current.value;

        if (!email || email.trim() === "" || !email.includes("@") ||
            !name || name.trim() === "" ||
            !comment || comment.trim() === "") {
                setInvalid(true);
                setLoading(false);
        }

        else {
            
            if (commentAdded) {
                emailRef.current.value = "";
                nameRef.current.value = "";
                commentRef.current.value = "";
            }
            
            setInvalid(false);
            onAddComment({ email, name, comment });
        }
    }

    return (
        <form className={styles.form} onSubmit={handleCommentFormSubmit}>
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
                    <label htmlFor="email">
                        Email
                    </label>
                    <input type="email" id="email"
                        ref={emailRef} />
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.control}>
                    <label htmlFor="comment">Comentário</label>
                    <textarea id="comment" rows="5"
                        ref={commentRef}></textarea>
                </div>
            </div>

            {successMessage && <p className={styles.success}>{successMessage}</p>}
            {errorMessage && <p className={styles.error}>{errorMessage}</p>}
            {invalid && <p className={styles.error}>Preencha os campos corretamente.</p>}

            {loading ?
                (
                    <Button disabled>Adicionando...</Button>
                ) : (
                    <Button>Adicionar</Button>
                )
            }
        </form>
    )
}

export default NewComment