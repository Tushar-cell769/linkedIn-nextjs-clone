import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import { Avatar } from "@mui/material";
import { useRecoilState } from "recoil";
import { editProfileModal } from "../../atoms/modalAtom";

const ProfileIntro = ({ intro, user }) => {
  const [editIntroModal, setEditIntroModal] = useRecoilState(editProfileModal);
  return (
    <div className="bg-white dark:bg-[#1d2226] rounded-lg mb-5">
      {/* Profile image header */}
      <div className="relative">
        <img
          className="rounded-t-lg"
          src="https://media-exp1.licdn.com/dms/image/C5616AQGPTD1LlLPS4Q/profile-displaybackgroundimage-shrink_350_1400/0/1614531265589?e=1648684800&v=beta&t=GgbNEXzq4OCh1mevycICjhBjDUdLDxXy8dAkOnmrozE"
          alt=""
        />
        <div className="absolute bg-white rounded-full top-4 right-4 text-blue-500 w-7 h-7 flex justify-center items-center cursor-pointer">
          <EditIcon className="!w-5" />
        </div>
        <div className="absolute -bottom-14 left-5 rounded-full border-4 border-white w-36 h-36">
          <Avatar src={user.image} className="w-full h-full" />
        </div>
      </div>
      {/* Edit Icon */}
      <div className="flex justify-end pr-4 pt-4">
        <div
          onClick={() => setEditIntroModal(true)}
          className="bg-white hover:bg-black/5 dark:bg-[#1d2226] dark:text-white dark:hover:bg-white/5 rounded-full top-4 right-4 text-black/60 w-10 h-10 flex justify-center items-center cursor-pointer"
        >
          <EditIcon className="!w-7" />
        </div>
      </div>
      {/* Profile Info */}
      <div className="flex flex-col md:flex-row">
        {/* Left */}
        <div className="w-9/12 pl-5 mt-5 pb-5">
          <h3 className="font-semibold text-2xl text-black/90">
            {intro ? intro.firstName + " " + intro.lastName : user.name}
          </h3>
          <p className="text-black/80 dark:text-white">{intro?.headline}</p>
          {/* Address */}
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
          {/* connections count */}
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
    </div>
  );
};

export default ProfileIntro;
