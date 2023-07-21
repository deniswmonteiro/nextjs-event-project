import styles from "./CommentList.module.css";

const CommentList = () => {
    return (
        <ul className={styles.comments}>
            {/* Render list of comments - fetched from API */}
            <li>
                <p>Comment</p>
                <span>Author</span>
            </li>
        </ul>
    )
}

export default CommentList