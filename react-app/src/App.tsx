import "./App.css";
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
    </div>
  );
}

export default App;
