import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./likeButton.module.scss";

function LikeButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className={styles.likeButton}>
      <button onClick={handleClick}>Lubię to!</button>
      <p>{count} polubień</p>
    </div>
  );
}

LikeButton.propTypes = {
  count: PropTypes.number,
};

export default LikeButton;
