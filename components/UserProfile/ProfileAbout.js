import React from "react";
import { useRecoilState } from "recoil";
import { profileModal, editModalTypeState } from "../../atoms/modalAtom";
import EditContainer from "./EditContainer";
import EditHeader from "./EditHeader";

const ProfileAbout = ({ about }) => {
  const [editProfileModal, setEditProfileModal] = useRecoilState(profileModal);
  const [editModalType, setEditModalType] = useRecoilState(editModalTypeState);

  const handleModal = () => {
    setEditProfileModal(true);
    setEditModalType("About");
  };
  return (
    <EditContainer>
      <EditHeader
        headerTitle={"About"}
        headerIcon
        handleEvent={() => handleModal()}
      />
      <div className="mt-5">
        <p className="text-sm text-black/90">
          {about ? about : "Click on edit button to write about yourself."}
        </p>
      </div>
    </EditContainer>
  );
};

export default ProfileAbout;
