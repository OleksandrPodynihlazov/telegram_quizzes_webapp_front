import { useState, useEffect } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import CreateQuiz from './components/CreateQuiz'
import QuizPage from './components/QuizPage'
import axios from 'axios'
import './App.css'
import mockQuizzes from './mock_quizzes'

const apiUrl = import.meta.env.VITE_API_URL
console.log('API URL:', apiUrl)

function App() {
  return (
    <>
      <div className="app">
        <header className="header">
          <nav className="navbar">
            <Link to="/" className="logo">
              Quizzer
            </Link>
            <div className="nav-links">
              <Link to="/quiz-create">
                <button className="add-quiz-button">Create a Quiz</button>
              </Link>
            </div>
          </nav>
        </header>
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/quiz-page/:quizId"
              element={<QuizPage quizzes={mockQuizzes} />}
            />
            <Route path="/quiz-create" element={<CreateQuiz />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>&copy; 2025 Quizzer. All rights reserved.</p>
        </footer>
      </div>
    </>
  )
}

export default App
