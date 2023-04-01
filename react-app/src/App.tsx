import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "Mumbai", "London", "Tokyo", "Paris"];
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
      <Alert>
        Hello <span>World</span>
      </Alert>
      <Button color="secondary" onClick={() => console.log("Button clicked")}>
        My Button
      </Button>
    </div>
  );
}

export default App;
