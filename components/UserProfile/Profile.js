import React from "react";
import ProfileAbout from "./ProfileAbout";
import ProfileAnalysis from "./ProfileAnalysis";
import ProfileIntro from "./ProfileIntro";

const Profile = ({ user }) => {
  const { intro, about } = user.metadata || {};

  return (
    <div className="w-[751px] rounded-lg">
      <ProfileIntro intro={intro} user={user} />
      <ProfileAnalysis />
      <ProfileAbout about={about} />
    </div>
  );
};

export default Profile;
