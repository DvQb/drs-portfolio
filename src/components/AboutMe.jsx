import Dsr from "../assets/img/dsr.png"

const AboutMe = () => {
    return(
        <section className="grid grid-cols-2 items-center justify-center px-[15%] gap-[120px] mb-32" id="about-me">
            
        <img src={Dsr}  className=" w-[420px] h- border-none rounded-full"/>
        <div className="w-[80%]">
            <h3 className="mb-[30px] text-5xl font-quick font-bold ">About Me</h3>
            <p className="font-semibold text-sm">I am a skilled web developer with a strong focus on creating responsive, user-centered websites that deliver seamless experiences across all devices. Proficient in front-end and back-end development, I leverage a robust technical toolkit, including HTML, CSS, JavaScript, Python, SQL, and React, to build dynamic and engaging digital solutions.
                With expertise in modern design tools like Figma, I ensure every project achieves a balance between aesthetics and functionality. My approach combines technical excellence with a deep understanding of user needs, resulting in websites that are not only visually appealing but also highly intuitive and performance-driven.</p>
        </div>                      
</section>
    )
}

export default AboutMe;

    