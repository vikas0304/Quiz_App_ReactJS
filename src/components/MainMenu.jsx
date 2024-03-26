import { useContext } from "react";
import '../App.css'
import { QuizContext } from "../context/Context";
const MainMenu = () => {
    const {gameState , setGameState} = useContext(QuizContext)

  return (
    <div className="Menu">
        <button onClick={() => {setGameState("quiz")}}>Start Quiz</button>
    </div>
  )
}

export default MainMenu;