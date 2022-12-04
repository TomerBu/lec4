import { useState } from "react";
import "./App.css";
import AddCard from "./components/add-card/AddCard";
import BusinessList from "./components/business-list/BusinessList";
import list from "./services/business-list";
function App() {
  //נשמור את הרשימה כמשתנה מצב - ברגע שנעדכן את הרשימה - יעדכן את ממשק המשתמש
  const [cards, setCards] = useState(list);

  const deleteBusiness = (id: string) => {
    setCards((cards) => {
      let copy = [...cards];
      copy = copy.filter((card) => card.id !== id);
      //save the current value to localStorage / cloud / redux
      return copy;
    });
  };
  return (
    <div className="App">
      <AddCard />
      <BusinessList list={cards} callback={deleteBusiness} />
    </div>
  );
}

export default App;
