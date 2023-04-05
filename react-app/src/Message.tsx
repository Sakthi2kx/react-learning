import { useState } from "react";

const Message = () => {
  const name = "Sakthi";
  const [tags, setTags] = useState(["happy", "cheerful"]);
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);
  const [customer, setCustomer] = useState({
    name: "Sakthi",
    address: {
      city: "salem",
      pincode: 683757,
    },
  });

  const handleClick = () => {
    //updating objects
    setCustomer({
      ...customer,
      address: { ...customer.address, pincode: 695949 },
    });

    //add element to array
    setTags([...tags, "exciting"]);

    //remove element from an array
    setTags(tags.filter((tag) => tag !== "happy"));

    //update an element from an array
    setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));

    setBugs(bugs.map((bug) => bug.id === 1 ? {...bug, fixed: true} : bug))
  };

  return (
    <>
      {name ? <h1>Hello {name}</h1> : <h1>Hello World</h1>}
      <p>
        Get Updated info: {customer.name} {customer.address.city}{" "}
        {customer.address.pincode}
      </p>
      <button onClick={handleClick}> Update </button>
    </>
  );
};

export default Message;
