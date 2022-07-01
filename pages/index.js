import useSWR, { mutate } from "swr";
import { useState } from "react";
import Todos from "../components/Todos";

// Helper used when fetching data from API
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  //Getting todos from API
  const { data, error } = useSWR("/api/todos", fetcher);
  // console.log(error)

  //The variable that we assign the data from the input while the user is adding a new task
  const [todoItem, setTodoItem] = useState("");

  //Create new todo by title post function.
  const addTodo = async (title) => {
    await fetcher("/api/todos", {
      method: "POST",
      body: JSON.stringify({ title: title }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    mutate("/api/todos");
  };

  // Functions that run when the form is submitted
const handleSubmit = (e) => {
  e.preventDefault();
  addTodo(todoItem);
  setTodoItem("");
}


  return (
    <div
      className=" flex w-3/5 lg:h-800 md:h-[44rem] sm:h-[25rem] bg-white mt-5 mb-5  flex-col text-gray-200 rounded ">
      <h1 className="w-36 font-['Inter'] pt-10 border-b-4 border-[#FF7964] text-center mx-auto text-[#194591] font-semibold text-[20px]">
        ToDo List
      </h1>
      <hr />
      <div className="flex flex-col mt-8 w-3/4 mx-auto">
      <form action="" 
      onSubmit={handleSubmit}>
        <div className="flex flex-row justify-center">
          <div className="w-full flex h-10 items-center pl-2 pr-2 mb-2 rounded border-2 border-[#999C9F]">
            <svg //the icon that before add task placeholder 
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#21A7F9"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="15" y1="10" x2="3" y2="10"></line>
              <line x1="21" y1="6" x2="3" y2="6"></line>
              <line x1="21" y1="14" x2="3" y2="14"></line>
              <line x1="14" y1="18" x2="3" y2="18"></line>
            </svg>
            <input
              className="flex w-full h-full p-0 items-center text-sm ml-2 outline-none placeholder:text-[#010A1B] text-[#010A1B]"
              type="text"
              value={todoItem}
              placeholder="Add a task..."
              onChange={(e) => setTodoItem(e.target.value)}
            />
          </div>
          <button
            className="w-10 h-10 bg-[#21A7F9] px-2 ml-2 rounded"
            type="submit"
          >
            <svg //the icon in submit button
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
          
        </div>
        </form>

        <ul>
          {data?.filter((item) => item.pinned)//filtering pinned todos
            .map(({ id, title , checked,pinned }) => (
              <Todos
              key={id}
              id={id}
              title={title}
              isChecked = {checked}
              isPinned = {pinned}
              />
            ))},
          <hr />
          {data?.filter((item) => !item.pinned)
            .map(({ id, title , checked , pinned }) => (
              <Todos
              key={id}
              id={id}
              title={title}
              isChecked = {checked}
              isPinned = {pinned}
              />
            ))}
        </ul>
      </div>
    </div>
  );
}