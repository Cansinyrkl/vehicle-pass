import React, { useEffect, useMemo, useState } from "react";
import "./Menu.css";

const Menu = () => {
  const [type, setType] = useState("all");
  const [vehicles, setVehicles] = useState([
    {
      id: 1,
      name: "Ford",
      plate: "34 ASG 5141",
      type: "HAFİF & İYİ",
      gasoline: "18litre",
      location: "LOCASYONU",
      time: "22:08",
    },
    {
      id: 2,
      name: "BMW",
      plate: "25 TGV 1545",
      type: "HAFİF & YARIŞ",
      gasoline: "14litre",
      location: "LOCASYONU",
      time: "21:08",
    },
    {
      id: 3,
      name: "Chevrolet",
      plate: "85 GSS 5141",
      type: "AĞIR & AİLE",
      gasoline: "10litre",
      location: "LOCASYONU",
      time: "10:08",
    },
    {
      id: 4,
      name: "Citroen",
      plate: "65 HHG 5510",
      type: "HAFİF & AİLE",
      gasoline: "40litre",
      location: "LOCASYONU",
      time: "11:08",
    },
    {
      id: 5,
      name: "Dacia",
      plate: "74 FFF 5435",
      type: "HAFİF & TİCARİ",
      gasoline: "60litre",
      location: "LOCASYONU",
      time: "02:08",
    },
    {
      id: 6,
      name: "DS Automobiles",
      plate: "74 FFF 5435",
      type: "HAFİF & TİCARİ",
      gasoline: "60litre",
      location: "LOCASYONU",
      time: "02:08",
    },
    {
      id: 7,
      name: "Fiat",
      plate: "74 FFF 5435",
      type: "HAFİF & TİCARİ",
      gasoline: "60litre",
      location: "LOCASYONU",
      time: "02:08",
    },
    {
      id: 8,
      name: "Honda",
      plate: "74 FFF 5435",
      type: "HAFİF & TİCARİ",
      gasoline: "60litre",
      location: "LOCASYONU",
      time: "02:08",
    },
    {
      id: 9,
      name: "Hyundai",
      plate: "74 FFF 5435",
      type: "HAFİF & TİCARİ",
      gasoline: "60litre",
      location: "LOCASYONU",
      time: "02:08",
    },
    {
      id: 10,
      name: "Iveco",
      plate: "74 FFF 5435",
      type: "HAFİF & TİCARİ",
      gasoline: "60litre",
      location: "LOCASYONU",
      time: "02:08",
    },
    {
      id: 11,
      name: "Jeep",
      plate: "74 FFF 5435",
      type: "HAFİF & TİCARİ",
      gasoline: "60litre",
      location: "LOCASYONU",
      time: "02:08",
    },
    {
      id: 12,
      name: "KIA",
      plate: "74 FFF 5435",
      type: "HAFİF & TİCARİ",
      gasoline: "60litre",
      location: "LOCASYONU",
      time: "02:08",
    },
  ]);

  const [count, setCount] = useState(1);
  const [search, setSearch] = useState("");
  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  const filteredCar = vehicles.filter((car) => {
    return car.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <div className="mainContainer">
        <div className="menuButtons">
          <button
            onClick={() => setType("all")}
            className={`buttons ${type === "all" && "active"}`}
          >
            ALL
          </button>
          <button
            onClick={() => setType("vehicles")}
            className={`buttons ${type === "vehicles" && "active"}`}
          >
            VEHICLES
          </button>
          <button
            onClick={() => setType("locations")}
            className={`buttons ${type === "locations" && "active"}`}
          >
            LOCATIONS
          </button>
        </div>

        <input
          className="input"
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleChange}
        />

        <div className="menuContainer">
          {type === "all" &&
            filteredCar.map((car) => {
              return (
                <>
                  <div className="allInformation">
                    <li>{car.name}</li>
                    <li>{car.gasoline}</li>
                    <li>{car.plate}</li>
                    <li>{car.location}</li>
                    <li>{car.type}</li>
                  </div>
                  <hr className="hr" />
                </>
              );
            })}
          {type === "vehicles" &&
            filteredCar.map((car) => {
              return (
                <>
                  <div className="allInformation">
                    <li>{car.name}</li>
                    <li>{car.gasoline}</li>
                    <li>{car.plate}</li>
                  </div>
                  <hr />
                </>
              );
            })}
          {type === "locations" &&
            filteredCar.map((car) => {
              return (
                <>
                  <div className="allInformation">
                    <li>{car.type}</li>
                    <li>{car.location}</li>
                    <li>{car.plate}</li>
                  </div>
                  <hr />
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Menu;
