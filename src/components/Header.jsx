
import { Link } from "react-router-dom"
import Toggle from "./Toggle"


const liStyles = "w-28 h-8 items-center justify-center hover:bg-background hover:text-textPrimary rounded-full text-center dark:hover:bg-textPrimary dark:hover:text-background hover:duration-300"

const Header = () => {
    return(
      <>
        <header className="flex items-center gap-[40%] p-5 pl-16 font-quick font-medium" >
            <Link to="/" ><img src="/logo.svg"  alt="Logo" className=" w-24 h-24 ml-[80px] opacity-65 p-3 "/></Link>
            <nav className=""> 
                <ul className="flex items-center justify-center gap-3 text-lg " >
                    <li className={liStyles}><Link to="/projects">Projects</Link></li>
                    <li className={liStyles}><a href="#about-me">About Me</a></li>
                    <li className={liStyles}><Link to="/resume">Resume</Link></li>
                    <li className={liStyles}><a href="#contact">Contact</a></li>
                    <Toggle/>
                </ul>
            </nav>
        </header>

        <hr className="w-[85%] m-auto border-t-2 border-background dark:border-textPrimary"></hr>
    
      </>
      )
}

export default Header;