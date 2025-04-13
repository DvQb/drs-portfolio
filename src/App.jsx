import { Routes, Route } from "react-router-dom"
import Index from "./pages/Index";
import Projects from "./pages/Projects"
import Header from "./components/Header";






function App() {
    return (
    <div className=" ">

      
    
      
    <Routes>
      <Route path="/" element = { <Index/> }/>
      <Route path="/projects" element = { <Projects/> } />
    </Routes>   
     
    </div>
    )
}

export default App
