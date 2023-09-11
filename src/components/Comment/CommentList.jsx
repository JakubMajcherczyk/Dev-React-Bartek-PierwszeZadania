import Comment from "./Comment";
import { useState } from "react";
import styles from "./Comment.module.scss";
import commentsData from "./commentsData.json";

function CommentList() {
  const [comments, setComments] = useState(commentsData.comments);

  //Aktualizacja listy odpowiedzi replies dla konkretnego komenatarza
  function setReplies(newReply, replies) {
    replies.replies.push(newReply);
  }

  return (
    <div className={styles.commentList}>
      <h2>Liczba komentarzy: {comments.length}</h2>
      {comments.map((comment) => (
        <Comment key={comment.id} username={comment.username} text={comment.text} replies={comment} setReplies={setReplies} />
      ))}
    </div>
  );
}

export default CommentList;
