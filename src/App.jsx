import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import { DUMMY } from "./dummy";
function App() {
  const [travels, setTravels] = useState(DUMMY);
  const totalCountries = new Set(travels.map((t) => t.country)).size;
  const totalTrips = travels.length;
  return (
    <div className="App">
      <Header totalTrips={totalTrips} totalCountries={totalCountries} />
    </div>
  );
}

export default App;
