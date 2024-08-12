import { skillsData } from "../../data/skills.js";
import { skillsImage } from "../../data/constants.js";
import Marquee from "react-fast-marquee";
import './skills.css'; // Import the CSS file

function Skills() {
  return (
    <div id="Skills" className="skills-section">
      <div className="blur-background"></div>

      <div className="divider">
        <div className="line"></div>
      </div>

      <div className="skills-header">
        <div className="skills-title-container">
          <span className="line"></span>
          <span className="skills-title">Skills</span>
          <span className="line"></span>
        </div>
      </div>

      <div className="skills-marquee">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => (
            <div className="skill-item" key={id}>
              <div className="skill-box">
                <div className="skill-box-divider"></div>
                <div className="skill-content">
                  <div className="skill-image-container">
                    <img
                      src={skillsImage(skill)}
                      alt={skill}
                      className="skill-image"
                    />
                  </div>
                  <p className="skill-name">{skill}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Skills;
