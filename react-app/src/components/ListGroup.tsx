import { useState } from "react";

const ListGroup = () => {
  const items = ["New York", "Mumbai", "London", "Tokyo", "Paris"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List of items</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
