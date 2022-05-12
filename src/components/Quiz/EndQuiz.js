import '../../Quiz.css';
import React, {useContext} from "react";
import {QuizContext} from "../../Helpers/Context";
import {Questions} from '../../Helpers/QuizQuestions'
import background from "../../images/Quiz-Bg.jpg";
import {useNavigate} from "react-router";


function EndQuiz() {

    const {score, setScore, setQuizState} = useContext(QuizContext);

    const restartQuiz = () => {
        setScore(0);
        setQuizState("menu");
    };


    return (

        <div className="EndQuiz">

            <h1>Congratulations On Completing the Quiz</h1>
            <img src={require('../../images/celebrate.svg')} className="celebrate" height="400" width="400"
                 alt="celebrate-img"/>

            <h2>Quiz Finished</h2>
            <h3> Final Score: {score} / {Questions.length}</h3>
            <button onClick={restartQuiz}> Restart Quiz</button>

            <button onClick>Claim Certificate</button>
        </div>

    );
};


export default EndQuiz;