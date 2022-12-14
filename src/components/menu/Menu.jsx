import React from "react";
import "./Menu.css";
import { useState } from "react";

const Menu = () => {
  const [vehicles, setVehicles] = useState([
    {
      id: 1,
      name: "psdsd",
      plate: "asdasd",
      type: "adsasdsa",
      gasoline: "asdasdsad",
      location: "asdadads",
    },
    {
      id: 1,
      name: "psdsd",
      plate: "asdasd",
      type: "adsasdsa",
      gasoline: "asdasdsad",
      location: "asdadads",
    },
    {
      id: 1,
      name: "psdsd",
      plate: "asdasd",
      type: "adsasdsa",
      gasoline: "asdasdsad",
      location: "asdadads",
    },
  ]);
  console.log(vehicles);
  const [type, setType] = useState("");
  return (
    <>
      <div className="mainContainer">
        <div className="menuButtons">
          <button onClick={() => setType("all")} className="buttons">
            ALL
          </button>
          <button onClick={() => setType("vehicles")} className="buttons">
            VEHICLES
          </button>
          <button onClick={() => setType("locations")} className="buttons">
            LOCATIONS
          </button>
        </div>
        <div className="menuContainer">
          {type === "all" && (
            <>
              {vehicles.map((car) => {
                <span>{car.gasoline}</span>;
                <span>{car.id}</span>;
              })}
            </>
          )}
          {type === "vehicles" && <div>vehicles</div>}
          {type === "locations" && <div>locations</div>}
        </div>
      </div>
    </>
  );
};

export default Menu;
