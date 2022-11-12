function Spaces() {

    function collapseItems(event) {
        const collapsable = document.querySelector(".collapsable");
        if (collapsable.style.display === "none") {
            collapsable.style.display = "block";
        } else {
            collapsable.style.display = "none";
        }

        event.preventDefault();
    }


    return (
        <aside class="left-navigation grid-item-left-nav">
            <div class="left-nav-body">
                <ul class="nav-items">
                    <li class="left-nav-item" >
                        <span class="material-icons">inbox</span>
                        <span><a href="#">Home</a></span>
                        <span class="task-count">5</span>
                    </li>
                    <li class="left-nav-item">
                        <span class="material-icons">today</span>
                        <span><a href="#">Today</a></span>
                        <span class="task-count">5</span>
                    </li>
                    <li class="left-nav-item">
                        <span class="material-icons">upcoming</span>
                        <span><a href="#">Upcoming</a></span>
                    </li>
                    <li id="item-projects" class="left-nav-item">
                        <span class="material-icons">expand_more</span>
                        <span ><a href="#">Projects</a></span>
                    </li>

                    <div class="nav-item-work" onClick={collapseItems}>
                        <li class="left-nav-item" >
                            <span class="material-icons">circle</span>
                            <span id="work-item"><a href="#">work</a></span>
                        </li>
                        <div class="collapsable">
                            <li class="left-nav-item ">
                                <span class="material-icons">edit</span>
                                <span><a href="#">New Brand</a></span>
                                <span class="task-count">9</span>
                            </li>
                            <li class="left-nav-item">
                                <span class="material-icons">update</span>
                                <span><a href="#">Website Update</a></span>
                                <span class="task-count">11</span>
                            </li>
                            <li class="left-nav-item">
                                <span class="material-icons">map</span>
                                <span><a href="#">Product Roadmap</a></span>
                                <span class="task-count">11</span>
                            </li>
                            <li class="left-nav-item">
                                <span class="material-icons">view_agenda</span>
                                <span><a href="#">Meeting Agenda</a></span>
                                <span class="task-count">6</span>
                            </li>
                        </div>

                    </div>

                    <li class="left-nav-item" >
                        <span class="material-icons">circle</span>
                        <span><a href="#">Personal</a></span>
                        <span class="task-count">28</span>
                    </li>

                    <li class="left-nav-item" >
                        <span id="add-icon" class="material-icons">add</span>
                        <span id="add-project"><a href="#">Add Projects</a></span>
                    </li>
                </ul>
            </div>

        </aside>
    );
}

export default Spaces;