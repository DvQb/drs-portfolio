
import { Link } from "react-router-dom"
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";



const liStyles = "md:w-28 md:h-8 md:flex md:items-center md:justify-center hover:bg-background hover:text-textPrimary md:rounded-full md:text-center dark:hover:bg-textPrimary dark:hover:text-background hover:duration-300"

const Header = () => {

    const closeMenu = () => {
        const checkbox = document.getElementById("menu");
        if (checkbox) checkbox.checked = false;
      };


    return(
      <>
        <header className="h-auto wrapper flex justify-between mx-auto overflow-x-hidden mt-2 md:items-center lg:gap-[28%] md:p-5 md:pl-16 font-medium" id="header">
            <Link to="/" ><img src="/logo.svg"  alt="Logo" className="w-1/4 m-5 md:m-0 md:mr-8 md:w-28  md:h-28 lg:mr-0 lg:ml-[30px] opacity-65 md:p-3 "/></Link>

            <input type="checkbox" id="menu" className="peer hidden" />
            <label htmlFor="menu" className="flex items-center mr-8 cursor-pointer z-50 md:hidden"><FontAwesomeIcon icon={faBars} className="text-3xl"/></label>

            

            <nav className="fixed inset-0 translate-x-full peer-checked:translate-x-0 transition-transform md:static md:translate-x-0"> 
                <ul className="
                absolute inset-x-0 top-24 p-12 bg-textPrimary dark:bg-[#2a2a2a] items-center  w-[90%] mx-auto rounded-md h-max grid gap-6 text-center font-bold shadow-2xl 
                
                md:static md:shadow-none md:p-0 md:w-full  md:flex md:items-center md:justify-center md:gap-3 md:text-lg md:bg-transparent md:dark:bg-transparent md:font-medium" >




                    <li className={liStyles}><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
                    <li className={liStyles}><HashLink smooth to="/#about-me" onClick={closeMenu}>About Me</HashLink></li>
                    <li className={liStyles}><a href="/documents/CV.pdf" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Resume</a></li>
                    <li className={liStyles}><HashLink smooth to="/#contact" onClick={closeMenu}>Contact</HashLink></li>
                </ul>


            </nav>

            
        </header>

        <hr className="md:w-[85%] m-auto border-t-2 border-background dark:border-textPrimary"></hr>
    
      </>
      )
}

export default Header;