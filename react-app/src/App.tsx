import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import ExpandableText from "./components/ExpandableText";

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

      <ExpandableText maxChars={50}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
        necessitatibus totam quaerat dolore nemo ab officia, labore itaque
        consequuntur cumque id placeat illum laboriosam repellendus culpa vel.
        Explicabo fugiat a magnam corrupti odio minus eligendi nihil
        repudiandae, ipsa praesentium doloremque quisquam deleniti totam dolore
        porro ex, dolorum, nostrum ratione. Vel similique perferendis
        consectetur officia dolores error quia pariatur officiis soluta deserunt
        nobis earum velit, magnam eaque quo modi sequi, explicabo adipisci
        recusandae. Laudantium sit optio accusamus porro sint facere aperiam
        perferendis voluptate sequi eaque quod, voluptatibus hic eligendi.
        Deleniti cumque culpa reiciendis id commodi est minima qui vitae
        possimus sit?
      </ExpandableText>
    </div>
  );
}

export default App;
