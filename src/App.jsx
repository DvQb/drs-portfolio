import { Routes, Route } from "react-router-dom"
import Index from "./pages/Index";
import Projects from "./pages/Projects"






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
