import { Routes, Route } from "react-router-dom"
import Index from "./pages/Index";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects"
import Cards from "./components/Cards"






function App() {
    return (
    <div className=" ">


    
      
    <Routes>
      <Route path="/" element = { <Index/> }/>
      <Route path="/projects" element = { <Projects/> } />
      <Route path="/resume" element = { <Resume/> }/>
    </Routes>  
     
    </div>
    )
}

export default App
