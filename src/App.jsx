import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes } from "react-router-dom";
import { HotstarWelcome } from "./components/hotstar/HotstarWelcome";
import { HotstarHome } from "./components/hotstar/HotstarHome";
import { HotstarMovies } from "./components/hotstar/HotstarMovies";
import { Error404 } from "./components/hotstar/Error404";
import { Navbar } from "./components/hotstar/Navbar";
// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HotstarWelcome />}></Route>
        <Route path="/home" element={<HotstarHome />}></Route>
        <Route path="/movies" element={<HotstarMovies />}></Route>
        <Route path="/*" element={<Error404 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
