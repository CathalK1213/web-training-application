import React, {useState, useContext} from "react";
import '../../Quiz.css';
import {Questions} from '../../Helpers/QuizQuestions'
import {QuizContext} from "../../Helpers/Context";

function Quiz() {

    const {score, setScore, setQuizState} = useContext(QuizContext);

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [currentTitle, setCurrentTitle] = useState(0);

    const [optionChosen, setOptionChosen] = useState("");

    const nextQuestion = () => {

        if (Questions[currentQuestion].answer == optionChosen) {
            setScore(score + 1);
        }
        alert(score)
        setCurrentQuestion(currentQuestion + 1);
    };

    const finishQuiz = () => {
        if (Questions[currentQuestion].answer == optionChosen) {
            setScore(score + 1);
        }
        setQuizState("endQuiz");
    };

    return (
        <div className="Quiz">


            <div className="boxTitle">{Questions[currentTitle].title}</div>
            <div className="box">{Questions[currentQuestion].prompt}</div>


            {/* Answer Section /*/}
            <div className="options">
                <button onClick={() => setOptionChosen("A")}> {Questions[currentQuestion].optionA}</button>
                <button onClick={() => setOptionChosen("B")}> {Questions[currentQuestion].optionB}</button>
                <button onClick={() => setOptionChosen("C")}> {Questions[currentQuestion].optionC}</button>
                <button onClick={() => setOptionChosen("D")}> {Questions[currentQuestion].optionD}</button>

            </div>

            {currentQuestion == Questions.length - 1 ? (
                <button type="submit" onClick={finishQuiz}>Finish Quiz</button>
            ) : (
                <button type="submit" onClick={nextQuestion}> Next question</button>
            )}
        </div>

    );
};


export default Quiz;