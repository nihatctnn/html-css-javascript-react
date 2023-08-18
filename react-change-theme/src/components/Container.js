import { useContext } from "react";
import Button from "./Button";

import ThemeContext from "../context/ThemeContext";

function Container() {
  const { theme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <div className={`app ${theme}`}>
      <header></header>

      <br />

      <Button />
    </div>
  );
}

export default Container;
