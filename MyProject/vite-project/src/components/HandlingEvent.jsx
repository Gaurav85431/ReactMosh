import React from "react";

const HandlingEvent = () => {
  let city = ["UP", "BR", "MP", "HR", "MH"];

  return (
    <div>
      <h1>Handling Event</h1>
      <li>
        {city.map((c, index) => (
          <li
            key={index}
            onClick={(event) =>
              console.log("Clicked", c, "index ", index, "event", event)
            }
          >
            {c}
          </li>
        ))}
      </li>
    </div>
  );
};

export default HandlingEvent;
