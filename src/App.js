import React, { useState, useEffect, createContext } from 'react';

import { taskObject } from './tasksData';

import './App.css'
import Header from "./Header/Header";
import Spaces from "./Spaces/Spaces";
import Tasks from "./Tasks/Tasks";

export const taskContext = createContext();

function App() {
  // set up state for the app
  const [showNav, setShowNav] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("inbox");
  const [tasks, setTasks] = useState({ inbox: [], today: [], upcoming: [] });
  const [filteredItems, setFilteredItems] = useState({ inbox: [], today: [], upcoming: [] });
  const [incompleteTasks, setIncompleteTasks] = useState({ inbox: 0, today: 0, upcoming: 0 });


  useEffect(() => {
    // fetch data from local storage
    if (localStorage.getItem("tasks")) {
      setTasks(JSON.parse(localStorage.getItem("tasks")));
      setFilteredItems(JSON.parse(localStorage.getItem("tasks")));
    } else {
      setTasks(taskObject);
      setFilteredItems(taskObject);
      // store data in local storage
      localStorage.setItem("tasks", JSON.stringify(taskObject));
    }
    // setTasks(taskObject);
    // setFilteredItems(taskObject);

  }, []); // empty array means this effect will only run once



  useEffect(() => {
    // filter out the completed tasks
    setIncompleteTasks({
      inbox: filteredItems.inbox.filter(task => !task.completed).length,
      today: filteredItems.today.filter(task => !task.completed).length,
      upcoming: filteredItems.upcoming.filter(task => !task.completed).length,
    });
  }, [filteredItems]);


  return (
    <taskContext.Provider value={{
      showNav, setShowNav,
      incompleteTasks, setIncompleteTasks,
      category, setCategory,
      tasks, setTasks,
      searchTerm, setSearchTerm,
      filteredItems, setFilteredItems,

    }}>
      <div class="grid-container">
        <Header></Header>
        {showNav ? <Spaces /> : ""}
        <Tasks></Tasks>
      </div>
    </taskContext.Provider>
  );
}

export default App;
