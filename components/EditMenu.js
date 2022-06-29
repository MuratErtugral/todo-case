import React, { useState } from "react";
import { Popover } from "@headlessui/react";
import { mutate } from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const EditMenu = ({ id, isPinned }) => {
  const [isOpen, setIsOpen] = useState(false);

  //Pin Todo By Id "PATCH" Function
  //   const pinTodo = async (id, isPinned) => {
  //     await fetcher("/api/todos/" + `${id}`, {
  //       method: "PATCH",
  //       body: JSON.stringify({ pinned: !isPinned }),
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json',
  //       }
  //     });
  //     mutate("/api/todos");
  //   };

  return (
    <Popover className="flex flex-col cursor-pointer relative ">
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
      <Popover.Panel className=" block flex  absolute right-0 w-40  p-5 mt-5 z-20 flex-col bg-white rounded border-solid border ">
        <button
          className="w-full  mb-2 flex flex-start"

          //   onClick={() => pinTodo(id, isPinned)}
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
                <g transform="matrix(1 0 0 -1 0 1008)">
                  <path
                    fill="#a9b1ba"
                    d="M675,998l315-315L815,508l-70,70L617.6,450.6c23.3-56.4,28.8-116,16.5-178.9c-12.3-62.9-41.2-116.7-86.5-161.4L377.5,280.5L185,88L10,18l70,175l192.5,192.5L102.4,555.6c44.7,45.4,98.5,74.2,161.4,86.5s122.5,6.8,178.9-16.5L570,753l-70,70L675,998z"
                  />
                </g>
              </g>
            </svg>
            <span>Pin on the top</span>
          </div>
        </button>
        <button className="w-3/4 mb-2 flex flex-start">
          <div>
            <svg
              className="w-5 inline mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            <span>Update</span>
          </div>
        </button>
        <button
          className="w-3/4  mb-2 flex flex-start"

          //   onClick={() => deleteTodoById(id)}
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
                  fill="#a9b1ba"
                  d="M648.5,10h-297c-32.8,0-59.4,26.6-59.4,59.4v118.8H84.2c-32.8,0-59.4,26.6-59.4,59.4c0,32.8,26.6,59.4,59.4,59.4h831.5c32.8,0,59.4-26.6,59.4-59.4c0-32.8-26.6-59.4-59.4-59.4H707.9V69.4C707.9,36.6,681.3,10,648.5,10z M618.8,188.2H381.2V99.1h237.6V188.2L618.8,188.2z M113.9,396.1v475.2c0,65.7,53.2,118.8,118.8,118.8h534.5c65.6,0,118.8-53.1,118.8-118.8V396.1H767.3v475.2H648.5V396.1h-89.1v475.2H440.6V396.1h-89.1v475.2H232.7V396.1H113.9L113.9,396.1z"
                />
              </g>
            </svg>
            <span>Delete</span>
          </div>
        </button>
      </Popover.Panel>
    </Popover>
  );
};

export default EditMenu;
