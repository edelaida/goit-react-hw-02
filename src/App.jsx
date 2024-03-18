import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import { useEffect, useState } from "react";
import s from "./components/Options/Options.module.css";

const initialValues = { good: 0, neutral: 0, bad: 0 };
function App() {
  const [values, setValues] = useState(() => {
    const stringifieldValues = localStorage.getItem("feedback");
    const parseValues = JSON.parse(stringifieldValues) ?? initialValues;
    return parseValues;
  });
  const [isVisible, setisVisible] = useState(false);

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(values));
  }, [values]);

  const updateFeedback = (feedbackType) => {
    setValues({ ...values, [feedbackType]: values[feedbackType] + 1 });
  };
  // const totalFeedback = values.good + values.bad + values.neutral;
  const totalFeedback = Object.values(values).reduce(
    (acc, curr) => acc + curr,
    0
  );

  useEffect(() => {
    console.log(`feedback total ${totalFeedback}`);
  }, [totalFeedback]);

  const ResetFeedback = () => {
    setValues({ good: 0, neutral: 0, bad: 0 });
  };
  const PositiveFeedback = Math.round(
    ((values.good + values.neutral) / totalFeedback) * 100
  );
  const handleToggle = () => {
    setisVisible(!isVisible);
  };

  return (
    <div className={s.app_div}>
      <button className={s.but} onClick={handleToggle}>
        {isVisible ? "HIDE" : "SHOW"} react
      </button>
      {isVisible && <h1>goit-react-hw-02</h1>}

      <Description />
      <Options
        handleValue={updateFeedback}
        totalFeedback={totalFeedback}
        ResetFeedback={ResetFeedback}
      />
      <Feedback
        values={values}
        total={totalFeedback}
        PositiveFeedback={PositiveFeedback}
      />
    </div>
  );
}

export default App;
