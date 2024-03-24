import { useState, useEffect } from "react";
import Description from "./components/description/Description";
import Options from "./components/options/Options";
import Feedback from "./components/feedback/Feedback";
import Notification from "./components/notification/Notification";
import "./App.css";

function App() {
  const initialFeedback = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedback, setFeedback] = useState(
    JSON.parse(localStorage.getItem("feedback")) || initialFeedback
  );

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round(
    (feedback.good / totalFeedback) * 100 || 0
  );

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const handleReset = () => {
    setFeedback(initialFeedback);
  };

  return (
    <div className="container">
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        handleReset={handleReset}
      />
      {totalFeedback > 0 && (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
      {totalFeedback === 0 && <Notification />}
    </div>
  );
}

export default App;

