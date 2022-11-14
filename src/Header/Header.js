
import { useContext, useEffect, useState } from "react";
import { taskContext } from "../App.js";


function Header() {
    function toggleMenu() {
        setShowNav(!showNav);
    }

    const { showNav, setShowNav,
        tasks, setTasks,
        category, setCategory,
        searchTerm, setSearchTerm,
        filteredItems, setFilteredItems,
        incompleteTasks, setIncompleteTasks
    } = useContext(taskContext);



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


    // count the number of total incomplete tasks of all categories
    const countTotalIncompleteTasks = () => {
        let total = 0;
        for (let key in incompleteTasks) {
            total += incompleteTasks[key];
        }
        return total;
    }


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
                {/* [total number of tasks that have not been completed] / [total number of tasks that have not been completed in the selected space]
 */}
                <span id="task-count">{countTotalIncompleteTasks()}/{incompleteTasks[category]}</span>
            </div>

        </nav>
    );
}

export default Header;