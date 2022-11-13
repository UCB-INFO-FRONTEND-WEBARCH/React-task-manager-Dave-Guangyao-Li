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
    // fetch data 
    // const tasksData = JSON.parse(localStorage.getItem("tasks"));
    // const incompleteTasksData = JSON.parse(localStorage.getItem("incompleteTasks"));
    // const categoryData = JSON.parse(localStorage.getItem("category"));
    // const searchTermData = JSON.parse(localStorage.getItem("searchTerm"));
    setTasks(taskObject);
    setFilteredItems(taskObject);
    // console.log(localStorage.getItem("tasks"));

  }, []); // empty array means this effect will only run once



  useEffect(() => {
    // filter out the completed tasks
    setIncompleteTasks({
      inbox: tasks.inbox.filter(task => !task.completed).length,
      today: tasks.today.filter(task => !task.completed).length,
      upcoming: tasks.upcoming.filter(task => !task.completed).length,
    });
  }, [])

  // set search term
  useEffect(() => {
    setSearchTerm(searchTerm);
  }, [searchTerm]);



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
