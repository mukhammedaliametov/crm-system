import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import Button from "./Button";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import TeacherInfo from "./TeacherInfo";
import Home from "./Home";

const getDatafromLS = () => {
  const data = localStorage.getItem("teachers");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const Teachers = () => {
  // text to slug
  const convertToSlug = (Text) => {
    return Text.toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  };

  // User module
  const [user, setUser] = useState(false);
  const addUserModule = () => {
    setUser(!user);
    setModuleTitle('Add Teacher')
    setFullname("");
    setPnumber("");
    setDate("");
    setCard("");
    setCardn("");
    setPersonaln("");
    setEwallet("");
  };

  const closeUserModule = () => {
    setUser(false);
  };

  // Teacher info local storage
  const [teachers, setTeachers] = useState(getDatafromLS());

  const [fullname, setFullname] = useState("");
  const [pnumber, setPnumber] = useState("");
  const [date, setDate] = useState("");
  const [card, setCard] = useState("");
  const [cardn, setCardn] = useState("");
  const [personaln, setPersonaln] = useState("");
  const [ewallet, setEwallet] = useState("");

  const handleSubmit = (e) => {
    let info = {
      fullname,
      pnumber,
      date,
      card,
      cardn,
      personaln,
      ewallet,
    };
    setTeachers([...teachers, info]);
    setFullname("");
    setPnumber("");
    setDate("");
    setCard("");
    setCardn("");
    setPersonaln("");
    setEwallet("");
    setUser(false);
  };

  useEffect(() => {
    localStorage.setItem("teachers", JSON.stringify(teachers));
  }, [teachers]);

  // Delete user
  const removeUser = (fullname) => {
    const filterUser = teachers.filter((element, index) => {
      return element.fullname !== fullname;
    });
    setTeachers(filterUser);
  };

  // Edit user
  const editUser = (fullname) => {
    addUserModule();
    console.log(teachers);
    const index = teachers.findIndex(
      (element) => element.fullname === fullname
    );
    setModuleTitle('Update Teacher')


    if (index !== -1) {
      const editItem = teachers[index];
      setFullname(editItem.fullname);
      setPnumber(editItem.pnumber);
      setDate(editItem.date);
      setCard(editItem.card);
      setCardn(editItem.cardn);
      setPersonaln(editItem.personaln);
      setEwallet(editItem.ewallet);
    } else {
      console.error(`User with fullname '${fullname}' not found.`);
    }
  };

  // module title
  const [moduleTitle, setModuleTitle] = useState(null);

  return (
    <div className="pl-[110px] pt-[100px] z-0">
      <div
        className={
          user
            ? "fixed w-100 h-screen z-20 bg-black/50 top-0 left-0 right-0 flex justify-center duration-300"
            : " duration-300 fixed w-100 h-screen z-20 bg-black/50 -top-[700px] left-0 right-0 flex justify-center"
        }
      >
        <div className="flex flex-col justify-between p-5 bg-white w-[35%]">
          <div className="flex justify-between items-center">
          <span className="text-[1.1rem] font-montserrat">{moduleTitle}</span>
          <IoClose onClick={closeUserModule} className="text-[1.3rem] cursor-pointer" />
          </div>
          <form className="flex flex-col gap-3 w-full pt-4">
            <input
              type="text"
              className="border-[1px] shadow-inner py-2 px-3 rounded-md w-full outline-none"
              placeholder="Full Name"
              onChange={(e) => setFullname(e.target.value)}
              value={fullname}
            />
            <input
              type="tel"
              className="border-[1px] shadow-inner py-2 px-3 rounded-md w-full outline-none"
              placeholder="Phone Number"
              onChange={(e) => setPnumber(e.target.value)}
              value={pnumber}
            />
            <input
              type="date"
              className="border-[1px] shadow-inner py-2 px-3 rounded-md w-full outline-none"
              min="1990-01-01"
              max="2007-12-06"
              onChange={(e) => setDate(e.target.value)}
              value={date}
            />
            <select
              className="border-[1px] shadow-inner py-2 px-3 rounded-md w-full outline-none"
              onChange={(e) => setCard(e.target.value)}
              value={card}
            >
              <option value="KA">KA</option>
              <option value="AD">AD</option>
            </select>
            <input
              type="number"
              className="border-[1px] shadow-inner py-2 px-3 rounded-md w-full outline-none"
              placeholder="Card Number"
              onChange={(e) => setCardn(e.target.value)}
              value={cardn}
            />
            <input
              type="number"
              className="border-[1px] shadow-inner py-2 px-3 rounded-md w-full outline-none"
              placeholder="Personal Number"
              onChange={(e) => setPersonaln(e.target.value)}
              value={personaln}
            />
            <input
              type="number"
              className="border-[1px] shadow-inner py-2 px-3 rounded-md w-full outline-none"
              placeholder="E-Wallet Number"
              onChange={(e) => setEwallet(e.target.value)}
              value={ewallet}
            />
          </form>
          <div className=" gap-2 mt-4 disabled:text-2xl">
            <div onClick={handleSubmit} className={user ? "block" : "hidden"}>
              <Button name="Add Teacher" />
            </div>
            <div onClick={editUser} className="hidden">
              <Button name="Edit Teacher" />
            </div>
          </div>
        </div>
      </div>
      <div className="py-2 px-8 flex justify-between items-center">
        <div className="flex items-end font-montserrat">
          <h1 className="text-3xl font-montserrat mr-3">Teachers</h1>
          <span className="text-1xl">total - {teachers.length}</span>
        </div>
        <div onClick={addUserModule}>
          <Button name="Add Teacher" icon={faUserPlus} />
        </div>
      </div>
      <div id="teachers" className="grid grid-cols-2 px-10 mt-4 gap-4">
        {teachers.map((teacher) => (
          <div
            key={teacher}
            className="flex justify-between overflow-hidden pl-8 items-center duration-300 hover:shadow-2xl bg-slate-50 shadow-md font-montserrat rounded-lg px-0"
          >
            <Link
              className="cursor-pointer hover:text-[#9A6DE5]"
              to={convertToSlug(`/${teacher.fullname}`)}
            >
              {teacher.fullname}
            </Link>
            <p>{teacher.pnumber}</p>
            <p>0 group</p>
            <div className="border-[1px] py-2 flex flex-col items-center">
              <FaRegEdit
                size={20}
                onClick={() => editUser(teacher.fullname)}
                className="cursor-pointer hover:text-[#9A6DE5]"
                title="Edit"
              />
              <span className="border-b-[1px] px-5 pt-2 mb-2"></span>
              <RiDeleteBinLine
                size={20}
                onClick={() => removeUser(teacher.fullname)}
                className="cursor-pointer hover:text-red-600"
                title="Remove"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teachers;
