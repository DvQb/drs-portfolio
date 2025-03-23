import { Routes, Route } from "react-router-dom"
import Index from "./pages/index";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects"
import Header from "./components/Header";
import Footer from "./components/Footer";



function App() {
    return (
    <>
      <Header/>
      <main className="wrapper">
        <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/Projects" element={<Projects/>} />
          <Route path="/Resume" elements={<Resume/>} />
        </Routes>
      </main>
      <Footer/>
    </>
    )
}

export default App
