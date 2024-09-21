import React from "react";

function ConditionalRendering2() {
  let city = ["UP", "BR", "MP", "HR", "MH"];
  city = [];
  // put condtion in variable
  const condition = city.length === 0 ? <p>No data found</p> : null;

  // put condtion in function.
  const Condtions = () => {
    return city.length === 0 ? <p>No data found</p> : null;
  };

  return (
    <div>
      <h1>List</h1>
      {/* {city.length === 0 ? <p>No data found</p> : null} */}
      {/* {condition} */}
      {/* {Condtions()} */}

      {/* in JS true &&1 o/p: 1      true && 'Gaurav' o/p: Gaurav      false && 'Gaurav'  o/p: false*/}
      {city.length === 0 && <p>No data found</p>}

      <li>
        {city.map((c) => (
          <li>{c}</li>
        ))}
      </li>
    </div>
  );
}

export default ConditionalRendering2;
