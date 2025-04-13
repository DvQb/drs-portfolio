
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3Alt, faHtml5, faSquareJs, faReact, faPython, faFigma, faSquareGit, faWordpress, faMailchimp  } from '@fortawesome/free-brands-svg-icons'
import adobeI from "../assets/img/adobeI.svg"
import tailwindIcon from "../assets/img/tailwindIcon.svg"

const iconStyle = 'w-16 h-16 md:w-24 md:h-24 mb-2'

const Stack = () => {
    return(
       
        <section className="text-center pb-6 w-[85%] m-auto">
        <h2 className="font-bold text-3xl md:text-4xl pt-8 md:mb-6">STACK</h2>
        <div className="gid justify-center">
            <div className="flex flex-col gap-14 items-center py-8">
                {/* <img src={codeIcon} alt="code-icon" className=" w-32 aspect-square"/> */}
                <h3 id="stack-bt-title">FRONT-END</h3>
                <div className="grid grid-cols-2 md:flex flex-wrap lg:flex justify-center gap-10 md:gap-16 lg:gap-28">
                    <span className="iconStack"><FontAwesomeIcon icon={faHtml5} className={` ${iconStyle} text-red-500`}/>HTML</span>
                    <span className="iconStack"><FontAwesomeIcon icon={faCss3Alt} className={` ${iconStyle} text-blue-700`}/>CSS</span>
                    <span className="iconStack"><FontAwesomeIcon icon={faSquareJs} className={` ${iconStyle} text-yellow-500`}/>JAVASCRIPT</span>
                    <span className="iconStack"><FontAwesomeIcon icon={faReact} className={` ${iconStyle} text-cyan-400 `}/>REACT JS</span>
                    <span className="iconStack"><img src={tailwindIcon} className={`${iconStyle} `}/>TAILWINDCSS</span>
                </div>
            </div>
           
            <div className="flex flex-col items-center gap-14  py-8">
                {/* <img src={toolsIcon}  alt="tools-icon" className="w-32 aspect-square"/> */}
                <h3 className="">TOOLS</h3>
                <div className="grid grid-cols-2 md:flex justify-center flex-wrap gap-10 md:gap-16 lg:gap-28">
                    <span className="iconStack"><FontAwesomeIcon icon={faSquareGit} className={` ${iconStyle} text-red-400`} />GITHUB</span>
                    <span className="iconStack"><FontAwesomeIcon icon={faFigma} className={iconStyle}/>FIGMA</span>
                    <span className="iconStack"><img src={adobeI} className={`${iconStyle}`}/>ADOBE ILUSTRATOR</span>
                    <span className="iconStack"><FontAwesomeIcon icon={faWordpress} className={` ${iconStyle}  text-cyan-700`}/>WORDPRESS</span>
                    <span className='iconStack'><FontAwesomeIcon icon={faMailchimp} className={` ${iconStyle} bg-yellow-400 rounded-full p-2 text-black`}/>MAILCHIMP</span>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Stack;