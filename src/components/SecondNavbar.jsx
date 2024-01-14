import React, { useState, useEffect } from "react";
import avatar from "../assets/avatar.png";
import { Link } from "react-router-dom";
import { FaRegClock, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";

const SecondNavbar = () => {
  const [time, setTime] = useState(new Date());
  const [profile, setProfile] = useState(0);

  const profileClick = () => {
    setProfile(!profile);
  };

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);

  return (
    <div className="shadow-lg fixed flex justify-between items-center bg-slate-100 w-full h-20 pl-[120px] pr-[30px]">
      <h1>Company Name</h1>
      <div className="flex justify-between items-center gap-3">
        <label htmlFor="search" className="cursor-pointer">
          <IoSearchOutline className="text-2xl" />
        </label>
        <input
          type="text"
          placeholder="Search"
          className="outline-none bg-transparent border-b-[2px] border-[#9A6DE5]"
          id="search"
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center gap-3 font-montserrat">
          <div className="border-r-[3px] border-[#9A6DE5] group pr-3">
            <FaRegClock
              className="hover:text-[#9A6DE5] cursor-pointer"
              size={25}
            />
            <p className="hidden group-hover:block font-bold absolute shadow-xl bg-white mt-2 -ml-3 p-[15px] rounded-md">
              {time.getHours()} - {time.getMinutes()} - {time.getSeconds()}
            </p>
          </div>
          <div className=" flex justify-between items-center">
            <div
              className="flex flex-col cursor-pointer"
              onClick={profileClick}
            >
              <span className="text-[0.9rem]">Mukhammedali Ametov</span>
              <span className="text-[0.8rem] text-right">Adminstration</span>
            </div>
            <img
              src={avatar}
              alt="avatar"
              width={70}
              className="rounded-full px-4"
            />
            <div onClick={profileClick}>
              {profile ? (
                <FaChevronUp className="cursor-pointer" />
              ) : (
                <FaChevronDown className="cursor-pointer" />
              )}
            </div>
            <div
              className={
                profile
                  ? "block absolute bg-slate-100 shadow-current top-[70px] right-3 border-[1px]"
                  : "hidden"
              }
            >
              <Link
                to="/profile"
                className="flex gap-2 items-center px-5 py-3 border-b-[1px] hover:text-[#9A6DE5]"
              >
                <FaRegUser size={20} /> Profile
              </Link>
              <Link
                to="/"
                className="flex gap-2 items-center px-5 py-3 text-red-500 hover:bg-red-500 hover:text-white"
              >
                <IoIosLogOut size={20} /> Logout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondNavbar;
