import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const handleGood = () => {
    setAll(all + 1);
    setGood(good + 1);
  };
  const handleNeutral = () => {
    setAll(all + 1);
    setNeutral(neutral + 1);
  };
  const handleBad = () => {
    setAll(all + 1);
    setBad(bad + 1);
  };

  const calculateAverage = () => {
    return (good - bad) / all;
  };

  return (
    <>
      <h1>give feedback</h1>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>

      <h1>statstics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {calculateAverage()}</p>
      <p>good {(good / all) * 100}%</p>
    </>
  );
};

export default App;
