import { Link } from "react-router-dom";
import linkedin from "../assets/img/in.svg";
import git from "../assets/img/git-logo.svg";
import { HashLink } from 'react-router-hash-link';





const Footer = () => {
   return ( 
    <>
        <section className=" dark:bg-[#2a2a2a]/50 grid w-full  text-[#4f4f4f]  dark:text-[#a8a8a8]">
        <hr className="w-full m-auto border-t-2 border-background dark:border-textPrimary "></hr>
    
    <footer className="grid justify-center  mt-[50px] pb-[50px] grid-cols-4">
          <div>
               <HashLink to="/#header"><img src="/logo.svg" className=" w-24 h-24 ml-[80px] opacity-65 p-3" alt="Logo"/></HashLink>
               <div className="flex flex-row gap-[40px] mt-[25px] ml-[65px]">
                   <a href="https://www.linkedin.com/in/david-resendiz-bb1b432b0/" target="_blank"><img src={linkedin} alt="linkedin logo" className="w-11 aspect-square"/></a>
                   <a href="https://github.com/DvQb" target="_blank"><img src={git} alt="git logo" className="w-11 aspect-square"/></a> 

               </div>
          </div>

           <ul className="flex flex-col gap-6 font-medium">
               <li className="font-extrabold text-lg text-background dark:text-textPrimary">MORE SKILLS</li>
               <li >UI design</li>
               <li>Wireframing</li>
               <li>Diagramming</li>
               <li>Brainstorming</li>
               <li>Team colaboration</li>
               
              
           </ul>
           <ul className="flex flex-col gap-6 font-medium">
               <li className="font-extrabold text-lg  text-background dark:text-textPrimary">EXPLORE</li>
               <li><HashLink smooth to="/projects#header">Projects</HashLink></li>
               <li><HashLink smooth to="/#about-me">About Me</HashLink></li>
               <li><a href="/documents/CV.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
               <li><HashLink smooth to="/#contact">Contact</HashLink></li>
               
           </ul>
           <ul className="flex flex-col gap-6 font-medium">
               <li className="font-extrabold text-lg  text-background dark:text-textPrimary">CONTACT</li>
               <li><a href="https://github.com/DvQb" target="blank">https://github.com/DvQb</a></li>
               <li>davidresendiz753@gmail.com</li>
               <li> +52 44 39 33 05 26</li>
           </ul>
           
       </footer>
   
        </section>
    </>
   )
}

export default Footer;