// You should be able to add tasks in each space
import './App.css'
import Header from "./Header/Header";
import Spaces from "./Spaces/Spaces";
import Tasks from "./Tasks/Tasks";

function App() {
  return (
    <div class="grid-container">
      <Header></Header>
      <Spaces></Spaces>
      <Tasks></Tasks>
    </div>
  );
}

export default App;
