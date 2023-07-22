import React from "react";
import NewComment from "./NewComment";
import CommentList from "./CommentList";
import styles from "./Comments.module.css";

const Comments = ({ eventId }) => {
    const [comments, setComments] = React.useState([]);

    React.useEffect(() => {
        getComments();
    }, []);

    async function getComments() {
        const response = await fetch(`/api/comments/${eventId}`);
        const result = await response.json();

        if (response.ok) setComments(result.comments);
    }

    async function handleAddComment(commentData) {
        const response = await fetch(`/api/comments/${eventId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(commentData)
        });

        if (response.ok) getComments();
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.commentsSection}>
                <h2>Deixe o seu comentário</h2>

                <div className={styles.comments}>
                    <NewComment onAddComment={handleAddComment} />
                    {comments && <CommentList comments={comments} />}
                </div>
            </div>
        </div>
    )
}

export default Comments