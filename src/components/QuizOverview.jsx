import { useParams } from 'react-router-dom'
import './styles/QuizOverview.css'

const QuizPage = ({ quizzes }) => {
  const { quizId } = useParams()
  const quiz = quizzes.find((q) => q.quiz_id === parseInt(quizId))

  if (!quiz) {
    console.log('Quiz not found')
    return <div>Quiz not found</div>
  }

  return (
    <div className="quiz-page">
      <div className="quiz-page-info-container">
        <h1 className="quiz-page-title">{quiz.quiz_name}</h1>
        <p className="quiz-page-description">{quiz.quiz_description}</p>
        <div className="quiz-page-stats">
          <p className="quiz-page-watch-count">
            Watch Count: {quiz.watch_count}
          </p>
        </div>
      </div>
    </div>
  )
}

export default QuizPage
