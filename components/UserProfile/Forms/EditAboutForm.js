import React, { useState } from "react";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import { Controller, useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { handleSingleUserState } from "../../../atoms/userAtom";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { ContentState } from "draft-js";
import { convertFromHTML } from "draft-js";
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

const EditAboutForm = ({ user, editModalType, handleClose }) => {
  const { about } = user.metadata || {};
  const { data: session } = useSession();
  const [editorState, setEditorState] = useState(
    about
      ? EditorState.createWithContent(
          ContentState.createFromBlockArray(convertFromHTML(about))
        )
      : EditorState.createEmpty()
  );
  const [handleSingleUser, setHandleSingleUser] = useRecoilState(
    handleSingleUserState
  );

  const { handleSubmit, control } = useForm();

  const onEditorStateChange = (rawDraftContentState) => {
    setEditorState(rawDraftContentState);
  };

  const onSubmit = async () => {
    const html = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    const data = { about: html };
    const body = JSON.stringify({ toUpdate: "about", data: data.about });
    const response = await fetch(`/api/users/${session?.user?.uid}`, {
      method: "PUT",
      body,
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      handleClose();
      setHandleSingleUser(true);
    });
  };

  return (
    <div>
      <span className="text-sm text-black/80">
        You can write about your years of experience, industry, or skills.
        People also talk about their achievements or previous job experiences.
      </span>
      <form
        id={editModalType}
        className="mt-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        {window && (
          <Controller
            control={control}
            name="about"
            render={() => (
              <Editor
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={onEditorStateChange}
              />
            )}
          />
        )}
      </form>
    </div>
  );
};

export default EditAboutForm;
