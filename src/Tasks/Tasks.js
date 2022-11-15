import { useContext } from "react";
import { taskContext } from "../App";
import { v4 as uuid } from 'uuid'; // generate a unique id

function Tasks() {

    // map tasks
    const { tasks, setTasks, category, filteredItems, setFilteredItems } = useContext(taskContext);

    const changeCompletionState = (e) => {
        // change the completion state of the task
        // console.log(e.target.id);
        const updatedData = {
            ...filteredItems,
            [category]: filteredItems[category].map(item => {
                // console.log(typeof item.id);
                // console.log(typeof e.target.id);
                if (item.id === e.target.id) {
                    item.completed = !item.completed;
                }
                return item;
            })
        }
        setFilteredItems(updatedData);


        // store to local storage
        localStorage.setItem("tasks", JSON.stringify(updatedData));
        // console.log(localStorage.getItem("tasks"));
    }

    const addNewTask = (e) => {
        // add new task items into filteredItems list and return a new input field on page

        // new id
        const unique_id = uuid();
        const small_id = unique_id.slice(0, 8)

        // task text from input field
        const taskText = document.querySelector(".add-task").value;
        // console.log(taskText);
        const newTask = {
            // id: filteredItems[category].length + 1,
            id: small_id,
            task: taskText,
            completed: false
        }
        const updatedData = {
            ...filteredItems,
            [category]: [...filteredItems[category], newTask]
        }
        // set the new task to the filteredItems
        setFilteredItems(updatedData);
        setTasks(updatedData);

        // store to local storage
        localStorage.setItem("tasks", JSON.stringify(updatedData));

        // clear the input field after adding a new task
        document.querySelector(".add-task").value = "";

    }

    const editTask = (e) => {
        // edit the task
        // console.log(e.target.id);
        // console.log(e.target.value);
        // console.log(filteredItems[category][0].id);

        const updatedData = {
            ...filteredItems,
            [category]: filteredItems[category].map(item => {
                if (item.id === e.target.id) {
                    item.task = e.target.value;
                }
                return item;
            })
        }
        setTasks(updatedData);
        setFilteredItems(updatedData);

        // store to local storage
        localStorage.setItem("tasks", JSON.stringify(updatedData));
    }

    const deleteTask = (e) => {
        //remove item from local storage
        // console.log(localStorage.getItem("tasks"));
        // localStorage.removeItem("tasks");
        // console.log(localStorage.getItem("tasks"));
        // delete the task


        const updatedData = {
            ...filteredItems,
            [category]: filteredItems[category].filter(item => {
                // console.log(typeof item.id);
                // console.log(typeof e.target.id);
                return item.id !== e.target.id;
            })
        }
        setTasks(updatedData);
        setFilteredItems(updatedData);


        // store new data to local storage
        localStorage.setItem("tasks", JSON.stringify(updatedData));
        // console.log(localStorage.getItem("tasks"));
    }

    return (

        <main class="main-navigaton grid-item-main-nav">
            <ul class="tasks">
                <h1 class="list-title">{category}</h1>

                {
                    // list all filtered tasks of the current category
                    filteredItems[category].map((task, index) => {
                        return (
                            <li class="task" key={index}>
                                <input type="checkbox" id={task.id} className={task.completed ? "completed" : "incomplete"} onClick={changeCompletionState} />
                                {/* <label for={task.id}>{task.task}</label> */}
                                {/* <div className="task-detail"> */}
                                <input type="text" id={task.id} className="edit-task" value={task.task} onChange={editTask} />
                                <span id={task.id} className="material-icons delete-task" onClick={deleteTask}>delete</span>
                                {/* </div> */}

                            </li>
                        );
                    })
                }

                <li class="new-task" >
                    {/* watch for enter key */}

                    <span id="add-icon" class="material-icons" onClick={addNewTask}>add</span>
                    <input type="text"
                        id="add-task"
                        class="add-task"
                        placeholder="Add task (type in, then click add icon or press enter)"
                        aria-label="add task"
                        autoFocus
                        onKeyDown={e => e.key === 'Enter' && addNewTask(e)} // watch for enter key
                    >
                    </input>
                </li>

            </ul>
        </main >
    );
}
export default Tasks;