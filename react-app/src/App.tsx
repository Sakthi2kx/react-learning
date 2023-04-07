import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";
import FormZod from "./components/FormZod";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import categories from "./expense-tracker/categories";

function App() {
  const items = ["New York", "Mumbai", "London", "Tokyo", "Paris"];
  const [alertVisibile, setAlertVisibility] = useState(false);

  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  const handleSelectedItem = (item: String) => {
    console.log(item);
  };

  const [expenses, setExpenses] = useState([
    { id: 1, description: "Milk", amount: 5, category: "Groceries" },
    { id: 2, description: "Egg", amount: 10, category: "Groceries" },
    { id: 3, description: "Electricity", amount: 100, category: "Utilities" },
    { id: 4, description: "Movies", amount: 15, category: "Entertainment" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      {/* <ListGroup
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
      </Button> */}

      {/* <Message/> */}

      {/* to demostrate sharing state between components */}
      {/* <NavBar cartItemsCount={cartItems.length}/>
      <Cart cartItems={cartItems} onClear={() => setCartItems([])}/> */}

      {/* <ExpandableText maxChars={50}>
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
      </ExpandableText> */}

      {/* <FormZod/> */}
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      {expenses.length !== 0 ? (
        <ExpenseList
          expenses={visibleExpenses}
          onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
        />
      ) : null}
    </div>
  );
}

export default App;
