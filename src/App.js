import { useState } from "react";
import Counter from "./components/Counter";

function App() {

  const [theme, setTheme] = useState("dark")
  function toggleTheme(event){
    setTheme(event.target.value)
  }


  
  return (
    <div className={`App ${theme}`}>
      <h1>React - state and events</h1>
      <Counter />
      <select onChange={toggleTheme}>
        <option value="light">Light theme</option>
        <option value="dark">Dark theme</option>
      </select>
    </div>
  );
}

export default App;


/*  //////////// days of week example



import { useState } from "react";

export default function DaysOfWeeks() {
  const daysOfWeek = ["monday", "tuesday", "wednesday"];

  const [currentDay, setDay] = useState("monday");

  function goToNextDay() {
    const nextIndex = daysOfWeek.indexOf(currentDay) + (1 % daysOfWeek.length);
    setDay(daysOfWeek[nextIndex]);
  }
  return (
    <p onClick={goToNextDay}>
      Today is: <span>{currentDay}</span>
    </p>
  );
}





*/