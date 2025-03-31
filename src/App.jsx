import { Routes, Route } from "react-router-dom"
import Index from "./pages/Index";
import Resume from "./pages/Resume";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Toggle from "./components/Toggle";
import Stack from "./components/Stack";
import Showcase from "./components/Showcase";

import MySlider from "./components/Slider";





function App() {
    return (
    <>

    <Index/>

{/*     
    <Routes>
      <Route path="/" element = { <Index/> }/>
      <Route path="/projects" element = { <Projects/> } />
      <Route path="/resume" element = { <Resume/> }/>
    </Routes> */}
     
    </>
    )
}

export default App
