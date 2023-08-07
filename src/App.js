import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./css/App.css";
import MainForm from "./components/MainForm";
import { useState, createContext } from "react";
import Footer from "./components/Footer";

export const CheckedAddOnsContext = createContext([]);
function App() {
  const [stepCounter, setStepCounter] = useState(1);
  const [checkedAddOns, setCheckedAddOns] = useState([]);
  return (
    <div className="App d-flex flex-column justify-content-center align-items-center">
      <CheckedAddOnsContext.Provider
        value={{ checkedAddOns, setCheckedAddOns }}
      >
        <MainForm stepCounter={stepCounter} setStepCounter={setStepCounter} />
      </CheckedAddOnsContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
