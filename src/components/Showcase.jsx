import LargeLogo from "../assets/img/Large-logo.svg"
import InIcon from "../assets/img/in.svg"
import GitIcon from "../assets/img/git-logo.svg"
import EmailIcon from "../assets/img/email-logo.svg"


const Showcase = () => {
    return(
        <section className="flex items-center gap-[150px] pt-[20px]">
        <img src={LargeLogo} alt="imagen-logo" className="w-[370px] h-[660px] opacity-30"/>
        <div className="inline w-[800px] h-[700px] pt-[100px]">
            <h1 className="text-7xl flex justify-center font-semibold">David S. Resendiz</h1>
            <h2 className="flex justify-center text-3xl mt-2">Web developer</h2>
            <div className="flex justify-center items-center mt-[35px] gap-[50px]">
                <a href="/documents/CV.pdf" download="my-cv.pdf">
                    <button className="buttonBlue">Download CV</button>
                </a>
                <a href="#contact"><button className="buttonBlue" >Contact me</button></a>
            </div>
            <div className="flex justify-center mt-[60px] gap-[50px] items-center">
                <a href="https://www.linkedin.com/in/david-resendiz-bb1b432b0/" target="_blank"><img src={InIcon} alt="linkedin logo" className="w-11 h-11"/></a>
                <a href="https://github.com/DvQb" target="_blank"><img src={GitIcon} alt="git logo" className="w-11 h-11"/></a> 
                <a href="" target="_blank"><img src={EmailIcon} alt="email logo" className="w-11 h-8"/></a>
            </div>
        </div>
        </section>

    )
}

export default Showcase;
