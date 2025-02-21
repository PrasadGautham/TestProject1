import { createContext, useContext, useState } from "react";

const Context = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const switchTheme = () => {
    setTheme((theme) => {
      return theme == "light" ? "dark" : "light";
    });
  };

  return (
    <Context value={{ theme, switchTheme }}>
      <div className={theme}>{children}</div>{" "}
    </Context>
  );
};
export const useTheme = () => useContext(Context); // custom hook for better readability and reusability
