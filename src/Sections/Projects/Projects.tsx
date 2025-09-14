import { useTheme } from "../../contexts/useTheme";
import { useNavigate } from "react-router";
import RotatingText from "../../Components/RotatingText";

const Projects = () => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();

  const goToProjects = () => {
       navigate("/projects");
  }
  return (
    <section id="projects" className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <div className="projects container">
        <div className="projects-header">
          <h1 className="section-title hidden">
            Pro<span>jects</span>
          </h1>
        </div>
        <div className="all-projects"></div>
        <RotatingText text="•GitHub Link •Click Here •Jojo10x" />
        <button className="cta right hidden" onClick={goToProjects}>Current Projects</button>
      </div>
    </section>
  );
};

export default Projects;
