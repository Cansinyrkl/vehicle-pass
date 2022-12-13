import React from "react";
import "./Menu.css";

const Menu = () => {
  return (
    <>
      <div className="menuContainer">
        <div className="menuButtons">
          <button className="buttons">ALL</button>
          <button className="buttons">VEHICLES</button>
          <button className="buttons">LOCATIONS</button>
        </div>
      </div>
      <div className="menu"></div>
    </>
  );
};

export default Menu;
