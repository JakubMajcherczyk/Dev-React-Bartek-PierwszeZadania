import { useState, useRef, useEffect } from "react";
import styles from "./Comment.module.scss";

function Comment({ username, text, replies, setReplies }) {
  //Hook do stanu widoczności formularza odpowiedzi
  const [showForm, setShowForm] = useState(false);

  //Hook do przechowywania referencji do pola tekstowego formularza odpowiedzi
  //daje bezpośredni dostęp do DOM a wartość ustawiamy za pomocą .current
  // utrzymuje wartość między renderowaniami
  const inputRef = useRef(null);

  // F-cja pokazuje lub ukrywa formularz odpowiedzi po kliknięciu odpowiedz
  function handleReply() {
    setShowForm(!showForm);
  }

  // jeśli formularz jest pokazany to ustawiamy fokus na polu tekstowym
  useEffect(() => {
    if (showForm) {
      inputRef.current.focus();
    }
  }, [showForm]);

  //F-cja dodająca nową odpowiedź do listy odpowiedzi
  function handleSubmit(e) {
    e.preventDefault();
    // Pobieramy wartość z pola tekstowego
    const replyText = inputRef.current.value;
    // nowy obiekt odpowiedzi z username i text
    // const newReply = { username: "User", text: replyText };
    if (replyText.trim() !== "") {
      const newReply = {
        id: `${replies.id}.${replies.replies.length + 1}`,
        username: "User",
        text: replyText,
        replies: [],
      };
      //Dodajemy nową odpowiedź do listy odpowiedzi
      setReplies(newReply, replies);
      // sprzątamy pole tekstowe
      inputRef.current.value = "";
      //ukrywamy formularz
      setShowForm(false);
    }
  }

  return (
    <div className={styles.comment}>
      <p>
        <strong>
          {replies.id}&nbsp; {username}
        </strong>
        : {text}
      </p>
      <button onClick={handleReply}>Odpowiedz</button>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <input type="text" ref={inputRef} placeholder="Napisz odpowiedź" />
          <button type="submit">Wyślij</button>
        </form>
      )}
      {replies.replies.length > 0 && (
        <div className={styles.replies}>
          {replies.replies.map((reply, index) => (
            <Comment key={index} username={reply.username} text={reply.text} replies={reply} setReplies={setReplies} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Comment;
