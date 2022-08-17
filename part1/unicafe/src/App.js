import { useState } from "react";

const StatisticLine = (props) => {
  return (
    <>
      <p>
        {props.title} {props.value}
      </p>
    </>
  );
};

const Statistics = (props) => {
  const { stats } = props;
  if (stats.total) {
    return (
      <>
        <h1>Statistics</h1>
        <StatisticLine title="Good" value={stats.good} />
        <StatisticLine title="Neutral" value={stats.neutral} />
        <StatisticLine title="Bad" value={stats.bad} />
        <StatisticLine title="Total" value={stats.total} />
        <StatisticLine title="Average" value={stats.average} />
        <StatisticLine title="Positive" value={stats.positive} />
      </>
    );
  }

  return (
    <>
      <h1>Statistics</h1>
      <p>No feedback given</p>
    </>
  );
};

const Button = (props) => {
  return (
    <>
      <button onClick={props.handleClick}>{props.text}</button>
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
      <Button handleClick={() => handleGood()} text="Good"></Button>
      <Button handleClick={() => handleNeutral()} text="Neutral"></Button>
      <Button handleClick={() => handleBad()} text="Bad"></Button>

      <Statistics stats={stats} />
    </>
  );
};

export default App;
