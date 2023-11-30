import './App.css';
import { Route, Routes } from "react-router-dom";
import About from "./components/About.jsx"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<About />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </>
  );
}

export default App;
