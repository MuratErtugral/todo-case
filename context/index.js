import { useState, useEffect, createContext } from "react";
import useSWR  from "swr";




// create context
const Context = createContext({});



const fetcher = (...args) => fetch(...args).then((res) => res.json());
const Provider = ({ children }) => {
  //Getting todos from API
    const { data , error} = useSWR("/api/todos", fetcher);
    const todos = data

     //The variable that we assign the data from the input while the user is adding  a new task or updating 
    const [todoItem, setTodoItem] = useState({todo : "", id: null});
  

  return <Context.Provider value={{todoItem,setTodoItem, todos , fetcher}}>{children}</Context.Provider>;
};

export { Context, Provider };