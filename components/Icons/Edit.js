import React, { Fragment } from "react";
import EditIcon from "@mui/icons-material/Edit";

const Edit = ({ handleEvent }) => {
  return (
    <Fragment>
      {handleEvent ? (
        <div className="flex justify-end">
          <div
            onClick={() => handleEvent()}
            className="bg-white hover:bg-black/5 dark:bg-[#1d2226] dark:text-white dark:hover:bg-white/5 rounded-full top-4 right-4 text-black/60 w-10 h-10 flex justify-center items-center cursor-pointer"
          >
            <EditIcon className="!w-7" />
          </div>
        </div>
      ) : (
        <EditIcon className="!w-5" />
      )}
    </Fragment>
  );
};

export default Edit;
