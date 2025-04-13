import LargeLogo from "../assets/img/Large-logo.svg"
import InIcon from "../assets/img/in.svg"
import GitIcon from "../assets/img/git-logo.svg"
import EmailIcon from "../assets/img/email-logo.svg"


const Showcase = () => {
    return(
        <section className="flex justify-center items-center md:h-[450px] lg:h-auto mb-20 gap-[150px] md:pt-[20px]">
        {/* <img src={LargeLogo} alt="imagen-logo" className=" hidden md:block md:w-[370px] md:h-[660px] opacity-30 md:"/> */}
        <div className="inline w-[800px] md:h-[450px] lg:h-[700px] pt-10 lg:pt-[100px]">
            <h1 className="text-4xl md:text-7xl flex justify-center font-semibold">David S. Resendiz</h1>
            <h2 className="flex justify-center font-medium text-2xl md:text-3xl mt-2">Web developer</h2>
            <div className="grid md:flex justify-center items-center mt-[35px] gap-6 md:gap-[50px]">
                <a href="/documents/CV.pdf" download="my-cv.pdf">
                    <button className="buttonBlue">Download CV</button>
                </a>
                <a href="#contact"><button className="buttonBlue" >Contact me</button></a>
            </div>
            <div className="flex justify-center mt-[60px] gap-8 md:gap-[50px] items-center">
                <a href="https://www.linkedin.com/in/david-resendiz-bb1b432b0/" target="_blank"><img src={InIcon} alt="linkedin logo" className="w-9 h-9 md:w-11 md:h-11"/></a>
                <a href="https://github.com/DvQb" target="_blank"><img src={GitIcon} alt="git logo" className="w-9 h-9 md:w-11 md:h-11"/></a> 
                <a href="" target="_blank"><img src={EmailIcon} alt="email logo" className="w-9 h-6 md:w-11 md:h-8"/></a>
            </div>
        </div>
        </section>

    )
}

export default Showcase;
