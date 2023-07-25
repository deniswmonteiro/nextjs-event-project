import styles from "./CommentList.module.css";

const CommentList = ({comments}) => {
    return (
        <ul className={styles.comments}>
            {comments.map((comment) => (
                <li key={comment._id}>
                    <p>
                        {comment.commentText}
                    </p>
                    <span className={styles.author}>
                        {comment.name}
                    </span>
                    <span className={styles.date}>
                        {comment.date}
                    </span>
                </li>
            ))}
        </ul>
    )
}

export default CommentList