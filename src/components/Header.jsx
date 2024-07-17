import { useEffect, useState } from "react";
import "./Header.css";
export const Header = () => {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || "gOne"
  );

  document.documentElement.classList.add(theme);
  useEffect(() => {
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);
  return (
    <header className="header-bar">
      <div className="logo">
        <img className="main-logo" src="logo.JPG" alt="taskMateLogo" />
        <span className="main-logo-text">TODO</span>
      </div>
      <div className="themeSelector">
        <span
          onClick={() => setTheme("light")}
          className={theme == "light" ? "light selected" : "light"}
        ></span>
        <span
          onClick={() => setTheme("medium")}
          className={theme == "medium" ? "medium selected" : "medium"}
        ></span>
        <span
          onClick={() => setTheme("dark")}
          className={theme == "dark" ? "dark selected" : "dark"}
        ></span>
        <span
          onClick={() => setTheme("gOne")}
          className={theme == "gOne" ? "gOne selected" : "gOne"}
        ></span>
        <span
          onClick={() => setTheme("gTwo")}
          className={theme == "gTwo" ? "gTwo selected" : "gTwo"}
        ></span>
      </div>
    </header>
  );
};
