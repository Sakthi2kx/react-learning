import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {
  const items = ["New York", "Mumbai", "London", "Tokyo", "Paris"];
  const [alertVisibile, setAlertVisibility] = useState(false);

  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  const handleSelectedItem = (item: String) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading={"Cities"}
        onSelectItem={handleSelectedItem}
      />
      {alertVisibile && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Your choice <span>Submitted</span>
        </Alert>
      )}
      <Button color="secondary" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>

      {/* <Message/> */}

      {/* to demostrate sharing state between components */}
      {/* <NavBar cartItemsCount={cartItems.length}/>
      <Cart cartItems={cartItems} onClear={() => setCartItems([])}/> */}
    </div>
  );
}

export default App;
