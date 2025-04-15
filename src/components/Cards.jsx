import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faReact,
  faJsSquare,
  faPython,
  faWordpress,
  
} from "@fortawesome/free-brands-svg-icons";
import { SiDjango, SiTailwindcss, SiJson } from "react-icons/si";
import beautySpace from "../assets/img/beauty-space.webp";
import donCimarron from "../assets/img/don-cimarron.webp";
import urban from "../assets/img/urban-clothes.webp";
import arq from "../assets/img/arq.webp";
import exxa from "../assets/img/cars-shop.webp";
import dispel from "../assets/img/dispelAE.png";
import elCentinela from "../assets/img/elCentinela.png";
import manage from "../assets/img/manage.png";
import extensionList from "../assets/img/extensionList.png";

const mdCardStyle =
  " bg-white dark:bg-[#2a2a2a] shadow-xl h-[580px] w-[300px] lg:w-[550px] lg:h-[650px] rounded-2xl my-auto text-textPrimary grid gap-3 justify-end my-8 overflow-hidden hover:scale-105  ";

const iconStyles = "text-3xl ";

const Card = ({ url, image, title, text, icon1, icon2, icon3, icon4 }) => {
  const handleClick = () => {
    window.open(url, "_blank");
  };

  return (
    <div onClick={handleClick} className={mdCardStyle}>
      <img src={image} className="w-full h-44 lg:h-80" alt="project image" />

      <h3 className="mx-auto text-lg md:text-xl lg:text-2xl text-nowrap px-4 w-auto mt-3">
        {title}
      </h3>
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
  );
};

const Cards = () => {
  return (
    <div className="grid justify-center mb-14">
      <h3 className="justify-self-center text-2xl md:text-3xl mb-5 lg:mb-8">
        PROJECTS
      </h3>

      <section className=" grid md:grid-cols-2 lg:flex lg:justify-center lg:flex-wrap lg:gap-20 lg:mx-12 gap-12 m-auto py-8 mb-10 max-w-[1440px] ">
        <Card
          image={manage}
          title="Landing page"
          text="This site was created from a Front End Mentor Challenge exercise. The project included HTML, CSS, JS, and Tailwind. During development, I learned how to use Tailwind CSS and how to use it for responsive design."
          icon1={<FontAwesomeIcon icon={faHtml5} className={iconStyles} />}
          icon2={<FontAwesomeIcon icon={faCss3Alt} className={iconStyles} />}
          icon3={<FontAwesomeIcon icon={faJsSquare} className={iconStyles} />}
          icon4={<SiTailwindcss className={iconStyles} />}
        />

        {/*                                 
                    <Card
                    
                    image={donCimarron}
                    title="Don Cimarron"
                    text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa sit cupiditate corporis explicabo pariatur, non quasi enim nesciunt reiciendis nemo."
                    icon1={<FontAwesomeIcon icon={ faHtml5 }  className={iconStyles}/> }
                    icon2={<FontAwesomeIcon icon={ faCss3Alt } className={iconStyles}/>}
                    icon3={<FontAwesomeIcon icon={ faReact } className={iconStyles}/>}
                    icon4={<SiTailwindcss className={iconStyles}/>}
                    
                    /> */}
        {/* <Card
                    image={beautySpace}
                    title="Beauty Space"
                    text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa sit cupiditate corporis explicabo pariatur, non quasi enim nesciunt reiciendis nemo."
                    icon1={<FontAwesomeIcon icon={ faPython } className={iconStyles}/> }
                    icon2={<SiDjango  className={iconStyles}/>}
                    icon3={<FontAwesomeIcon icon={ faReact } className={iconStyles}/>}
                    icon4={<SiTailwindcss className={iconStyles}/>}
                    

                    
                    /> */}

        <Card
          image={dispel}
          title="Disple AE"
          text="This web page was created for a local business to improve its marketing and recruiting reach. It features technologies such as React, Tailwind, and TypeScript."
          icon1={<FontAwesomeIcon icon={faReact} className={iconStyles} />}
          icon3={<FontAwesomeIcon icon={faJsSquare} className={iconStyles} />}
          icon4={<SiTailwindcss className={iconStyles} />}
        />
        <Card
          url="https://armeriacentinela.com"
          image={elCentinela}
          title="El Centinela"
          text="This landing page was created using WordPress as a tool. The page was designed for a local gun restoration company.."
          icon1={<FontAwesomeIcon icon={faWordpress} className={iconStyles} />}
        />
        <Card
          image={extensionList}
          title="Extension List"
          text="This extensions list was created from a Front End Mentor Challenge exercise. The project included HTML, CSS, React, Json, and Tailwind. During development, I learned how to create cards using useState and taking the data from a Json file."
          icon1={<FontAwesomeIcon icon={faHtml5} className={iconStyles} />}
          icon2={<FontAwesomeIcon icon={faReact} className={iconStyles} />}
          icon3={<SiTailwindcss className={iconStyles} />}
          icon4={<SiJson className={iconStyles} />}
        />

        {/* <Card
                    image={urban}
                    title="Urban Clothes"
                    text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa sit cupiditate corporis explicabo pariatur, non quasi enim nesciunt reiciendis nemo."
                    icon1={<FontAwesomeIcon icon={ faHtml5 }  className={iconStyles}/> }
                    icon2={<FontAwesomeIcon icon={ faCss3Alt } className={iconStyles}/>}
                    icon3={<FontAwesomeIcon icon={ faReact } className={iconStyles}/>}
                    icon4={<SiTailwindcss className={iconStyles}/>}
                    
                    /> */}
        {/* <Card
                    image={arq}
                    title="ArqCad "
                    text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa sit cupiditate corporis explicabo pariatur, non quasi enim nesciunt reiciendis nemo."
                    icon1={<FontAwesomeIcon icon={ faHtml5 } className={iconStyles}/> }
                    icon2={<FontAwesomeIcon icon={ faCss3Alt } className={iconStyles}/>}
                    icon3={<FontAwesomeIcon icon={ faReact } className={iconStyles}/>}
                    icon4={<SiTailwindcss className={iconStyles}/>}
                    
                    /> */}
        {/* <Card
                    image={exxa}
                    title="EXXA Motors"
                    text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa sit cupiditate corporis explicabo pariatur, non quasi enim nesciunt reiciendis nemo."
                    icon1={<FontAwesomeIcon icon={ faHtml5 } className={iconStyles}/> }
                    icon2={<FontAwesomeIcon icon={ faCss3Alt}  className={iconStyles}/>}
                    icon3={<FontAwesomeIcon icon={ faReact } className={iconStyles}/>}
                    icon4={<SiTailwindcss className={iconStyles}/>}
                    
                    /> */}
      </section>
    </div>
  );
};

export default Cards;
