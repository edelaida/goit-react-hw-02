import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import { useState } from "react";

function App() {
  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  return (
    <div>
      <h1>goit-react-hw-02</h1>
      <Description />
      <Options />
      <Feedback />
    </div>
  );
}

export default App;
