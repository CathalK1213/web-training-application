import React, {useContext} from "react";
import {QuizContext} from "../../Helpers/Context";
import '../../Quiz.css';

function QuizMenu() {

    const {quizState, setQuizState} = useContext(QuizContext)
    return (

        <div className="Menu">


            <button onClick={() => {
                setQuizState("quiz");
            }}> Start Quiz
            </button>

        </div>

    );
};


export default QuizMenu;