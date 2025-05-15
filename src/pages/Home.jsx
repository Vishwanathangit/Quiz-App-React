import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = ({user, setuser}) => {
  const Navigator = useNavigate()
  const handlesubmit = (event) => {
     event.preventDefault()
    Navigator("/quiz")
  }
  return (
    <div>
      <h1>Welcome to Quiz App...!</h1>
      <form onSubmit={handlesubmit}>
        <section>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" required onChange={(event) => {
          const {value} = event.target
          setuser(value)
        }}/>
        </section>
        <br />
        <button disabled ={user.length === 0}type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Home