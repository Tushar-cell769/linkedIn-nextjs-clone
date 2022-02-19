import { EditorState } from "draft-js";
import { convertFromHTML } from "draft-js";
import { convertToRaw } from "draft-js";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { profileModal, editModalTypeState } from "../../atoms/modalAtom";
import EditContainer from "./EditContainer";
import EditHeader from "./EditHeader";

const ProfileAbout = ({ about }) => {
  const [editProfileModal, setEditProfileModal] = useRecoilState(profileModal);
  const [editModalType, setEditModalType] = useRecoilState(editModalTypeState);
  const [render, setRender] = useState(false);

  useEffect(() => {
    setRender(true);
  }, []);

  const handleModal = () => {
    setEditProfileModal(true);
    setEditModalType("About");
  };

  useEffect(() => {
    if (render && about) {
      handleContent(about);
    }
  }, [about, render]);

  const handleContent = (about) => {
    const contentBlock = convertFromHTML(about);
    let html;
    if (contentBlock.contentBlocks.length === 0) {
      html = "Click on edit button to write about yourself.";
    } else {
      html = about;
    }
    return {
      __html: html,
    };
  };

  return (
    render && (
      <EditContainer>
        <EditHeader
          headerTitle={"About"}
          headerIcon
          handleEvent={() => handleModal()}
        />
        <div className="mt-5">
          <p
            className="text-sm text-black/90 dark:text-white about-user-editor"
            dangerouslySetInnerHTML={handleContent(about)}
          ></p>
        </div>
      </EditContainer>
    )
  );
};

export default ProfileAbout;
