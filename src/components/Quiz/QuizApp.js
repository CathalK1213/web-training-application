import React, {useState, useContext} from "react";
import QuizMenu from "./QuizMenu";
import Quiz from "./Quiz";
import EndQuiz from "./EndQuiz";
import '../../Quiz.css';
import {QuizContext} from "../../Helpers/Context";
import background from "../../images/Quiz-Bg.jpg";

function QuizApp() {

    const [quizState, setQuizState] = useState("menu");

    const [score, setScore] = useState(0);


    return (
        <div className="QuizVid" style={{backgroundImage: `url(${background})`}}>
            <div className="QuizApp">
                <h1>JavaScript QUIZ</h1>

                <QuizContext.Provider value={{quizState, setQuizState, score, setScore}}>

                    {quizState === "menu" && <QuizMenu/>}
                    {quizState === "quiz" && <Quiz/>}
                    {quizState === "endQuiz" && <EndQuiz/>}


                </QuizContext.Provider>
            </div>
        </div>
    );

};


export default QuizApp;
