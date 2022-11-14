import { useContext } from "react";
import { taskContext } from "../App";
import { taskObject } from '../tasksData';

function Spaces() {

    const { category, setCategory, tasks, setTasks, incompleteTasks, setIncompleteTasks } = useContext(taskContext);



    function changeCategory(event) {

        //set category to the category that was clicked
        setCategory(event.target.id);


    }

    return (
        <aside class="left-navigation grid-item-left-nav">
            <div class="left-nav-body">
                <ul class="nav-items">
                    <li class="left-nav-item" >
                        <span id="inbox-icon" class="material-icons">inbox</span>
                        <span id="inbox" onClick={(e) => {
                            changeCategory(e);
                        }}>Inbox</span>
                        <span class="task-count">{incompleteTasks.inbox}</span>
                    </li>
                    <li class="left-nav-item">
                        <span id="today-icon" class="material-icons">today</span>
                        <span id="today" onClick={(e) => {
                            changeCategory(e);
                        }}>Today</span>
                        <span class="task-count">{incompleteTasks.today}</span>
                    </li>
                    <li class="left-nav-item">
                        <span id="upcoming-icon" class="material-icons">upcoming</span>
                        <span id="upcoming" onClick={(e) => {
                            changeCategory(e);
                        }}>Upcoming</span>
                        <span class="task-count">{incompleteTasks.upcoming}</span>
                    </li>


                    <li class="left-nav-item" >
                        <span id="add-icon" class="material-icons">add</span>
                        <span id="add-project">Add Projects</span>
                    </li>
                </ul>
            </div>

        </aside>
    );
}

export default Spaces;