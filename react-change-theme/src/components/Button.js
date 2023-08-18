import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function Button() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="buttonContainer">
      Active Theme: {theme}
      <br />
      <button
        className="changeTheme"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        Change Theme
      </button>
    </div>
  );
}

export default Button;
