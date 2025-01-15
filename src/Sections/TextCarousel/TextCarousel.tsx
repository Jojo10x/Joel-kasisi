import { useEffect, useRef } from "react";
import { useTheme } from "../../contexts/ThemeContext";

interface Course {
  id: number;
  title: string;
}

const TextCarousel = () => {
  const { isDarkMode } = useTheme();
  const carouselRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const track = trackRef.current;
          if (!track) return;

          if (entry.isIntersecting) {
            track.classList.add("animate-carousel");
          } else {
            track.classList.remove("animate-carousel");
            track.style.transform = "translateX(0)";
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, []);

  const courses: Course[] = [
    { id: 1, title: "Conquering Responsive Layouts" },
    { id: 2, title: "Responsive Web Design" },
    { id: 3, title: "JavaScript Algorithms and Data Structures" },
    { id: 4, title: "Front End Development Libraries " },
    { id: 5, title: "Terminal, Bash & VIM Essentials " },
    { id: 6, title: "Data Visualization" },
    { id: 7, title: "Relational Database " },
    { id: 8, title: "Back End Development and APIs" },
    { id: 9, title: "Quality Assurance" },
    { id: 10, title: " Scientific Computing with Python" },
    { id: 11, title: "Data Analysis with Python" },
    { id: 12, title: "Information Security" },
    { id: 13, title: "Machine Learning with Python" },
  ];

  const triplicatedCourses = [...courses, ...courses, ...courses];

  return (
    <section
      id="skills"
      className={`carousel-section ${isDarkMode ? "dark-mode" : "light-mode"}`}
    >
      <div className="carousel-container">
        <h3 className="section-title">
          Courses & <span>Certifications</span>
        </h3>
        <div className="carousel-wrapper" ref={carouselRef}>
          <div className="gradient-overlay left"></div>
          <div className="carousel-track" ref={trackRef}>
            {triplicatedCourses.map((course, index) => (
              <div key={`${course.id}-${index}`} className="course-card">
                <div className="card-content">
                  <h3>{course.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="gradient-overlay right"></div>
        </div>
      </div>
    </section>
  );
};

export default TextCarousel;
