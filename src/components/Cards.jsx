import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3Alt, faReact, faJsSquare, faPython, faWordpress } from "@fortawesome/free-brands-svg-icons";
import { SiDjango, SiTailwindcss } from "react-icons/si";
import beautySpace from "../assets/img/beauty-space.webp"
import donCimarron from "../assets/img/don-cimarron.webp"
import urban from "../assets/img/urban-clothes.webp"
import arq from "../assets/img/arq.webp"
import exxa from "../assets/img/cars-shop.webp"
import dispel from "../assets/img/dispelAE.png"
import elCentinela from "../assets/img/elCentinela.png"





const mdCardStyle =  " dark:bg-[#2a2a2a] shadow-xl h-auto w-2/5 rounded-2xl m-auto text-textPrimary grid gap-3 justify-end my-8 overflow-hidden hover:scale-105  ";

const iconStyles = "text-3xl ";


const Card = ({url, image, title , text, icon1,icon2,icon3,icon4}) => {

    const handleClick = () => {
        window.open(url, "_blank");
    };

    return (

        
        
           
                    <div onClick={handleClick} className={mdCardStyle} >
                        
                        <img src={image} className="w-full h-80" alt="project image" />
                        
                        <h3 className="mx-auto text-nowrap px-4 w-auto mt-3">{title}</h3>
                        <p className="px-10 py-3  text-background dark:text-textPrimary ">
                            {text}
                        </p>
                        <span className="py-5 flex gap-6 h-24 justify-center text-background dark:text-textPrimary">
                            {icon1}
                            {icon2}
                            {icon3}
                            {icon4}
                            
                        </span> 
                   </div>
            
        
    )

}

const Cards = () => {
    return (
        <>

            <h3 className="justify-self-center text-3xl mt-14">PROJECTS</h3>  


            <section className="flex flex-wrap gap-y-8 w-[90%] m-auto py-8 mb-10 ">

                                
                    <Card
                    
                    image={donCimarron}
                    title="Don Cimarron"
                    text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa sit cupiditate corporis explicabo pariatur, non quasi enim nesciunt reiciendis nemo."
                    icon1={<FontAwesomeIcon icon={ faHtml5 }  className={iconStyles}/> }
                    icon2={<FontAwesomeIcon icon={ faCss3Alt } className={iconStyles}/>}
                    icon3={<FontAwesomeIcon icon={ faReact } className={iconStyles}/>}
                    icon4={<SiTailwindcss className={iconStyles}/>}
                    
                    />
                    <Card
                    image={beautySpace}
                    title="Beauty Space"
                    text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa sit cupiditate corporis explicabo pariatur, non quasi enim nesciunt reiciendis nemo."
                    icon1={<FontAwesomeIcon icon={ faPython } className={iconStyles}/> }
                    icon2={<SiDjango  className={iconStyles}/>}
                    icon3={<FontAwesomeIcon icon={ faReact } className={iconStyles}/>}
                    icon4={<SiTailwindcss className={iconStyles}/>}
                    

                    
                    />



                    <Card
                    image={dispel}
                    title="Disple AE"
                    text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa sit cupiditate corporis explicabo pariatur, non quasi enim nesciunt reiciendis nemo."
                    icon1={<FontAwesomeIcon icon={ faHtml5 } className={iconStyles}/> }
                    icon2={<FontAwesomeIcon icon={ faCss3Alt } className={iconStyles}/>}
                    icon3={<FontAwesomeIcon icon={ faJsSquare } className={iconStyles}/>}
                    icon4={<SiTailwindcss className={iconStyles}/>}
                    
                    />
                    <Card
                    url = "https://armeriacentinela.com"
                    image={elCentinela}
                    title="El Centinela"
                    text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa sit cupiditate corporis explicabo pariatur, non quasi enim nesciunt reiciendis nemo."
                    icon1={<FontAwesomeIcon icon={ faWordpress } className={iconStyles}/> }
                    
                    
                    />
                    <Card
                    image={urban}
                    title="Urban Clothes"
                    text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa sit cupiditate corporis explicabo pariatur, non quasi enim nesciunt reiciendis nemo."
                    icon1={<FontAwesomeIcon icon={ faHtml5 }  className={iconStyles}/> }
                    icon2={<FontAwesomeIcon icon={ faCss3Alt } className={iconStyles}/>}
                    icon3={<FontAwesomeIcon icon={ faReact } className={iconStyles}/>}
                    icon4={<SiTailwindcss className={iconStyles}/>}
                    
                    />
                    <Card
                    image={arq}
                    title="ArqCad "
                    text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa sit cupiditate corporis explicabo pariatur, non quasi enim nesciunt reiciendis nemo."
                    icon1={<FontAwesomeIcon icon={ faHtml5 } className={iconStyles}/> }
                    icon2={<FontAwesomeIcon icon={ faCss3Alt } className={iconStyles}/>}
                    icon3={<FontAwesomeIcon icon={ faReact } className={iconStyles}/>}
                    icon4={<SiTailwindcss className={iconStyles}/>}
                    
                    />
                    <Card
                    image={exxa}
                    title="EXXA Motors"
                    text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa sit cupiditate corporis explicabo pariatur, non quasi enim nesciunt reiciendis nemo."
                    icon1={<FontAwesomeIcon icon={ faHtml5 } className={iconStyles}/> }
                    icon2={<FontAwesomeIcon icon={ faCss3Alt}  className={iconStyles}/>}
                    icon3={<FontAwesomeIcon icon={ faReact } className={iconStyles}/>}
                    icon4={<SiTailwindcss className={iconStyles}/>}
                    
                    />



            </section>
        </>
        
    )
}

export default Cards;