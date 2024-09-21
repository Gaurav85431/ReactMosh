import React, { useState } from "react";

const Hooks = () => {
  const list = ["a", "b", "c", "d", "e"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div>
      {list.map((item, index) => (
        <li
          className={
            selectedIndex === index
              ? "list-group-item active"
              : "list-group-item"
          }
          key={item}
          onClick={() => {
            selectedIndex = index;
          }}
        >
          {item}
        </li>
      ))}
    </div>
  );
};

export default Hooks;
