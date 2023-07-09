import React, { useState } from "react";

const Interview = () => {
  // 1. First Project
  const arr = ["Pulsar", "Bajaj", "Hero", "Activa"];
  const [data, setData] = useState(arr);
  const [check, setCheck] = useState(false);
  const handleClick = (itemIndex) => {
    const newArr = [...data];
    newArr.splice(itemIndex, 1);
    setData(newArr);
  };
  const handleCheckBox = (e) => {
    if (e.target.checked) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  };

  // 2. Second Project

  const countries = [
    {
      name: "India",
      value: "IND",
      cities: ["Delhi", "Mumbai"],
    },
    {
      name: "Pakistan",
      value: "PAK",
      cities: ["Lahore", "Karachi"],
    },
    {
      name: "Bangladesh",
      value: "BAN",
      cities: ["Dhaka", "Chittagong"],
    },
  ];
  const [country, setCountry] = useState("");
  const handleCountry = (e) => {
    setCountry(e.target.value);
  };

  const filterData = countries.find((item) => {
    return item.value == country;
  });

  //   3. Third Project
  const options = ["Football", "Cricket", "Hockey"];
  const days = ["Weekday", "Weekend"];

  const [game, setGame] = useState("");
  const [day, setDay] = useState("");
  console.log(day);
  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <ul>
            {data.map((item, index) => {
              return (
                <li key={index} style={{ paddingBottom: "10px" }}>
                  <input
                    type="checkbox"
                    className="me-2"
                    onChange={handleCheckBox}
                  />
                  {item}

                  {check ? (
                    <button
                      type="button"
                      className="btn "
                      onClick={() => {
                        handleClick(index);
                      }}
                    >
                      X
                    </button>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-md-4">
          {/* First Dropdown */}
          <select
            className="form-select mb-3"
            onChange={handleCountry}
          >
            {countries.map((item, index) => {
              return (
                <option key={index} value={item.value}>
                  {item.name}
                </option>
              );
            })}
          </select>
          {/* Second Dropdown */}
          {filterData && (
            <select className="form-select">
              {filterData.cities.map((item, index) => {
                return <option key={index}>{item}</option>;
              })}
            </select>
          )}
        </div>
        <div className="col-md-4">
          <h3>Which Game</h3>
          {options.map((item, index) => {
            return (
              <>
                <div className="form-radio" key={index}>
                  <input type="radio" className="me-2" value={item} onChange={(e)=> setGame(e.target.value)} />
                  <label htmlFor="Options">{item}</label>
                </div>
              </>
            );
          })}
          <hr />
          <h5>Select Days</h5>
          {days.map((item, index) => {
            return (
              <>
                <div className="form-radio" key={index}>
                  <input type="radio" className="me-2" value={item} onChange={(e)=> setDay(e.target.value)} />
                  <label htmlFor="Options">{item}</label>
                </div>
              </>
            );
          })}
          <hr />
          <h5>You Will Play</h5>
          {game && <p>{game} on {day}</p>}
          
        </div>
      </div>
    </>
  );
};

export default Interview;
