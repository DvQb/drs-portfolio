
const Header = () => {
    return(
      <>
        <header className="flex items-center gap-[40%] p-5 pl-16 font-quick font-medium" >
            <a href="" ><img src="/logo.svg"  alt="Logo" className=" w-24 h-24 ml-[80px] opacity-65 p-3 "/></a>
            <nav>
                <ul className="flex items-center justify-center gap-4 text-lg " >
                    <li className="w-32 h-8 items-center justify-center "><a href="./pages/Projects.html">Projects</a></li>
                    <li className="w-32 h-8 items-center justify-center "><a href="#about-me">About Me</a></li>
                    <li className="w-32 h-8 items-center justify-center "><a href="./pages/Resume.html">Resume</a></li>
                    <li className="w-32 h-8 items-center justify-center "><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>

        <hr className="w-[85%] m-auto "></hr>
    
      </>
      )
}

export default Header;