import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <ul className="menu">
        <li>
          <Link to={"/"}> Home </Link>
        </li>

        <li>
          <Link to={"users"}> Users Page </Link>
        </li>

        <li>
          <Link to={"contacts"}> Contacts Page </Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;