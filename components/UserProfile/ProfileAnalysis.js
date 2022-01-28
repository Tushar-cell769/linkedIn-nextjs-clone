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
      <div className="flex flex-col md:flex-row mt-5">
        {AnalyticsData.map((item) => (
          <div
            key={item.id}
            className="flex flex-row justify-start items-start mr-5  last:mr-0 cursor-pointer"
          >
            <div className="text-black/60">{item.icon}</div>
            <div className="ml-2">
              <h4 className="font-semibold text-black/90 hover:text-blue-500 hover:underline decoration-blue-500">
                {item.title}
              </h4>
              <p className="font-normal text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </EditContainer>
  );
};

export default ProfileAnalysis;
