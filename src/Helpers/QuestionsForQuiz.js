import React from "react";
import {useState} from "react";
import ErrorMSG from "../components/ErrorMessage/ErrorMSG";
import "./QuizQuestions.css"
import {Button} from "@material-ui/core";
import {useNavigate} from "react-router";

const QuestionsForQuiz = ({

                              currentQuestion,
                              setCurrentQuestion,
                              questions,
                              options,
                              correct,
                              score,
                              setScore,
                              setQuestions,

                          }) => {


    const [selected, setSelected] = useState();
    const [error, setError] = useState(false);

    const navigate = useNavigate();


    const handleSelected = (i) => {
        if (selected === i && selected === correct) {
            return 'select';
        } else if (selected === i && selected !== correct) {
            return 'wrong';
        } else if (i === correct) {
            return 'select';
        }
    };

    const handleCheck = (i) => {
        setSelected(i);
        if (i === correct) setScore(score + 1);
        setError(false)
    };

    const handleQuit = () => {
        setCurrentQuestion(0);
        setQuestions();

    };

    const handleNext = () => {
        if (currentQuestion > 8) {
            navigate('/QuizResultPage');
        } else if (selected) {
            setCurrentQuestion(currentQuestion + 1);
            setSelected();
        } else {
            setError("please select option");
        }


    };


    return (
        <div className="question">
            <h1>Question {currentQuestion + 1}</h1>

            <div className="singleQuestion">

                <h2>{questions[currentQuestion].question}</h2>

                <div className="options">

                    {error && <ErrorMSG>{error}</ErrorMSG>}

                    {
                        options &&
                        options.map((i) =>
                            <button
                                onClick={() => handleCheck(i)}
                                className={`singleOption ${selected && handleSelected(i)}`}
                                key={i}
                                disabled={selected}


                            >{i}
                            </button>)}

                </div>

                <div className="controls">
                    <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        style={{width: 185}}
                        href="/QuizHomePage"
                        onClick={handleQuit}
                    >
                        Quit
                    </Button>

                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        style={{width: 185}}
                        onClick={handleNext}
                    >
                        Next Question
                    </Button>
                </div>
            </div>
        </div>
    );
};


export default QuestionsForQuiz;

