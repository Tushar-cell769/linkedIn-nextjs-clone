import React from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
const ProfileAnalysis = () => {
  return (
    <div className="bg-white dark:bg-[#1d2226] rounded-lg mb-10 p-5">
      <h3 className="font-semibold text-xl text-black/90">Analytics</h3>
      <div className="flex flex-row items-center justify-start">
        <RemoveRedEyeIcon className="!text-black/60 mr-1" fontSize="25px" />
        <p className="text-black/60 dark:text-white text-sm font-normal">
          Private to you
        </p>
      </div>
      <div className="flex flex-col md:flex-row "></div>
    </div>
  );
};

export default ProfileAnalysis;
