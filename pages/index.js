import useSWR, { mutate } from "swr";
import { useState, useEffect } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function Home() {
  const { data, error } = useSWR("/api/todos", fetcher);
  console.log(data);
  const [todoitem, setTodoItem] = useState("");
  console.log(todoitem);
  return (
    <div
      className=" flex w-3/5 h-auto bg-white mt-5 mb-5 justify-center flex-col text-gray-200 rounded"
      id="todoitem"
    >
      <h1 className="w-36 font-['Inter'] border-b-4 border-[#FF7964] text-center mx-auto text-[#194591] font-semibold text-[20px]">
        ToDo List
      </h1>
      <hr />
      <div className="flex flex-row justify-center mt-5">
        <div className=" inline-block w-4/5 flex h-10 items-center ml-3 pl-2 pr-2 mb-2 rounded border-2 border-[#999C9F]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#21A7F9"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="15" y1="10" x2="3" y2="10"></line>
            <line x1="21" y1="6" x2="3" y2="6"></line>
            <line x1="21" y1="14" x2="3" y2="14"></line>
            <line x1="14" y1="18" x2="3" y2="18"></line>
          </svg>
          <input
            className="flex w-full h-full p-0 items-center text-[#010A1B] placeholder:text-[#010A1B] text-sm ml-2 outline-none "
            type="text"
            value={todoitem}
            placeholder="Add a task..."
            onChange={(e) => setTodoItem(e.target.value)}
          />
        </div>
        <button className=" inline bg-[#21A7F9] align-bottom max-h-9 mx-3 px-3 rounded  "  type="button" ><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"  viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
</svg></button>
      </div>
      <input type="checkbox" className="appearance-none checked:bg-blue-500 ..." />
      <ul>
        {data?.map(({ id, title }) => (
          <li  key={id}>{title}</li>
        ))}

        
      </ul>
    </div>
  );
}
