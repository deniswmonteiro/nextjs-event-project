import React from "react";
import NewComment from "./NewComment";
import CommentList from "./CommentList";
import styles from "./Comments.module.css";

const Comments = ({ eventId }) => {
    const [comments, setComments] = React.useState([]);
    const [getloading, setGetLoading] = React.useState(null);
    const [postLoading, setPostLoading] = React.useState(null);
    const [getError, setGetError] = React.useState(null);
    const [postError, setPostError] = React.useState(null);
    const [success, setSuccess] = React.useState(null);
    const [commentAdded, setCommentAdded] = React.useState(null);

    React.useEffect(() => {
        getComments(true);
    }, []);

    async function getComments(isFirstReload) {
        if (isFirstReload) setGetLoading(true);

        const response = await fetch(`/api/comments/${eventId}`);
        const result = await response.json();

        if (response.status === 500) {
            if (isFirstReload) setGetLoading(false);
            setGetError(result.message);
        }

        else {
            if (isFirstReload) setGetLoading(false);
            setComments(result.comments);
        }
    }

    async function handleAddComment(commentData) {
        setPostLoading(true);

        const response = await fetch(`/api/comments/${eventId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(commentData)
        });

        const result = await response.json();

        if (response.status === 500) {
            setPostLoading(false);
            setCommentAdded(false);
            setPostError(result.message);
            setTimeout(() => setPostError(null), 5000);
        }

        else {
            setPostLoading(false);
            setCommentAdded(true);
            setSuccess(result.message);
            setTimeout(() => setSuccess(null), 5000);
            await getComments(false);
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.commentsSection}>
                <h2>Deixe o seu comentário</h2>

                <div className={styles.comments}>
                    <NewComment onAddComment={handleAddComment}
                        errorMessage={postError}
                        successMessage={success}
                        commentAdded={commentAdded}
                        loading={postLoading} />

                    {getloading ?
                        (
                            <p className={styles.loading}>
                                Carregando os comentários...
                            </p>
                        ) : (
                            (
                                comments.length > 0 ?
                                    (
                                        <CommentList comments={comments} />
                                    ) : (
                                        (
                                            getError ?
                                                (
                                                    <p className={styles.noComments}>
                                                        {getError}
                                                    </p>
                                                ) : (
                                                    <p className={styles.noComments}>
                                                        Seja o primeiro a comentar.
                                                    </p>
                                                )
                                        )
                                    )
                            )
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Comments