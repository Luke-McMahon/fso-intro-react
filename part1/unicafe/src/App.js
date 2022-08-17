import { useState } from "react";

const Statistics = (props) => {
  const { stats } = props;

  return (
    <>
      <h1>Statstics</h1>
      <p>good {stats.good}</p>
      <p>neutral {stats.neutral}</p>
      <p>bad {stats.bad}</p>
      <p>all {stats.total}</p>
      <p>average {stats.average}</p>
      <p>good {stats.positive}%</p>
    </>
  );
};

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

  const stats = {
    good,
    neutral,
    bad,
    total: all,
    average: calculateAverage(),
    positive: (good / all) * 100,
  };

  return (
    <>
      <h1>give feedback</h1>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>

      <Statistics stats={stats} />
    </>
  );
};

export default App;
