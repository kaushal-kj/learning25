import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Content } from "./components/Content";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { ArrayDemo1 } from "./components/ArrayDemo1";
import { ArrayDemo2 } from "./components/ArrayDemo2";
import { ArrayDemo3 } from "./components/ArrayDemo3";
import { ArrayDemo4 } from "./components/ArrayDemo4";
import { Player } from "./components/Player";
import { Product } from "./components/Product";
import { UseStateDemo1 } from "./components/UseStateDemo1";
import { UseStateDemo2 } from "./components/UseStateDemo2";
import { InputDemo1 } from "./components/InputDemo1";
import { Form1 } from "./components/Form1";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <ArrayDemo1></ArrayDemo1> */}
      {/* <ArrayDemo2></ArrayDemo2> */}
      {/* <ArrayDemo3></ArrayDemo3> */}
      {/* <ArrayDemo4></ArrayDemo4> */}
      {/* <Player></Player> */}
      {/* <Product></Product> */}
      {/* <UseStateDemo1></UseStateDemo1> */}
      {/* <UseStateDemo2></UseStateDemo2> */}
      {/* <InputDemo1></InputDemo1> */}
      <Form1></Form1>
      {/* <Navbar></Navbar>
      <About></About> */}
      {/* <Header></Header>
    <Content></Content>
    <Footer></Footer> */}
    </div>
  );
}

export default App;
