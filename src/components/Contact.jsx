import Form from "./Form"
import linkedin from "../assets/img/in.svg";
import git from "../assets/img/git-logo.svg";


const Contact = () => {
    return(
        <section className="my-14" id="contact">
            
            <div className="grid md:gap-8 lg:flex py-14 mb-6">
                
                <Form/>

             
                <aside className="grid  items-center gap-16 lg:w-[40%] pt-12 h-full  lg:pr-10">
                    <p className="text-3xl md:text-4xl text-center lg:text-start font-medium w-[75%] md:mx-auto lg:mx-0  justify-self-center md:justify-self-start">IF <span className="text-[#3Eb6ee]">YOU</span> THINK <span className="text-[#3Eb6ee]">WE</span> SHOULD WORK TOGETHER, DON’T HESITATE TO <span className="text-[#3Eb6ee]"> CONTACT ME!</span></p>
                    <a href='mailto:davidresendiz753@gmail.com' className="text-xl md:text-2xl text-center lg:text-start font-semibold">davidresendiz753@gmail.com</a>
                    <a href='tel:+524439330526' className="text-xl md:text-2xl text-center lg:text-start font-semibold">+52 4439330526</a>
                    
                    <div className="flex flex-row justify-center lg:justify-start gap-[40px] ">
                                    <a href="https://www.linkedin.com/in/david-resendiz-bb1b432b0/" target="_blank"><img src={linkedin} alt="linkedin logo" className="w-11 aspect-square"/></a>
                                    <a href="https://github.com/DvQb" target="_blank"><img src={git} alt="git logo" className="w-11 aspect-square"/></a> 

                    </div>

                </aside>
            </div>
        </section>
    )
}

export default Contact;