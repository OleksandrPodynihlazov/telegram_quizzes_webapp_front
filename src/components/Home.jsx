import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import mockQuizzes from '../mock_quizzes'
import './styles/Home.css'
import { truncateText } from '../utils/utils'

const Home = () => {
  const apiUrl = import.meta.env.VITE_API_URL

  const [quizzes, setQuizzes] = useState([])

  const fetchQuizzes = async () => {
    try {
      const response = await axios.get(`${apiUrl}/quizzes`)

      setQuizzes(response.data)
    } catch (error) {
      console.error('Error while retrieving the data:', error)
    }
  }

  useEffect(() => {
    fetchQuizzes()
  }, [])

  return (
    <>
      <div className="quiz-page">
        <h1 className="title">Recent Quizzes</h1>
        <div className="quizzes-grid">
          {mockQuizzes.map((quiz) => (
            <div key={quiz.quiz_id} className="quiz-card">
              <div className="quiz-details">
                <h2 className="quiz-name">{quiz.quiz_name}</h2>
                <p className="quiz-description">
                  <strong>Description:</strong> {truncateText(quiz.quiz_description, 150)}
                </p>
                <Link
                  to={`/quiz-page/${quiz.quiz_id}`}
                  onClick={() => window.scrollTo(0, 0)}
                  className="quiz-start-button"
                >
                  Start Quiz
                </Link>
                <div className="quiz-stats">
                  <p className="quiz-watch-count">{quiz.watch_count}</p>
                  <p className="quiz-creation-date">{quiz.creation_date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
