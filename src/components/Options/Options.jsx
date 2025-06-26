const Options = ({ options, onLeaveFeedback, onReset, showReset }) => (
  <div>
    {options.map(option => (
      <button
        key={option}
        onClick={() => onLeaveFeedback(option)}
        type="button"
      >
        {option.charAt(0).toUpperCase() + option.slice(1)}
      </button>
    ))}
    {showReset && (
      <button onClick={onReset} type="button">
        Reset
      </button>
    )}
  </div>
);

export default Options; 