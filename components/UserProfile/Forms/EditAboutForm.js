import { useSession } from "next-auth/react";
import React from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { handleSingleUserState } from "../../../atoms/userAtom";

const EditAboutForm = ({ user, editModalType, handleClose }) => {
  const { about } = user.metadata || {};
  const { data: session } = useSession();
  const [handleSingleUser, setHandleSingleUser] = useRecoilState(
    handleSingleUserState
  );
  const { register, handleSubmit } = useForm({
    defaultValues: {
      about,
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
    handleClose();
    // let body;
    // body = JSON.stringify({ data });
    // const response = await fetch(`/api/users/${session?.user?.uid}`, {
    //   method: "PUT",
    //   body,
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // }).then(() => {
    //   handleClose();
    //   setHandleSingleUser(true);
    // });
  };

  return (
    <div>
      <span className="text-black/80 text-sm">
        You can write about your years of experience, industry, or skills.
        People also talk about their achievements or previous job experiences.
      </span>
      <form
        id={editModalType}
        className="mt-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <textarea
          {...register("about")}
          className="w-full h-full border border-gray-500 rounded-md focus:border-3"
        />
      </form>
    </div>
  );
};

export default EditAboutForm;
