import React from "react"
import data from "../yourdata"
import Fade from "react-reveal/Fade"
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
import reactIcon from "../images/react-2.svg"
import mongodbIcon from "../images/mongodb-icon-1.svg"
import saasIcon from "../images/sass-1.svg"
import cssIcon from "../images/css3.svg"
import bootstrapIcon from "../images/bootstrap-4.svg"
import pm2Icon from "../images/pm2.svg"
import nodeIcon from "../images/nodejs.svg"
import digitaloceanIcon from "../images/digitalocean-logo.svg"
import html5Icon from "../images/html5.svg"
import jsIcon from "../images/logo-javascript.svg"
import pythonIcon from "../images/python-5.svg"
import nginxIcon from "../images/nginx.svg"

// prpbably need to hard code all stacks

const Skills = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="skills-container">
          <Fade bottom>
            <h1>Stacks</h1>
          </Fade>
          {/* <div className="skills-grid">
            {data.skills.map(skill => (
              <div className="skill" key={skill.id}>
                <img src={skill.img} alt="css"></img>
                <p>{skill.para}</p>
              </div>
            ))} */}
          <div className="skills-grid">
            {/* <Fade bottom cascade> */}
            <div className="skill icon-div">
              {/* <FontAwesomeIcon
                icon={faReact}
                style={{
                  color: "#61DBFB",
                }}
                className="icon-skill"
              /> */}
              <div className="skill icon-div">
                <img src={reactIcon} alt="Python" className="icon-skill" />
              </div>
            </div>
            <div className="skill icon-div">
              <img src={pythonIcon} alt="Python" className="icon-skill" />
            </div>
            <div className="skill icon-div">
              <img src={jsIcon} alt="Javascript" className="icon-skill" />
            </div>
            <div className="skill icon-div">
              <img
                src={nodeIcon}
                alt="Node.js"
                style={{ fill: "inherit" }}
                className="icon-skill"
              />
            </div>
            <div className="skill icon-div">
              <img src={html5Icon} alt="html5" className="icon-skill" />
            </div>
            <div className="skill icon-div">
              <img src={cssIcon} alt="css" className="icon-skill" />
            </div>
            <div className="skill icon-div">
              <img src={mongodbIcon} alt="mongodb" className="icon-skill" />
            </div>
            <div className="skill icon-div">
              <img src={saasIcon} alt="saas" className="icon-skill" />
            </div>
            <div className="skill icon-div">
              <img src={bootstrapIcon} alt="Bootstrap" className="icon-skill" />
            </div>
            <div className="skill icon-div">
              <img
                src={digitaloceanIcon}
                alt="digitalocean"
                className="icon-skill"
              />
            </div>
            <div className="skill icon-div">
              <img src={pm2Icon} alt="pm2" className="icon-skill" />
            </div>
            <div className="skill icon-div">
              <img src={nginxIcon} alt="nginx" className="icon-skill" />
            </div>
            {/* <img
              src={nginxIcon}
              alt="nginx"
              width="52"
              className="icon-skill"
            /> This wrong */}

            {/* <img
              width="32"
              alt="CSS3 logo and wordmark"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/256px-CSS3_logo_and_wordmark.svg.png"
            /> */}

            {/* <FontAwesomeIcon
              icon={faCss3Alt}
              size="2x"
              style={{
                color: "inherit",
              }}
              className="icon-skill"
            /> */}
            {/* </div> */}
            {/* </Fade> */}
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default Skills
