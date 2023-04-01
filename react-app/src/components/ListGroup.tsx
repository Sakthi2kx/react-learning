const ListGroup = () => {
  const items = ["New York", "Mumbai", "London", "Tokyo", "Paris"];
  return (
    <>
      <h1>List of items</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
