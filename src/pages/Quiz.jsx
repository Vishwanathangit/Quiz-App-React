import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const questions = [
  {
    question: "What is React?",
    options: ["Library", "Framework", "Language"],
    answer: "Library",
  },
  {
    question: "Who developed React?",
    options: ["Google", "Facebook", "Microsoft"],
    answer: "Facebook"
  }
]
const Quiz = ({ user, setscore }) => {
  const [questionindex, setquestionindex] = useState(0)
  const Navigator = useNavigate()
  useEffect(() => {
    if (!user) {
      Navigator("/")
    }
  }, [user])
  const handleanswer = (selectans) => {
    const isCorrect = selectans === questions[questionindex].answer
    if (isCorrect) {
      setscore(prevScore => prevScore + 1)
    }

    if (questionindex < questions.length - 1) {
      setquestionindex((previndex) => previndex + 1)
    } else {
      Navigator("/result")
    }

  }
  return (
    <div>
      <h1>Quiz Page...</h1>
      <h2>{questionindex + 1}.{questions[questionindex].question}</h2>
      {questions[questionindex].options.map((option, index) => (
        <button key={index} onClick={() => handleanswer(option)}>{option}</button>
      ))}
      <br />
      <br />
      <br />
      <br />
      <a href="/home"><button>Back to Home</button></a>
    </div>
  )
}

export default Quiz