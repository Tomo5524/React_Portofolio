import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import { ThemeProvider } from "styled-components"
import { useDarkMode } from "./useDarkMode"
import { GlobalStyles } from "./Globalstyle"
import { lightTheme, darkTheme } from "./Themes"
import Toggle from "./Toggler"

const Navbar = () => {
  const [theme, themeToggler, mountedComponent] = useDarkMode()
  const themeMode = theme === "light" ? lightTheme : darkTheme
  if (!mountedComponent) return <div />
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <div className="section">
        <div className="container">
          <div className="navbar-wrapper">
            <div
              role="button"
              onClick={() => scrollTo("#home")}
              className="name"
              tabIndex={0}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <h2>T.T</h2>
                <div class="animation">
                  <div class="sk-grid">
                    <div
                      class="sk-grid-cube"
                      style={{
                        backgroundColor: theme === "light" ? "black" : "white",
                        transition: "1.2s",
                      }}
                    ></div>
                    <div
                      class="sk-grid-cube"
                      style={{
                        backgroundColor: theme === "light" ? "black" : "white",
                        transition: "1.2s",
                      }}
                    ></div>
                    <div
                      class="sk-grid-cube"
                      style={{
                        backgroundColor: theme === "light" ? "black" : "white",
                        transition: "1.2s",
                      }}
                    ></div>
                    <div
                      class="sk-grid-cube"
                      style={{
                        backgroundColor: theme === "light" ? "black" : "white",
                        transition: "1.2s",
                      }}
                    ></div>
                    <div
                      class="sk-grid-cube"
                      style={{
                        backgroundColor: theme === "light" ? "black" : "white",
                        transition: "1.2s",
                      }}
                    ></div>
                    <div
                      class="sk-grid-cube"
                      style={{
                        backgroundColor: theme === "light" ? "black" : "white",
                        transition: "1.2s",
                      }}
                    ></div>
                    <div
                      class="sk-grid-cube"
                      style={{
                        backgroundColor: theme === "light" ? "black" : "white",
                        transition: "1.2s",
                      }}
                    ></div>
                    <div
                      class="sk-grid-cube"
                      style={{
                        backgroundColor: theme === "light" ? "black" : "white",
                        transition: "1.2s",
                      }}
                    ></div>
                    <div
                      class="sk-grid-cube"
                      style={{
                        backgroundColor: theme === "light" ? "black" : "white",
                        transition: "1.2s",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="links-wrapper"
              style={{ display: "flex", alignItems: "center" }}
            >
              <button onClick={() => scrollTo("#work")}>Projects</button>
              <button onClick={() => scrollTo("#about")}>About</button>
              {/* <button onClick={() => scrollTo("#contact")}>Contact</button> */}
              <Toggle theme={theme} toggleTheme={themeToggler} />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default Navbar
