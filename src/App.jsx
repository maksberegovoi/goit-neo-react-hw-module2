import './App.css'
import Feedback from "./components/Feedback.jsx";
import Options from "./components/Options.jsx";
import Notification from "./components/Notification.jsx";
import feedback from "./components/Feedback.jsx";
import {useEffect, useState} from "react";

function App() {
  const [feedback, setFeedback] = useState(
    JSON.parse(localStorage.getItem('reviews'))
    ||
    {
    good: 0,
    neutral: 0,
    bad: 0
  })
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;


  const updateFeedback = feedbackType => {
    if (!feedbackType){
      return setFeedback({
        good: 0,
        neutral: 0,
        bad: 0
      })
    }
    setFeedback(prev => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1
    }));

  }

  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(feedback))
  }, [feedback]);

  return (
    <div>
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.
      </p>
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback}/>
      {totalFeedback
        ?
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          good={feedback.good}/>
        :
        <Notification/>
      }
    </div>
  );
}

export default App
