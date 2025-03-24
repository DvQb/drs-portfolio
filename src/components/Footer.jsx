import { Link } from "react-router-dom"
import linkedin from "../assets/img/in.svg";
import git from "../assets/img/git-logo.svg";



const Footer = () => {
   return ( <>
    <hr className="w-full m-auto "></hr>
    
     <footer className="grid justify-center items-center mt-[50px] mb-[50px] grid-cols-4">
           <div>
                <Link to="/"><img src="/logo.svg" className=" w-24 h-24 ml-[80px] opacity-65 p-3" alt="Logo"/></Link>
                <div className="flex flex-row gap-[40px] mt-[25px] ml-[65px]">
                    <a href="https://www.linkedin.com/in/david-resendiz-bb1b432b0/" target="_blank"><img src={linkedin} alt="linkedin logo" className="w-11 aspect-square"/></a>
                    <a href="https://github.com/DvQb" target="_blank"><img src={git} alt="git logo" className="w-11 aspect-square"/></a> 

                </div>
           </div>
            <ul className="flex flex-col gap-6 font-medium">
                <li className="font-extrabold text-lg f">MORE SKILLS</li>
                <li>UI design</li>
                <li>Wireframing</li>
                <li>Diagramming</li>
                <li>Brainstorming</li>
                <li>Team colaboration</li>
                <li>Online whiteboard</li>
               
            </ul>
            <ul className="flex flex-col gap-6 font-medium">
                <li className="font-extrabold text-lg">EXPLORE</li>
                <a href="./pages/Projects.html"><li>Projects</li></a>
                <a href="./pages/Resume.html"><li>My resume</li></a>
            </ul>
            <ul className="flex flex-col gap-6 font-medium">
                <li className="font-extrabold text-lg">CONTACT</li>
                <li>https://github.com/DvQb</li>
                <li>davidresendiz753@gmail.com</li>
                <li> +52 44 39 33 05 26</li>
            </ul>
            
        </footer>
    
    </>
   )
}

export default Footer;