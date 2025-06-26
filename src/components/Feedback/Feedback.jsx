const Feedback = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul>
    <li>Good: {good}</li>
    <li>Neutral: {neutral}</li>
    <li>Bad: {bad}</li>
    <li>Total: {total}</li>
    <li>Positive: {positivePercentage}%</li>
  </ul>
);

export default Feedback; 