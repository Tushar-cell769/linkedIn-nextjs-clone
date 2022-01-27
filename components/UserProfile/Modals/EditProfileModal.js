import { motion } from "framer-motion";
import React from "react";
import Backdrop from "../../Backdrop";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import IconButton from "@mui/material/IconButton";
import EditIntroForm from "../Forms/EditIntroForm";
import { editModalTypeState } from "../../../atoms/modalAtom";
import { useRecoilState } from "recoil";
import EditAboutForm from "../Forms/EditAboutForm";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const EditProfileModal = ({ user, handleClose }) => {
  const [editModalType, setEditModalType] = useRecoilState(editModalTypeState);
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="rounded-xl flex flex-col justify-center bg-white dark:bg-[#1D2226] w-full max-w-lg mx-6"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="flex items-center justify-between border-b px-4 py-2.5 border-gray-300">
          <h4 className="text-xl">Edit {editModalType}</h4>
          <IconButton onClick={handleClose}>
            <CloseRoundedIcon className="h-7 w-7 dark:text-white/75" />
          </IconButton>
        </div>

        <div className="p-4">
          {editModalType === "Intro" ? (
            <EditIntroForm
              user={user}
              handleClose={handleClose}
              editModalType={editModalType}
            />
          ) : editModalType === "About" ? (
            <EditAboutForm
              user={user}
              handleClose={handleClose}
              editModalType={editModalType}
            />
          ) : null}
          <div className="flex items-center justify-end border-t mt-6 border-gray-300">
            <button
              type="submit"
              className="editModalSavebtn"
              form={editModalType}
            >
              Save
            </button>
          </div>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default EditProfileModal;
