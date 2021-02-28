import React from "react"
import data from "../yourdata"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  faGithub,
  faLinkedin,
  faHtml5,
  faCss3Alt,
  faReact,
  faJsSquare,
  faPython,
} from "@fortawesome/free-brands-svg-icons"

// prpbably need to hard code all stacks

const Skills = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="skills-container">
          <h1>Stacks</h1>
          <div className="skills-grid">
            {data.skills.map(skill => (
              <div className="skill" key={skill.id}>
                <img src={skill.img} alt="css"></img>
                <p>{skill.para}</p>
              </div>
            ))}
            {/* <div className="skill">
              <FontAwesomeIcon
                icon={faReact}
                size="2x"
                style={{
                  color: "inherit",
                }}
              />
              <FontAwesomeIcon
                icon={faPython}
                size="2x"
                style={{
                  color: "inherit",
                }}
              />
              <FontAwesomeIcon
                icon={faJsSquare}
                size="2x"
                style={{
                  color: "inherit",
                }}
              />
              <FontAwesomeIcon
                icon={faHtml5}
                size="2x"
                style={{
                  color: "inherit",
                }}
              />
              <FontAwesomeIcon
                icon={faCss3Alt}
                size="2x"
                style={{
                  color: "inherit",
                }}
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
