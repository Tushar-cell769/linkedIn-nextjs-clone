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
      <div className="relative">
        <img
          className="rounded-t-lg"
          src="https://media-exp1.licdn.com/dms/image/C5616AQGPTD1LlLPS4Q/profile-displaybackgroundimage-shrink_350_1400/0/1614531265589?e=1648684800&v=beta&t=GgbNEXzq4OCh1mevycICjhBjDUdLDxXy8dAkOnmrozE"
          alt=""
        />
        <div className="absolute bg-white rounded-full top-4 right-4 text-blue-500 w-7 h-7 flex justify-center items-center cursor-pointer">
          <Edit />
        </div>
        <div className="absolute -bottom-14 left-5 rounded-full border-4 border-white w-36 h-36">
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
            <h3 className="font-semibold text-2xl text-black/90">
              {intro ? intro.firstName + " " + intro.lastName : user.name}
            </h3>
            <p className="text-black/80 dark:text-white">{intro?.headline}</p>
            <div className="flex justify-start items-center">
              <p className="text-black/60 dark:text-white text-sm font-normal">
                {intro?.city}, <span>{intro?.country}</span>
              </p>
              {(intro?.city || intro?.country) && (
                <button
                  type="button"
                  className="ml-2 text-blue-500 font-semibold hover:underline text-base"
                >
                  Contact info
                </button>
              )}
            </div>
            <div>
              <button
                type="button"
                className="mt-2 text-blue-500 font-semibold hover:underline text-base"
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
