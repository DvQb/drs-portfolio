import Form from "./Form"
import linkedin from "../assets/img/in.svg";
import git from "../assets/img/git-logo.svg";


const Contact = () => {
    return(
        <section className="" id="contact">
            <h2 className="text-center font-bold text-4xl pt-8">CONTACT ME!</h2>
            <div className="flex py-14 mb-6">
                
                <Form/>

             
                <aside className="grid gap-8 w-[40%] pr-10">
                    <p className="text-3xl font-medium">IF <span className="text-primary">YOU</span> THINK <span className="text-primary">WE</span> SHOULD WORK TOGETHER, DON’T HESITATE TO <span className="text-primary"> CONTACT ME!</span></p>
                    <span className="text-2xl font-semibold">davidresendiz753@gmail.com</span>
                    <span className="text-2xl font-semibold">+52 4439330526</span>
                    
                    <div className="flex flex-row gap-[40px] ">
                                    <a href="https://www.linkedin.com/in/david-resendiz-bb1b432b0/" target="_blank"><img src={linkedin} alt="linkedin logo" className="w-11 aspect-square"/></a>
                                    <a href="https://github.com/DvQb" target="_blank"><img src={git} alt="git logo" className="w-11 aspect-square"/></a> 

                    </div>

                </aside>
            </div>
        </section>
    )
}

export default Contact;