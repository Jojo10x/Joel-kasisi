import { SetStateAction, useState } from "react";
import PageHeader from "../../src/Sections/PagesHeader/PageHeader";
import ProjectCard from "./ProjectCard";
import "./projects.scss";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const projects = [
    {
      id: 1,
      src: "https://plus.unsplash.com/premium_photo-1682126202084-f23c6cee5dbc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      header: "BOARD FUSION",
      description: "BoardFusion is a comprehensive board management platform that empowers governance leaders with essential tools, real-time analytics, and secure collaboration features. It streamlines board evaluations, enhances governance oversight, and simplifies the management of meetings, documents, and agendas. With BoardFusion, boards can stay informed, make strategic decisions, and manage complex processes with transparency and efficiency, ensuring effective and secure board governance in a fast-evolving business landscape.",
      status: "COMPLETED",
      url: "https://boardfusion.co.zm/"
    },
    {
      id: 2,
      src: "your-image-url2.jpg",
      header: "Project Two",
      description: "Your second project description here",
      status: "In Progress",
      url: "https://project2.com"
    },
    {
      id: 3,
      src: "your-image-url3.jpg",
      header: "Project Three",
      description: "Your third project description here",
      status: "Support Phase",
      url: "https://project3.com"
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.status.toLowerCase().replace(' ', '-') === activeFilter);

  const filters = [
    { key: 'all', label: 'All Projects', icon: '🚀' },
    { key: 'completed', label: 'Completed', icon: '✅' },
    { key: 'in-progress', label: 'In Progress', icon: '⚡' },
    { key: 'support-phase', label: 'Support Phase', icon: '🔧' }
  ];

  const currentFilter = filters.find(f => f.key === activeFilter);

  const handleFilterSelect = (filterKey: SetStateAction<string>) => {
    setActiveFilter(filterKey);
    setIsDropdownOpen(false);
  };

  return (
    <>
      <PageHeader />

      <div className="projects-intro">
        <h2>Bugs? What Bugs? <span>🐛</span></h2>
        <p>They're not bugs, they're undocumented features.</p>
      </div>

      <div className="projects-filter">
        <div className="filter-dropdown">
          <button
            className="glass-filter-btn"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span className="filter-icon">{currentFilter?.icon ?? '🚀'}</span>
            <span className="filter-text">{currentFilter?.label ?? 'All Projects'}</span>
            <span className={`chevron ${isDropdownOpen ? 'open' : ''}`}>▼</span>
          </button>

          {isDropdownOpen && (
            <div className="dropdown-menu">
              {filters.map(filter => (
                <button
                  key={filter.key}
                  className={`dropdown-item ${filter.key === activeFilter ? 'active' : ''}`}
                  onClick={() => handleFilterSelect(filter.key)}
                >
                  <span className="item-icon">{filter.icon}</span>
                  <span>{filter.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="projects-page">
        {filteredProjects.map(project => (
          <ProjectCard
            key={project.id}
            src={project.src}
            header={project.header}
            description={project.description}
            status={project.status}
            url={project.url}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;