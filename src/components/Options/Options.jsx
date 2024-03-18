// import { useEffect } from "react";
import s from "./Options.module.css";

const Options = ({ handleValue, totalFeedback, ResetFeedback }) => {
  // useEffect(() => {
  //   const onKeyDown = (event) => {
  //     if (event.code === "Escape") {
  //       console.log("Escape click");
  //       ResetFeedback();
  //     }
  //   };
  //   window.addEventListener("keydown", onKeyDown);
  //   return () => {
  //     window.removeEventListener("keydown", onKeyDown);
  //   };
  // }, []);

  const isTotal = totalFeedback !== 0;
  return (
    <div>
      <p>Options</p>
      <button className={s.but} onClick={() => handleValue("good")}>
        Good
      </button>
      <button className={s.but} onClick={() => handleValue("neutral")}>
        Neutral
      </button>
      <button className={s.but} onClick={() => handleValue("bad")}>
        Bad
      </button>
      {isTotal ? (
        <button className={s.but} onClick={ResetFeedback}>
          Reset
        </button>
      ) : null}
    </div>
  );
};

export default Options;
