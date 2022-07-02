import React, { useState } from "react";
import { Popover } from "@headlessui/react";
import { mutate } from "swr";

// Helper used when fetching data from API
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const EditMenu = ({ id, isPinned, title }) => {
    //Controls whether the update input area  is opened or closed
    const [isOpen, setIsOpen] = useState(false);

    const [updateItem, setUpdateItem] = useState(title);

    // pinned or unpinned todo by id 
    const pinTodo = async (id, isPinned) => {
        await fetcher("/api/todos/" + `${id}`, {
          method: "PATCH",
          body: JSON.stringify({ pinned: !isPinned }),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }
        });
        mutate("/api/todos");
      };

    //when user update their todoitem
    const updateTodo = async (id, text) => {
        await fetcher("/api/todos/" + `${id}`, {
          method: "PATCH",
          body: JSON.stringify({ title: text }),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }
        });
        mutate("/api/todos");
      };
  
  //Delete Todo By Id "DELETE" Function
  const deleteTodo = async (id) => {
      await fetcher("/api/todos/" + `${id}`, {
        method: "DELETE",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      });
      mutate("/api/todos");
    };

  return (
    <Popover className="flex flex-col cursor-pointer relative ">
      {/* //The three dot for open or close the popup// */}
      <Popover.Button className=" cursor-pointer outline-none">
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
      </Popover.Button>
      
      <Popover.Panel className=" block flex md:p-3 sm:p-1 absolute right-0 w-40 p-5 mt-5 z-20 flex-col bg-white rounded border-solid border ">
        <Popover.Button
         className="w-full bg-blue-500  mb-2 flex flex-start"

        onClick={() => pinTodo(id, isPinned)}
        >
        <div>
            <svg
              className="w-5 inline mr-2 rotate-[315deg]"
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 24 24"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#010A1B"
            >
              <g>
                <rect fill="none" height="24" width="24" />
              </g>
              <g>
                <path d="M14,4v5c0,1.12,0.37,2.16,1,3H9c0.65-0.86,1-1.9,1-3V4H14 M17,2H7C6.45,2,6,2.45,6,3c0,0.55,0.45,1,1,1c0,0,0,0,0,0l1,0v5 c0,1.66-1.34,3-3,3v2h5.97v7l1,1l1-1v-7H19v-2c0,0,0,0,0,0c-1.66,0-3-1.34-3-3V4l1,0c0,0,0,0,0,0c0.55,0,1-0.45,1-1 C18,2.45,17.55,2,17,2L17,2z" />
              </g>
            </svg>

           {isPinned ? <span>Unpin </span>  : <span>Pin on the top</span>} 
          </div>
        </Popover.Button>
        <button className="w-3/4 mb-2 flex flex-start"
        onClick={() => setIsOpen(true)}
        >
          <div>
            <svg
              className="w-5 inline mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#010A1B"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            <span>Update</span>
          </div>
        </button>
        {isOpen && (
          <div>
            <input
                className=" block w-full"
                value={updateItem}
                name="update item"
                onChange={(e) => setUpdateItem(e.target.value)}
            />
            <div className="flex justify-between ">
                <Popover.Button
                className="bg-green-600 rounded"
                onClick={(e) => {
                updateTodo(id, updateItem);
                setIsOpen(false)
                }}>Edit</Popover.Button>

                <button
                className="bg-red-600 rounded"
                onClick={() => setIsOpen(false)}
                >Close</button>
            </div>
          </div>
        )}
        <Popover.Button
          className="w-3/4  mb-2 flex flex-start"

        onClick={() => deleteTodo(id)}
        >
          <div>
            <svg
              className="w-5 inline mr-2"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 1000 1000"
              enableBackground="new 0 0 1000 1000"
              xmlSpace="preserve"
            >
              <g>
                <path
                  fill="#010A1B"
                  d="M648.5,10h-297c-32.8,0-59.4,26.6-59.4,59.4v118.8H84.2c-32.8,0-59.4,26.6-59.4,59.4c0,32.8,26.6,59.4,59.4,59.4h831.5c32.8,0,59.4-26.6,59.4-59.4c0-32.8-26.6-59.4-59.4-59.4H707.9V69.4C707.9,36.6,681.3,10,648.5,10z M618.8,188.2H381.2V99.1h237.6V188.2L618.8,188.2z M113.9,396.1v475.2c0,65.7,53.2,118.8,118.8,118.8h534.5c65.6,0,118.8-53.1,118.8-118.8V396.1H767.3v475.2H648.5V396.1h-89.1v475.2H440.6V396.1h-89.1v475.2H232.7V396.1H113.9L113.9,396.1z"
                />
              </g>
            </svg>
            <span>Delete</span>
          </div>
        </Popover.Button>
      </Popover.Panel>
    </Popover>
  );
};

export default EditMenu;
