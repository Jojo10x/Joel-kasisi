import NodeJS from "../../assets/node-js-2.png";
import Next from "../../assets/next.svg";
import { useTheme } from "../../contexts/useTheme";

const Section = () => {
  const { isDarkMode } = useTheme();

  const skillsData = [
    { name: "HTML", icon: "https://img.icons8.com/color/344/html-5--v1.png" },
    { name: "CSS", icon: "https://img.icons8.com/color/344/css3.png" },
    {
      name: "JavaScript",
      icon: "https://img.icons8.com/color/344/javascript--v1.png",
    },
    {
      name: "TypeScript",
      icon: "https://img.icons8.com/fluency/512/typescript--v1.png",
    },
    { name: "React", icon: "https://img.icons8.com/office/344/react.png" },
    {
      name: "Vue.js",
      icon: "https://img.icons8.com/?size=100&id=dzfo6UeXW9h7&format=png&color=000000",
    },
    {
      name: "Angular",
      icon: "https://img.icons8.com/?size=100&id=71257&format=png&color=000000",
    },
    {
      name: "Next.js",
      icon: isDarkMode
        ? Next
        : "https://cdn.worldvectorlogo.com/logos/next-js.svg",
    },
    {
      name: "React Native",
      icon: isDarkMode
        ? "https://img.icons8.com/?size=100&id=N3G7bBnphi53&format=png&color=000000"
        : "https://img.icons8.com/?size=100&id=35989&format=png&color=000000",
    },
    { name: "Node.js", icon: NodeJS },
    {
      name: "Python",
      icon: "https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
    },
    {
      name: "GraphQL",
      icon: "https://img.icons8.com/?size=100&id=KRA1PoZgRrca&format=png&color=000000",
    },
    {
      name: "REST API",
      icon: "https://img.icons8.com/?size=100&id=55497&format=png&color=000000",
    },
    {
      name: "Tailwind CSS",
      icon: "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000",
    },
    {
      name: "SASS",
      icon: "https://img.icons8.com/?size=100&id=QBqFNfPPB2Kx&format=png&color=000000",
    },
    {
      name: "PostgreSQL",
      icon: "https://img.icons8.com/?size=100&id=38561&format=png&color=000000",
    },
    {
      name: "MySQL",
      icon: "https://img.icons8.com/?size=100&id=rgPSE6nAB766&format=png&color=000000",
    },
    {
      name: "MongoDB",
      icon: "https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000",
    },
    {
      name: "Firebase",
      icon: "https://img.icons8.com/?size=100&id=62452&format=png&color=000000",
    },
    {
      name: "Git",
      icon: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000",
    },
    {
      name: "Docker",
      icon: "https://img.icons8.com/?size=100&id=22813&format=png&color=000000",
    },
    {
      name: "AWS",
      icon: "https://img.icons8.com/?size=100&id=wU62u24brJ44&format=png&color=000000",
    },
    {
      name: "Google Cloud",
      icon: "https://img.icons8.com/?size=100&id=WHRLQdbEXQ16&format=png&color=000000",
    },

    {
      name: "Redux",
      icon: "https://img.icons8.com/?size=100&id=jD-fJzVguBmw&format=png&color=000000",
    },
  ];

  return (
    <section id="services" className={isDarkMode ? "dark-mode" : "light-mode"}>
      <div className="services container">
        <div className="service-top">
          <h1 className="section-title hidden right">
            Ski<span>ll</span>s
          </h1>
        </div>
        <div className="service-bottom">
          {skillsData.map((skill, index) => (
            <div
              key={skill.name}
              className={`service-item ${
                index % 2 === 0 ? "right" : ""
              } logo hidden`}
            >
              <div className="icon">
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section;
