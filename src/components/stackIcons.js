import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import {
//   faReact,
//   faJsSquare,
//   faHtml5,
//   faCss3Alt,
//   faAtom,
//   faBus,
//   faCoins,
//   faDice,
// } from "@fortawesome/free-solid-svg-icons"
import {
  faReact,
  faJsSquare,
  faPython,
  faHtml5,
  faCss3Alt,
} from "@fortawesome/free-brands-svg-icons"

// function getIcons(props) {
//   console.log("hiya")
//   console.log("🚀 ~ file: stackIcons.js ~ line 15 ~ getIcons ~ props", props)
//   return (
//     <div>
//       <FontAwesomeIcon
//         icon={`${props.value}`}
//         style={{
//           color: "inherit",
//         }}
//       />
//     </div>
//   )
// }

// export default getIcons

function getIcons(props) {
  console.log("hiya")
  console.log("🚀 ~ file: stackIcons.js ~ line 15 ~ getIcons ~ props", props)
  return (
    <div>
      <FontAwesomeIcon
        icon={`${props.value}`}
        style={{
          color: "inherit",
        }}
      />
    </div>
  )
}

export default getIcons
