import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ name, icon }) => {
  return (
    <div>
      <button className="bg-[#9A6DE5] text-white w-full py-3 px-5 font-open-sans duration-300 rounded-sm hover:bg-[#774fb6]">
        <FontAwesomeIcon icon={icon} className="mr-1" /> {name}
      </button>
    </div>
  );
};

export default Button;
