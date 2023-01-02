import {BrowserRouter as Router, Link, 
  Routes, Route} from 'react-router-dom'

import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Contact from "./components/Contact/Contact";
import Blog from "./components/Blog/Blog.js";

import "./App.css";

import { useContext } from "react";
import { themeContext } from "./Context";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <br></br>
      <Contact />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Blog />



      
      
      
      
    </div>
  );
}

export default App;
