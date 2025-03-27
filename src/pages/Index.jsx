import AboutMe from "../components/AboutMe";
import Toggle from "../components/Toggle";
import Showcase from "../components/Showcase"
import Header from "../components/Header"
import Footer from "../components/Footer"


const Index = () => {
    return(
        <div className="dark:bg-background dark:text-textPrimary">

            <Header/>
            <Toggle/>
            <Showcase/>
            <AboutMe/>
            <Footer/>
        </div>
    )
}

export default Index;