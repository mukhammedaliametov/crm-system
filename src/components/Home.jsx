import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLayerGroup,
  faChalkboardUser,
  faGraduationCap,
  faWallet,
  faPercent,
  faUserMinus,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Home = ({ teachersNumber }) => {
  console.log(teachersNumber);
  const homeList = [
    {
      name: "Teachers",
      value: `${teachersNumber}`,
      icon: faChalkboardUser,
      link: '/teachers'
    },
    {
      name: "Groups",
      value: "6",
      icon: faLayerGroup,
      link: '/groups'
    },
    {
      name: "Students",
      value: "16",
      icon: faGraduationCap,
      link: '/students'
    },
    {
        name: "Paid",
        value: "7",
        icon: faWallet,
        link: '/paid'
    },
    {
        name: "Not Paid",
        value: "9",
        icon: faPercent,
        link: '/not-paid'
    },
    {
        name: "Gone",
        value: "2",
        icon: faUserMinus,
        link: '/gone'
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="pl-[130px] pt-[100px]">
      <div className="p-2">
        <h1 className="text-3xl font-montserrat">Home Page</h1>
        <p className="text-1xl font-montserrat py-1">
          Sit amet consectetur adipisicing elit. Cumque, optio
        </p>
      </div>
      <div className="flex items-center gap-4 p-4">
        {homeList.map((item, index) => (
          <div key={index} onClick={() => {navigate(`${item.link}`)}} className="shadow-md bg-slate-50 w-[15%] duration-300 hover:shadow-2xl px-8 py-4 rounded-lg text-center cursor-pointer">
            <FontAwesomeIcon
              icon={item.icon}
              className="text-5xl text-[#9A6DE5]"
            />
            <p className="py-2 text-[1.3rem] font-montserrat">{item.name}</p>
            <p className="text-2xl font-montserrat">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
