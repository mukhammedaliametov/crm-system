import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import SecondNavbar from "./SecondNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faChalkboardUser,
  faLayerGroup,
  faGraduationCap,
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const navItems = [
    {
      name: "home",
      link: "/",
      icon: faHouse,
    },
    {
      name: "teachers",
      link: "/teachers",
      icon: faChalkboardUser,
    },
    {
      name: "groups",
      link: "/groups",
      icon: faLayerGroup,
    },
    {
      name: "students",
      link: "/students",
      icon: faGraduationCap,
    },
  ];

  const [nav, setNav] = useState(0);

  const handleClick = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <>
      <div>
        <SecondNavbar />
        <div
          className={
            nav
              ? "h-screen fixed top-0 z-10 shadow-lg w-80 flex flex-col justify-between p-[20px] bg-slate-100 duration-300 ease-out"
              : "h-screen fixed top-0 z-10 shadow-lg w-[100px] flex flex-col justify-between items-center p-[20px] bg-slate-100 duration-300 ease-out"
          }
        >
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className={
                nav ? "text-[#9A6DE5] text-[1.8rem] font-bold" : "hidden"
              }
            >
              CRM
            </Link>
            <div onClick={handleClick}>
              <FontAwesomeIcon icon={nav ? faArrowLeft : faArrowRight} className="text-2xl cursor-pointer" />
            </div>
          </div>
          <ul className={nav ? "flex gap-3 flex-col" : "hidden"}>
            {navItems.map((item, index) => (
              <li key={index} onClick={closeNav}>
                <Link
                  to={item.link}
                  className="flex capitalize border-[1px] font-montserrat items-center text-[#9A6DE5] hover:bg-[#9A6DE5] hover:text-[#fff] duration-300 gap-4 shadow-inner p-[10px] rounded-lg bg-white"
                >
                  <FontAwesomeIcon icon={item.icon} className="text-2xl" /> {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul className={nav ? "hidden" : "flex gap-3 flex-col"}>
            {navItems.map((item, index) => (
              <Link to={item.link} key={index}>
                <FontAwesomeIcon icon={item.icon} className="bg-white border-[1px] p-[10px] shadow-inner text-2xl cursor-pointer rounded-lg text-[#9A6DE5] hover:text-white hover:bg-[#9A6DE5] duration-300" />
              </Link>
            ))}
          </ul>
          <footer className={nav ? "border-t-[1px] border-[#000]" : ""}>
            {nav ? (
              <a href="#" className="pt-3">
                Developed by M.Ametov
              </a>
            ) : (
              <a href="#" className="pt-3">
                M.Ametov
              </a>
            )}
          </footer>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;
