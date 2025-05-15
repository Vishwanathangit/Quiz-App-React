import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Result = ({ user, score }) => {
  const Navigator = useNavigate()
  useEffect(() => {
    if (!user) {
      Navigator("/")
    }
  }, [user])
  return (
    <div>
      <h1>Quiz Complete...!</h1>
      <h2>Hello {" "}<span style={{ textTransform: "uppercase", }}>{user}</span> your Score is {score}</h2>
      <a href="/home"><button>Back to Home</button></a>
    </div>
  )
}

export default Result