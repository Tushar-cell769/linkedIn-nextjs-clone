import Image from "next/image";
import React, { Fragment } from "react";
import { useRecoilState } from "recoil";
import { editModalTypeState, profileModal } from "../../atoms/modalAtom";
import Edit from "../Icons/Edit";
import EditContainer from "./EditContainer";
import EditHeader from "./EditHeader";

const ProfileIntro = ({ intro, user }) => {
  const [editProfileModal, setEditProfileModal] = useRecoilState(profileModal);
  const [editModalType, setEditModalType] = useRecoilState(editModalTypeState);

  const handleModal = () => {
    setEditProfileModal(true);
    setEditModalType("Intro");
  };

  return (
    <Fragment>
      <div className="relative w-full h-[195px]">
        <Image
          className="rounded-t-lg"
          src="https://rb.gy/i26zak"
          layout="fill"
          priority
        />
        <div className="absolute flex items-center justify-center text-blue-500 bg-white rounded-full cursor-pointer top-4 right-4 w-7 h-7">
          <Edit />
        </div>
        <div className="absolute border-4 border-white rounded-full -bottom-14 left-5 w-36 h-36">
          <img
            src={user.image}
            className="w-full h-full rounded-full"
            alt="user-img"
          />
        </div>
      </div>
      <EditContainer>
        <EditHeader headerIcon handleEvent={() => handleModal()} />
        <div className="flex flex-col md:flex-row">
          <div className="w-9/12 mt-3">
            <h3 className="text-2xl font-semibold text-black/90 dark:text-white">
              {intro ? intro.firstName + " " + intro.lastName : user.name}
            </h3>
            <p className="text-black/80 dark:text-white">{intro?.headline}</p>
            <div className="flex items-center justify-start">
              <p className="text-sm font-normal text-black/60 dark:text-white">
                {intro?.city}, <span>{intro?.country}</span>
              </p>
              {(intro?.city || intro?.country) && (
                <button
                  type="button"
                  className="ml-2 text-base font-semibold text-blue-500 hover:underline"
                >
                  Contact info
                </button>
              )}
            </div>
            <div>
              <button
                type="button"
                className="mt-2 text-base font-semibold text-blue-500 hover:underline"
              >
                500+ Connections
              </button>
            </div>
          </div>
        </div>
      </EditContainer>
    </Fragment>
  );
};

export default ProfileIntro;
