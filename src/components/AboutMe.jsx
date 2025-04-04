import Dsr from "../assets/img/dsr.png"

const AboutMe = () => {
    return(
        <section className="grid grid-cols-2 w-[95%] mx-auto items-center justify-center px-[15%] gap-[120px] mb-32" id="about-me">
            
        <img src={Dsr}  className=" w-[420px] h- border-none rounded-full"/>
        <div className="w-[100%]">
            <h2 className="mb-[30px] text-5xl font-quick font-bold ">ABOUT ME</h2>
            <p className="font-semibold w-full">I am currently focused on front end development using technologies such as React, Js, Html, Css and TailwindCss. 
            </p>
            <p className="font-semibold my-6">
            I have developed some real projects for local companies and continue to deepen my learning in back end development with Python and Django.

            I've also done a couple of projects with tools like WordPress, Adobe Ilustator, and Figma.
            </p>
        </div>                      
</section>
    )
}

export default AboutMe;

    