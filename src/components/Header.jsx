
import { Link } from "react-router-dom"
import Toggle from "./Toggle"
import { HashLink } from 'react-router-hash-link';


const liStyles = "w-28 h-8 items-center justify-center hover:bg-background hover:text-textPrimary rounded-full text-center dark:hover:bg-textPrimary dark:hover:text-background hover:duration-300"

const Header = () => {
    return(
      <>
        <header className="flex items-center gap-[40%] p-5 pl-16 font-quick font-medium" id="header">
            <Link to="/" ><img src="/logo.svg"  alt="Logo" className=" w-24 h-24 ml-[80px] opacity-65 p-3 "/></Link>
            <nav className=""> 
                <ul className="flex items-center justify-center gap-3 text-lg " >
                    <li className={liStyles}><Link to="/projects">Projects</Link></li>
                    <li className={liStyles}><HashLink smooth to="/#about-me">About Me</HashLink></li>
                    <li className={liStyles}><a href="/documents/CV.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
                    <li className={liStyles}><HashLink smooth to="/#contact">Contact</HashLink></li>
                    <Toggle/>
                </ul>
            </nav>
        </header>

        <hr className="w-[85%] m-auto border-t-2 border-background dark:border-textPrimary"></hr>
    
      </>
      )
}

export default Header;