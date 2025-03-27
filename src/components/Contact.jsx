import Form from "./Form"


const Contact = () => {
    return(
        <section className="form-section" id="contact">
             <div className="form-container">
            <h3>Contact me!</h3>
            <Form/>
            </div>
            <div class="form-side-text">
            <p>iF <span>YOU</span> THINK <span>WE</span> SHOULD WORK TOGETHER, DON’T HESITATE TO <span> CONTACT ME!</span></p>
            <span>davidresendiz753@gmail.com</span>
            <span>+52 4439330526</span>
            <div id="icon-side-form">
                <a href="https://www.linkedin.com/in/david-resendiz-bb1b432b0/" target="_blank"><img src="./img/in.svg" alt="linkedin logo" class="icon-linkedin"/></a>
                <a href="https://github.com/DvQb" target="_blank"><img src="./img/git-logo.svg" alt="git logo" class="icon-git"/></a> 

            </div>
        </div>
    </section>
    )
}

export default Contact;