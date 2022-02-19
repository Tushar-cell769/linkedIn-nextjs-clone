import React from "react";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import SearchIcon from "@mui/icons-material/Search";
import EditContainer from "./EditContainer";
import EditHeader from "./EditHeader";

const AnalyticsData = [
  {
    id: 0,
    icon: <PeopleIcon />,
    title: "58 Profile Views",
    description: "Discover who's viewed your profile.",
  },
  {
    id: 1,
    icon: <BarChartIcon />,
    title: "163 Post Views",
    description: "Check out who's engaging with your posts.",
  },
  {
    id: 2,
    icon: <SearchIcon />,
    title: "50 Search Appearances",
    description: "See how often you appear in search results.",
  },
];

const ProfileAnalysis = () => {
  return (
    <EditContainer>
      <EditHeader special headerTitle={"Analytics"} />
      <div className="flex flex-col mt-5 md:flex-row">
        {AnalyticsData.map((item) => (
          <div
            key={item.id}
            className="flex flex-row items-start justify-start mr-5 cursor-pointer last:mr-0"
          >
            <div className="text-black/60 dark:text-white">{item.icon}</div>
            <div className="ml-2">
              <h4 className="font-semibold text-black/90 dark:text-white hover:text-blue-500 hover:underline decoration-blue-500">
                {item.title}
              </h4>
              <p className="text-sm font-normal">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </EditContainer>
  );
};

export default ProfileAnalysis;
