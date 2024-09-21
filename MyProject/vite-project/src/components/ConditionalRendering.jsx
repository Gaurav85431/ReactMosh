import React from "react";

const ConditionalRendering = () => {
  let city = ["UP", "BR", "MP", "HR", "MH"];
  city = [];
  if (city.length === 0) {
    return (
      <>
        <h1>List</h1>
        <h1>No data found</h1>
      </>
    );
  }
  // <h1>List</h1> is 2 bar so 2nd way
  return (
    <div>
      <h1>List</h1>
      {city.map((c) => (
        <li>{c}</li>
      ))}
    </div>
  );
};

export default ConditionalRendering;
