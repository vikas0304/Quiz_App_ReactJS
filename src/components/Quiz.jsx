import { useState , useContext } from "react"
import { Questions } from "../context/Questions"
import { QuizContext } from "../context/Context"
import '../App.css'
const Quiz = () => {
    const [currentQuestion , setCurrentQuestion] = useState(0)
    const {score , setScore , setGameState} = useContext(QuizContext)
    const [optionChoosen , setOptionChoosen] = useState("")

    const nextQuestion = () => {
        if(Questions[currentQuestion].asnwer === optionChoosen){
            setScore(score + 1)     
        }
        setCurrentQuestion(currentQuestion + 1)
    }

    const finishQuiz = () => {
        if(Questions[currentQuestion].asnwer === optionChoosen){
            setScore(score + 1)
        }
        setGameState("EndScreen")
    }
  return (
    <div className="Quiz">
        <h2>{Questions[currentQuestion].prompt}</h2>
        <div className="options">
            <button onClick={()=>setOptionChoosen("optionA")}>{Questions[currentQuestion].optionA}</button>
            <button onClick={()=>setOptionChoosen("optionB")}>{Questions[currentQuestion].optionB}</button>
            <button onClick={()=>setOptionChoosen("optionC")}>{Questions[currentQuestion].optionC}</button>
            <button onClick={()=>setOptionChoosen("optionD")}>{Questions[currentQuestion].optionD}</button>
        </div>
        {
            currentQuestion === Questions.length - 1 ? 
            <button onClick={finishQuiz}>Finish</button> : 
            <button onClick={nextQuestion}>Next Question</button>
        }
        
    </div>
  )
}

export default Quiz