
function Header() {
    function toggleMenu() {
        document.querySelector(".left-navigation").classList.toggle("close-menu");
    }


    return (
        <nav class="navigation grid-item-navbar">
            <div class="search-area">
                <span id="menu-icon" class="material-icons" onClick={toggleMenu}>menu</span>
                <div id="input-container">
                    <span id="search-icon" class="material-icons">search</span>
                    <input
                        type="text"
                        class="quick-find"
                        placeholder="Quick Find"
                        aria-label="quick-find"
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