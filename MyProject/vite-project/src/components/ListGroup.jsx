import React from "react";

function ListGroup() {
  const items = ["New York, San Francisco", "Tokyo", "New Delhi", "Mumbai"];

  return (
    <div>
      <ul className="list-group">
        {/* <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li> */}

        {items.map((item) => (
          // {} X   () Y
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
