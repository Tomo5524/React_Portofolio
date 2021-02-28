import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  const getIcon = name => {
    if (name === "github") {
      return faGithub
    }
    if (name === "linkedin") {
      return faLinkedin
    }
    if (name === "envelop") {
      return faEnvelope
    }
  }

  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
          <Fade bottom cascade>
            <h1>Contact</h1>
            <h2>{data.contactSubHeading}</h2>
          </Fade>
          <a className="email-link" href={`mailto:${data.contactEmail}`}>
            {data.contactEmail}
          </a>
          <div className="social-icons">
            {data.social.map(socialLink => (
              <a
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "10px",
                }}
              >
                {/* <img
                  src={socialLink.img}
                  alt="icons"
                  style={{
                    filter:
                      "invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%)",
                  }}
                ></img> */}
                <FontAwesomeIcon
                  icon={getIcon(socialLink.imgName)}
                  size="2x"
                  style={{
                    color: "inherit",
                  }}
                />
              </a>
            ))}
          </div>
          <span
            style={{
              paddingTop: "10px",
            }}
          >
            Made With <icon>❤</icon> by <a href="#">Tomo Takebuchi</a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer
