// import React from "react";
import ProfilePicture from "./ProfilePicture";
import ProfileDetails from "./ProfileDetails";
import styles from "./UserProfile.module.scss";

const UserProfile = ({ src, name, email }) => {
  return (
    <div className={styles.userProfile}>
      <ProfilePicture src={src} />
      <ProfileDetails name={name} email={email} />
    </div>
  );
};

export default UserProfile;
