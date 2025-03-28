import AboutMe from "../components/AboutMe";
import Toggle from "../components/Toggle";
import Showcase from "../components/Showcase"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Stack from "../components/Stack"


const Index = () => {
    return(
        <div className="dark:bg-background dark:text-textPrimary">

            <Header/>
            <Toggle/>
            <Showcase/>
            <AboutMe/>
            <Stack/>
            <Footer/>
        </div>
    )
}

export default Index;