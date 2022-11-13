import { useContext } from "react";
import { taskContext } from "../App";

function Tasks() {

    // map tasks
    const { tasks, setTasks, category, filteredItems, setFilteredItems } = useContext(taskContext);



    return (

        <main class="main-navigaton grid-item-main-nav">
            <div>show tasks</div>
            <ul class="tasks">
                <h1 class="list-title">Inbox</h1>

                {
                    // list all filtered tasks
                    filteredItems[category].map((task, index) => {
                        return (
                            <li class="task" key={index}>
                                <input type="checkbox" id={`task-${index}`} />
                                <label for={`task-${index}`}>{task.task}</label>
                            </li>
                        );
                    })}



                <li class="task" >
                    <span id="add-icon" class="material-icons">add</span>
                    <span id="add-task">Add task</span>
                </li>

            </ul>
        </main>
    );
}
export default Tasks;