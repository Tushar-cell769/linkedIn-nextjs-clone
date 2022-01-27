import React, { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import { getSession, useSession } from "next-auth/react";
import Profile from "../components/UserProfile/Profile";
import Widgets from "../components/Widgets";
import { profileModal } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";
import EditProfileModal from "../components/UserProfile/Modals/EditProfileModal";
import { AnimatePresence } from "framer-motion";
import { connectToDatabase } from "../util/mongodb";
import { ObjectId } from "mongodb";
import { useRouter } from "next/router";
import { handleSingleUserState, useSSRUserState } from "../atoms/userAtom";

const UserProfile = ({ user, articles }) => {
  const [editProfileModal, setEditProfileModal] = useRecoilState(profileModal);
  const [realtimeUser, setRealtimeUser] = useState([]);
  const [handleSingleUser, setHandleSingleUser] = useRecoilState(
    handleSingleUserState
  );
  const [useSSRUser, setUseSSRUser] = useRecoilState(useSSRUserState);
  const { data: session } = useSession();
  const router = useRouter();
  const { userid } = router.query;

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`/api/users/${userid}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseData = await response.json();
      setRealtimeUser(responseData);
      setHandleSingleUser(false);
      setUseSSRUser(false);
    };
    fetchUser();
  }, [handleSingleUser]);

  return (
    <div className="bg-[#f3f2ef] dark:bg-black dark:text-white h-screen overflow-y-scroll md:space-y-6">
      <Head>
        <title>{`${session?.user?.name} | LinkedIn`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex justify-center gap-x-5 px-4 sm:px-12">
        <div className="flex flex-col md:flex-row gap-5">
          <Profile user={useSSRUser ? user : realtimeUser} />
          <Widgets articles={articles} />
        </div>
        <AnimatePresence>
          {editProfileModal && (
            <EditProfileModal
              user={useSSRUser ? user : realtimeUser}
              handleClose={() => setEditProfileModal(false)}
            />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default UserProfile;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const { db } = await connectToDatabase();

  const user = await db
    .collection("users")
    .findOne({ _id: ObjectId(session?.user?.uid) });

  //Get Google News API
  const results = await fetch(
    `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.NEWS_API_KEY}`
  ).then((res) => res.json());

  return {
    props: {
      user: {
        _id: user._id.toString(),
        name: user.name,
        email: user.email,
        image: user.image,
        metadata: user.metadata ? user.metadata : null,
      },
      articles: results.articles,
    },
  };
}
