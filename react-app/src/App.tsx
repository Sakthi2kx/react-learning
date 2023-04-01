import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "Mumbai", "London", "Tokyo", "Paris"];
  const [alertVisibile, setAlertVisibility] = useState(false);

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
    </div>
  );
}

export default App;
