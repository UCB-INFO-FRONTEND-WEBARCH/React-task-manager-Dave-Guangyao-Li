
import { useContext, useEffect, useState } from "react";
import { taskContext } from "../App.js";


function Header() {
    function toggleMenu() {
        setShowNav(!showNav);
    }

    const { showNav, setShowNav, tasks, setTasks, category, setCategory, searchTerm, setSearchTerm, filteredItems, setFilteredItems } = useContext(taskContext);



    // useEffect to use new state. set search term no lagging one character behind
    useEffect(() => {
        if (searchTerm !== null) {
            // from the tasks that are visible only
            setFilteredItems({
                ...tasks,
                [category]: tasks[category].filter(task => task.task.toLowerCase().includes(searchTerm.toLowerCase()))
            });
        } else {
            setFilteredItems({
                ...tasks
            })
        }
    }, [category, searchTerm, setFilteredItems, setSearchTerm, tasks]);




    return (
        <nav class="navigation grid-item-navbar">
            <div class="search-area">
                <span id="menu-icon" class="material-icons" onClick={toggleMenu}>menu</span>
                <div id="input-container">
                    <span id="search-icon" class="material-icons">search</span>
                    <input
                        type="search"
                        class="quick-find"
                        placeholder="Quick Find"
                        aria-label="quick-find"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div class="check-item">
                <span id="check-icon" class="material-icons">check_circle</span>
                <span id="task-count">30/5</span>
            </div>

        </nav>
    );
}

export default Header;