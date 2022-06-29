import React from "react";
import useSWR, { mutate } from "swr";
import EditMenu from "./EditMenu";


const fetcher = (...args) => fetch(...args).then((res) => res.json());
const Todos = ({id,title,isChecked, isPinned }) => {

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
      <EditMenu 
      id = {id}
      isPinned = {isPinned}
      />
    </div>
  );
};

export default Todos;
