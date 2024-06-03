function Progress({ index, numQuestions, points, maxPossiblePoints, answer }) {
  return (
    <div>
      <header className="progress">
        <progress max={numQuestions} value={index + Number(answer !== null)} />
        <p>
          Question <strong>{index + 1} </strong> / {numQuestions}
        </p>
        <p>
          <stong>{points} </stong> / {maxPossiblePoints} points
        </p>
      </header>
    </div>
  );
}

export default Progress;
