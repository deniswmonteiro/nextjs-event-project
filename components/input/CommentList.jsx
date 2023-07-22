import styles from "./CommentList.module.css";

const CommentList = ({comments}) => {
    return (
        <ul className={styles.comments}>
            {comments.map((comment) => (
                <li key={comment.id}>
                    <p>
                        {comment.commentText}
                    </p>
                    <span>
                        {comment.name}
                    </span>
                </li>
            ))}
        </ul>
    )
}

export default CommentList