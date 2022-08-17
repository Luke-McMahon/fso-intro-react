import React from "react";

const Total = (props) => {
  const course = props;

  let totalExercises = Object.values(course.course.parts);
  const sum = totalExercises.reduce((a, b) => a + b.exercises, 0);
  return (
    <p>
      <strong>Total of {sum} exercises</strong>
    </p>
  );
};

export default Total;
