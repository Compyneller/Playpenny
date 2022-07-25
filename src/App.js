import "./App.css";
import Home from "./pages/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBarComp from "./components/NavBar/NavBarComp";

function App() {
  return (
    <div className="App">
      <NavBarComp />
      <Home />
    </div>
  );
}

export default App;
