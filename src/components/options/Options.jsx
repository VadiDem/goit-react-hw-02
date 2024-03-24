import css from "./Options.module.css";

export default function Options({
  updateFeedback,
  totalFeedback,
  handleReset,
}) {
  return (
    <div className={css["btn-container"]}>
      <button
        onClick={() => {
          updateFeedback("good");
        }}
        className={css["btn"]}
      >
        Good
      </button>
      <button
        onClick={() => {
          updateFeedback("neutral");
        }}
        className={css["btn"]}
      >
        Neutral
      </button>
      <button
        onClick={() => {
          updateFeedback("bad");
        }}
        className={css["btn"]}
      >
        Bad
      </button>
      {totalFeedback !== 0 && (
        <button onClick={handleReset} className={css["btn"]}>
          Reset
        </button>
      )}
    </div>
  );
}