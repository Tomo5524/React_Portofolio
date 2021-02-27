import React from "react"
import { func, string } from "prop-types"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAdjust } from "@fortawesome/free-solid-svg-icons"

const Button = styled.button`
  ${({ theme }) => theme.toggleBorder};
  
  }
`

// style={{
//           color: theme === "light" ? "black" : "white",
//           transition: "1s",
//         }}

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <Button
      onClick={toggleTheme}
      style={{ outline: "none", background: "none", border: "none" }}
    >
      <FontAwesomeIcon
        icon={faAdjust}
        size="2x"
        style={{
          color: "inherit",
        }}
      />
      {/* <i class="fas fa-adjust fa-2x"></i> */}
    </Button>
  )
}

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle
