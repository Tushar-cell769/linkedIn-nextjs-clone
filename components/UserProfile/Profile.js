import React from "react";
import ProfileAnalysis from "./ProfileAnalysis";
import ProfileIntro from "./ProfileIntro";

const Profile = ({ user }) => {
  const { intro } = user.metadata || {};

  return (
    <div className="w-[751px] rounded-lg">
      <ProfileIntro intro={intro} user={user} />
      <ProfileAnalysis />
    </div>
  );
};

export default Profile;
