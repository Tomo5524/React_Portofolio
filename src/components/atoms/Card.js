import React from "react"
// import { getIcons } from "../stackIcons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import {
//   faJsSquare,
//   faHtml5,
//   faCss3Alt,
//   faAtom,
//   faBus,
//   faCoins,
//   faDice,
// } from "@fortawesome/free-solid-svg-icons"

// {
//   faStacks.forEach(faimg => {
//     ;<div style={{ display: "flex", alignItems: "center" }}>
//       <li>key={faimg.id}</li>
//       <a>
//         <FontAwesomeIcon
//           icon={faimg}
//           style={{
//             color: "inherit",
//           }}
//         />
//       </a>
//       ))
//     </div>
//   })
// }

// style={{
//         color: localStorage.getItem("theme") === "light" ? "black" : "white",
//       }}

const Card = ({ heading, paragraph, imgUrl, projectLink, faStacks }) => {
  // const stack_Icons = faStacks.map((item, idx) => (
  //   <FontAwesomeIcon
  //     key={idx}
  //     icon={faAtom}
  //     style={{
  //       color: "black",
  //     }}
  //   />
  // ))
  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
          imgUrl +
          ")",
      }}
    >
      <div className="content">
        <h1 className="header">{heading}</h1>
        <p className="text">{paragraph}</p>
        <a
          href={projectLink ? projectLink : "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Explore
        </a>
        {/* <div style={{ display: "flex", alignItems: "center" }}>
          {stack_Icons}
        </div> */}
      </div>
    </div>
  )
}

export default Card
