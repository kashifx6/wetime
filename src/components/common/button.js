import React from "react";

const Button = (props) => {
  return (
    <div>
      <button
        className="block py-2 pl-3 pr-4 text-white bg-[#120F49] font-medium md:w-[300px] w-full text-center text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-[#3f3f3f] shadow-lg rounded focus:outline-none dark:text-[#F5F5F5]"
        onClick={props.onClick}
      >
        {props.value}
      </button>
    </div>
  );
};

export default Button;
