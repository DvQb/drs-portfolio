import { Link } from "react-router-dom";
import linkedin from "../assets/img/in.svg";
import git from "../assets/img/git-logo.svg";
import { HashLink } from 'react-router-hash-link';





const Footer = () => {
   return ( 
    <>
        <section className=" dark:bg-[#2a2a2a]/50 grid w-full  text-[#4f4f4f]  dark:text-[#a8a8a8]">
        <hr className="w-full m-auto border-t-2 border-background dark:border-textPrimary "></hr>
    
    <footer className="grid text-center lg:text-start justify-center gap-12 md:px-20 lg:px-0  mt-[50px] pb-[50px] md:grid-cols-2 lg:grid-cols-4">
          <div className="py-14">
               <HashLink to="/#header"><img src="/logo.svg" className=" mx-auto w-24 md:w-28 h-24 lg:ml-[80px] opacity-65 p-3" alt="Logo"/></HashLink>
               <div className="hidden lg:flex flex-row gap-[40px] mt-[25px] ml-[65px]">
                   <a href="https://www.linkedin.com/in/david-resendiz-bb1b432b0/" target="_blank"><img src={linkedin} alt="linkedin logo" className="w-11 aspect-square"/></a>
                   <a href="https://github.com/DvQb" target="_blank"><img src={git} alt="git logo" className="w-11 aspect-square"/></a> 

               </div>
          </div>

           <ul className="flex flex-col gap-3 lg:gap-6 font-medium">
               <li className="font-extrabold text-lg text-background dark:text-textPrimary mb-4 lg:mb-0">MORE SKILLS</li>
               <li >UI design</li>
               <li>Wireframing</li>
               <li>Diagramming</li>
               <li>Brainstorming</li>
               <li>Team colaboration</li>
               
              
           </ul>
           <ul className="flex flex-col gap-3 lg:gap-6 font-medium">
               <li className="font-extrabold text-lg  text-background dark:text-textPrimary mb-4 lg:mb-0">EXPLORE</li>
               <li><HashLink smooth to="/projects#header">Projects</HashLink></li>
               <li><HashLink smooth to="/#about-me">About Me</HashLink></li>
               <li><a href="/documents/CV.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
               <li><HashLink smooth to="/#contact">Contact</HashLink></li>
               
           </ul>
           <ul className="flex flex-col gap-3 lg:gap-6 font-medium">
               <li className="font-extrabold text-lg  text-background dark:text-textPrimary mb-4 lg:mb-0">CONTACT</li>
               <li><a href="https://github.com/DvQb" target="blank">https://github.com/DvQb</a></li>
               <li>davidresendiz753@gmail.com</li>
               <li> +52 44 39 33 05 26</li>

                <div className=" lg:hidden flex flex-row gap-[40px] mt-10 lg:mt-[25px] mx-auto">
                                <a href="https://www.linkedin.com/in/david-resendiz-bb1b432b0/" target="_blank"><img src={linkedin} alt="linkedin logo" className="w-11 aspect-square"/></a>
                                <a href="https://github.com/DvQb" target="_blank"><img src={git} alt="git logo" className="w-11 aspect-square"/></a> 

                </div>

           </ul>

           
           
       </footer>
   
        </section>
    </>
   )
}

export default Footer;