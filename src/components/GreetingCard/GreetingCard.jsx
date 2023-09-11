// import React from "react";
import PropTypes from "prop-types";
import styles from "./GreetingCard.module.scss";

const GreetingCard = ({ name }) => {
  return (
    <div className={styles.greetingCard}>
      <h1>Hello, {name}!</h1>
    </div>
  );
};

GreetingCard.propTypes = {
  name: PropTypes.string,
};

export default GreetingCard;
