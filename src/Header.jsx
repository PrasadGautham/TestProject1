import { NavLink, Outlet } from "react-router";
import "./Header.scss";
import { useState } from "react";

const Header = () => {
  const [theme, setTheme] = useState("light");
  const switchTheme = () => {
    setTheme((theme) => {
      return theme === "light" ? "dark" : "light";
    });
  };
  return (
    <div className={theme === "light" ? "" : "dark"}>
      <nav className={"appNav"}>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/jsx"
        >
          {" "}
          JSX{" "}
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/dynamic/44"
        >
          Dynamic
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/form"
          end
        >
          {" "}
          FormGeneral{" "}
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/form/uncontrolled"
        >
          {" "}
          FormUncontrolled{" "}
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/form/controlled"
        >
          {" "}
          Formcontrolled{" "}
        </NavLink>
        <button onClick={switchTheme}>Switch to {theme==="light"?"dark":"light"}</button>
      </nav>
      <Outlet />
    </div>
  );
};
export default Header;
