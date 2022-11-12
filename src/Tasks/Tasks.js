function Tasks() {
    return (
        <main class="main-navigaton grid-item-main-nav">

            <div class="tasks">
                <h1 class="list-title">Inbox</h1>
                <div class="task">
                    <input
                        type="checkbox"
                        id="task-1"
                    />
                    <label for="task-1">

                        Call Mom
                    </label>
                </div>


                <div class="task">
                    <input
                        type="checkbox"
                        id="task-2"
                    />
                    <label for="task-2">

                        Buy the new issue of Scientific American
                    </label>
                </div>


                <div class="task">
                    <input
                        type="checkbox"
                        id="task-3"
                    />
                    <label for="task-3">

                        Return the textbook to Josie
                    </label>
                </div>


                <div class="task">
                    <input
                        type="checkbox"
                        id="task-3"
                    />
                    <label for="task-3">

                        Buy the new album by Rake
                    </label>
                </div>

                <div class="task">
                    <input
                        type="checkbox"
                        id="task-3"
                    />
                    <label for="task-3">

                        Buy a gift card for Dad
                    </label>
                </div>

                <div class="task" >
                    <span id="add-icon" class="material-icons">add</span>
                    <span id="add-task"><a href="#">Add task</a></span>
                </div>

            </div>
        </main>
    );
}
export default Tasks;