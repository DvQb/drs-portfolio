import AboutMe from "../components/AboutMe";
import Toggle from "../components/Toggle";
import Showcase from "../components/Showcase"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Stack from "../components/Stack"
import MySlider from "../components/Slider";
import Contact from "../components/Contact"


const Index = () => {
    return(
        <div className="transition-colors duration-300 dark:bg-background dark:text-textPrimary">

            <Header/>
            <Toggle/>
            <Showcase/>
            <AboutMe/>
            <Stack/>
            <MySlider/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Index;