import { NavLink } from "react-router";
import "./Header.scss";
import { useTheme } from "./ThemeContext";

const Header = () => {
  const { theme, switchTheme } = useTheme();

  return (
    // <div className={theme}>
    <nav className={"appNav"}>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        to="/jsx"
      >
        JSX
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
        FormGeneral
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        to="/form/uncontrolled"
      >
        FormUncontrolled
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        to="/form/controlled"
      >
        Formcontrolled
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        to="/api"
      >
        API
      </NavLink>
      <button onClick={switchTheme}>
        Switch to {theme === "light" ? "dark" : "light"}
      </button>
    </nav>

    // </div>
  );
};
export default Header;
