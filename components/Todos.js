import React from "react";
import useSWR, { mutate } from "swr";


const fetcher = (...args) => fetch(...args).then((res) => res.json());
const Todos = ({id,title,isChecked}) => {

const checkTodo = async (id, check) => {
    await fetcher("/api/todos/" + `${id}`, {
      method: "PATCH",
      body: JSON.stringify({ checked: check }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    mutate("/api/todos");
  };
  return (
    <div className="mt-2 w-full flex justify-between text-[#010A1B] font-['Inter'] ">
      <label className="flex items-center justify-items-start">
        <input
          type="checkbox"
          className="w-4 h-4 border-0 focus:ring-0 checked:bg-white"
          checked={isChecked}
          onChange={(e) => checkTodo(id, e.target.checked)}
        />
        <span className="ml-2">
          <li key={id}>{title}</li>
        </span>
      </label>
      <div className="text-[#999C9F]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
        </svg>
      </div>
    </div>
  );
};

export default Todos;
