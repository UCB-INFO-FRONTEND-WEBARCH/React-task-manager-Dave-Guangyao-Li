import { useContext } from "react";
import { taskContext } from "../App";

function Tasks() {

    // map tasks
    const { tasks, setTasks, category, filteredItems, setFilteredItems } = useContext(taskContext);

    const changeCompletionState = (e) => {
        // change the completion state of the task
        // console.log(e.target.id);
        const updatedData = {
            ...filteredItems,
            [category]: filteredItems[category].map(item => {
                console.log(typeof item.id);
                console.log(typeof e.target.id);
                if (Number(item.id) === Number(e.target.id)) {
                    item.completed = !item.completed;
                }
                return item;
            })
        }
        setFilteredItems(updatedData);

        // store to local storage
        localStorage.setItem("tasks", JSON.stringify(filteredItems));
        console.log(localStorage.getItem("tasks"));
    }


    return (

        <main class="main-navigaton grid-item-main-nav">
            <ul class="tasks">
                <h1 class="list-title">Inbox</h1>

                {
                    // list all filtered tasks
                    filteredItems[category].map((task, index) => {
                        return (
                            <li class="task" key={index}>
                                <input type="checkbox" id={task.id} className={task.completed ? "completed" : "incomplete"} onClick={changeCompletionState} />
                                <label for={task.id}>{task.task}</label>
                            </li>
                        );
                    })
                }



                <li class="task" >
                    <span id="add-icon" class="material-icons">add</span>
                    <span id="add-task">Add task</span>
                </li>

            </ul>
        </main>
    );
}
export default Tasks;