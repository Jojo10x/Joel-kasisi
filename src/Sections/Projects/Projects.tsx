import RotatingText from "../../Components/RotatingText";

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects container">
        <div className="projects-header">
          <h1 className="section-title hidden">
            Pro<span>jects</span>
          </h1>
        </div>
        <div className="all-projects"></div>
        <RotatingText text="•GitHub Link •Click Here •Jojo10x" />
      </div>
    </section>
  );
};

export default Projects;
