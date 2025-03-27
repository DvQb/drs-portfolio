
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3Alt, faHtml5, faSquareJs, faReact, faPython, faFigma, faSquareGit, faWordpress, faMailchimp  } from '@fortawesome/free-brands-svg-icons'
import codeIcon from "../assets/img/code-icon.svg"
import dataIcon from "../assets/img/data-icon.svg"
import toolsIcon from "../assets/img/tools-icon.svg"



const Stack = () => {
    return(
        <section>
        <h3 id="stack-title">STACK</h3>
        <div className="flex">
            <div className="flex flex-col">
                <img src={codeIcon} alt="code-icon" className="w-32 aspect-square"/>
                <span className="stack-button" id="stack-bt-title">FRONT-END</span>
                <div className=' '>
                <span className="iconStack"><FontAwesomeIcon icon={faHtml5}/>HTML</span>
                <span className="iconStack"><FontAwesomeIcon icon={faCss3Alt}/>CSS</span>
                <span className="iconStack"><FontAwesomeIcon icon={faSquareJs}/>JAVASCRIPT</span>
                <span className="iconStack"><FontAwesomeIcon icon={faReact}/>REACT JS</span>
            </div>
                </div>
            <div className="flex flex-col">
                <img src={dataIcon} alt="data-icon" className="w-32 aspect-square"/>
                <span className="stack-button" id="stack-bt-title">BACK-END</span>
                <span className="stack-button"><FontAwesomeIcon icon={faPython}/></span>
                <span className="stack-button">MONGO DB</span>
                <span className="stack-button">MySQL</span>
                <span className="stack-button">FLASK</span>
            </div>
            <div className="flex flex-col">
                <img src={toolsIcon}  alt="tools-icon" className="w-32 aspect-square"/>
                <span className="stack-button" id="stack-bt-title">TOOLS</span>
                <span className="stack-button">VS CODE</span>
                <span className="stack-button">GITHUB</span>
                <span className="stack-button"><FontAwesomeIcon icon={faFigma}/></span>
                <span className="stack-button">ADOBE ILUSTRATOR</span>
                <span className="stack-button">WORDPRESS</span>
                <span className=''>Mailchimp</span>
            </div>
        </div>
    </section>
    )
}

export default Stack;