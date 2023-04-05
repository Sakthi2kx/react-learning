import { useState } from "react";

const Message = () => {
  const name = "Sakthi";
  const [customer, setCustomer] = useState({
    name: "Sakthi",
    address: {
      city: "salem",
      pincode: 683757,
    },
  });

  const handleClick = () => {
    setCustomer({ ...customer, address: {...customer.address, pincode: 695949} });
  };

  return (
    <>
      {name ? <h1>Hello {name}</h1> : <h1>Hello World</h1>}
      <p>Get Updated info: {customer.name} {customer.address.city} {customer.address.pincode}</p>
      <button onClick={handleClick}> Update </button>
    </>
  );
};

export default Message;
