import React from "react";
import { Link } from "react-router-dom";
import { FaChalkboardUser } from "react-icons/fa6";

const TeacherInfo = ({ singleTeacher }) => {
  return <div className="pl-[110px] pt-[100px] z-0">
  </div>;
  // <div className="pl-[110px] pt-[100px] z-0">
  //   {/* {teachers.map((teacher) => {
  //     return(
  //     <div className="py-2 px-8 " key={teacher}>
  //       <div className="text-2xl font-montserrat">
  //         <Link to="/teachers">Teachers</Link> / {teacher.fullname}
  //       </div>
  //       <div className="flex flex-col border-[1px] py-6 px-8 mt-10 shadow-sm w-[30%] rounded-lg">
  //         <div className="flex items-center gap-4 pb-2 border-b-[1px]">
  //           <FaChalkboardUser size={25} className="text-[#9A6DE5]" />
  //           <div className="font-montserrat">
  //             <span>{teacher.fullname}</span>
  //           </div>
  //         </div>
  //         <div className="flex flex-col gap-3 text-[0.9rem] mt-2 font-montserrat">
  //           <span>Phone Number: {teacher.pnumber}</span>
  //           <span>Date: {teacher.date}</span>
  //           <span>Card: {teacher.card}</span>
  //           <span>Card Number: {teacher.cnumber}</span>
  //           <span>Personal Number: {teacher.personaln}</span>
  //           <span>Personal Number: {teacher.ewallet}</span>
  //           <span className="capitalize">Gender: {teacher.gender}</span>
  //         </div>
  //       </div>
  //     </div>
  //     )
  //   })} */}
  // </div>
};

export default TeacherInfo;
