import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Result  from './pages/Result'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  const [user, setuser] = useState("")
  const [score, setscore] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home user={user} setuser={setuser} />}></Route>
        <Route path='/quiz' element={<Quiz user={user} setscore={setscore} />}></Route>
        <Route path='/result' element={<Result user={user} score={score} />}></Route>
      <Route path='*' element={<Navigate to="/home" />}></Route>
    </Routes>
    </BrowserRouter >
  )
}
export default App