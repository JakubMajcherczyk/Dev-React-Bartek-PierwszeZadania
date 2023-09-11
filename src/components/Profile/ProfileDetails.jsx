// import React from "react";
import PropTypes from "prop-types";
import styles from "./UserProfile.module.scss";

const ProfileDetails = ({ name, email }) => {
  return (
    <div className={styles.ProfileDetails}>
      <p>{name}</p>
      <p>{email}</p>
    </div>
  );
};

ProfileDetails.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
};

export default ProfileDetails;
