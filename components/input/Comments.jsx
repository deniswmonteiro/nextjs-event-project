import NewComment from "./NewComment";
import CommentList from "./CommentList";
import styles from "./Comments.module.css";

const Comments = ({eventId}) => {
    async function handleAddComment(commentData) {
        // send data to API
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.commentsSection}>
                <h2>Deixe o seu comentário</h2>

                <div className={styles.comments}>
                    <NewComment onAddComment={handleAddComment} />
                    <CommentList />
                </div>
            </div>
        </div>
    )
}

export default Comments