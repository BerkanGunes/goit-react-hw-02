import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Section from './components/Section/Section'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'
import Notification from './components/Notification/Notification'

const FEEDBACK_KEY = 'feedback-state'

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
}

function App() {
  const [feedback, setFeedback] = useState(() => {
    const saved = localStorage.getItem(FEEDBACK_KEY)
    return saved ? JSON.parse(saved) : initialState
  })

  useEffect(() => {
    localStorage.setItem(FEEDBACK_KEY, JSON.stringify(feedback))
  }, [feedback])

  const updateFeedback = (type) => {
    setFeedback((prev) => ({ ...prev, [type]: prev[type] + 1 }))
  }

  const resetFeedback = () => setFeedback(initialState)

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad
  const positivePercentage = totalFeedback
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0

  return (
    <div className="App">
      <h1>Sip Happens Café</h1>
      <Section title="Please leave your feedback about our service by selecting one of the options below.">
        <Options
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={updateFeedback}
          onReset={resetFeedback}
          showReset={totalFeedback > 0}
        />
      </Section>
      <Section title="Statistics">
        {totalFeedback > 0 ? (
          <Feedback
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="No feedback yet" />
        )}
      </Section>
    </div>
  )
}

export default App
