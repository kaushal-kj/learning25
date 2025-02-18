import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes } from "react-router-dom";
import { HotstarWelcome } from "./components/hotstar/HotstarWelcome";
import { HotstarHome } from "./components/hotstar/HotstarHome";
import { HotstarMovies } from "./components/hotstar/HotstarMovies";
import { Error404 } from "./components/hotstar/Error404";
import { Navbar } from "./components/hotstar/Navbar";
import { Play } from "./components/hotstar/Play";
import { FormDemo1 } from "./components/forms/FormDemo1";
import { FormDemo2 } from "./components/forms/FormDemo2";
import { FormDemo3 } from "./components/forms/FormDemo3";
import { FormDemo4 } from "./components/forms/FormDemo4";
import { FormDemo5 } from "./components/forms/FormDemo5";
import { FormDemo6 } from "./components/forms/FormDemo6";
import { FormDemo7 } from "./components/forms/FormDemo7";
import { FormDemo8 } from "./components/forms/FormDemo8";
import { ApiDemo1 } from "./components/apis/ApiDemo1";
import { SearchMovie } from "./components/apis/omdb/SearchMovie";
import { MovieDetail } from "./components/apis/omdb/MovieDetail";
// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HotstarWelcome />}></Route>
        {/* <Route path="/home" element={<HotstarHome />}></Route>
        <Route path="/movies" element={<HotstarMovies />}></Route>
        <Route path="/*" element={<Error404 />}></Route>
        <Route path="/play/:id" element={<Play />}></Route> */}
        {/* <Route path="/formdemo1" element={<FormDemo1 />}></Route>
        <Route path="/formdemo2" element={<FormDemo2 />}></Route>
        <Route path="/formdemo3" element={<FormDemo3 />}></Route>
        <Route path="/formdemo4" element={<FormDemo4 />}></Route>
        <Route path="/formdemo5" element={<FormDemo5 />}></Route>
        <Route path="/formdemo6" element={<FormDemo6 />}></Route>
        <Route path="/formdemo7" element={<FormDemo7 />}></Route>
        <Route path="/formdemo8" element={<FormDemo8 />}></Route> */}
        <Route path="/apidemo1" element={<ApiDemo1 />}></Route>
        <Route path="/searchmovie" element={<SearchMovie />}></Route>
        <Route path="/moviedetail/:id" element={<MovieDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
