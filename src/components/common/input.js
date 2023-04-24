import React from "react";

const Input = (props) => {
  return (
    <div>
      <label
        for="first_name"
        className="block mb-[8px] text-sm font-medium text-[#272D37] dark:text-white"
      >
        {props.label}
      </label>
      <textarea
        rows="6"
        type={props.type}
        id={props.id}
        onChange={props.onChange}
        value={props.value}
        className="bg-transparent border border-gray-100 dark:border-[#333] rounded-lg focus:ring-blue-500 w-full p-2.5 dark:placeholder-gray-400 placeholder-[#cbc9d6] dark:text-white focus:outline-none"
        placeholder={props.placeholder}
        required
      />
    </div>
  );
};

export default Input;
