import React from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Edit from "../Icons/Edit";

const EditHeader = ({ special, headerTitle, headerIcon, handleEvent }) => {
  return (
    <div
      className={`${
        headerIcon && "flex flex-row justify-between items-center"
      }`}
    >
      <h3 className="text-xl font-semibold text-black/90 dark:text-white">
        {headerTitle}
      </h3>
      {headerIcon && <Edit handleEvent={handleEvent} />}

      {special && (
        <div className="flex flex-row items-center justify-start">
          <RemoveRedEyeIcon
            className="!text-black/60 mr-1 dark:!text-white"
            fontSize="25px"
          />
          <p className="text-sm font-normal text-black/60 dark:text-white">
            Private to you
          </p>
        </div>
      )}
    </div>
  );
};

export default EditHeader;
