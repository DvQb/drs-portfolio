import Toggle from "../components/Toggle";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Cards from "../components/Cards";

const Projects = () => {
  return (
    <div className="transition-colors duration-300 dark:bg-background dark:text-textPrimary">
      <Header />
      <Toggle />
      <Cards />
      <Footer />
    </div>
  );
};

export default Projects;
