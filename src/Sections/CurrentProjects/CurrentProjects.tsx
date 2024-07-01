import WebsitePreview from "../../components/WebsitePreview";

  const CurrentProjects = () => {
    return (
      <section id="current-projects">
        <div className=" contact container">
          <div>
            <h1 className="section-title hidden right">
              Current <span>Projects</span>
            </h1>
          </div>
        </div>
        <div className="container">
          <WebsitePreview url={"https://luxwear.netlify.app/"} />
          <WebsitePreview url={"https://elitecarss.netlify.app/"} />
        </div>
        <h1 className="section-title">I WANT TO SEE MORE</h1>
      </section>
    );
  };
  
  export default CurrentProjects;