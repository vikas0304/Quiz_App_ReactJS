import { useContext } from "react"
import { QuizContext } from "../context/Context"
import { Questions } from "../context/Questions"
import '../App.css'

const EndScreen = () => {
    const {score ,setGameState , setScore } = useContext(QuizContext)

  return (
    <div className="EndScreen">
        <h2>{`Your score is ${score} / ${Questions.length}`}</h2>
        <button onClick={()=>{
            setScore(0)
            setGameState("menu")
        }}>Restart Quiz</button>
    </div>
  )
}

export default EndScreen