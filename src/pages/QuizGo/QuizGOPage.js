import React from "react";
import {useEffect, useState} from "react";
import Header from "../../components/Header/Header";
import QuizFooter from "../../components/Footer/QuizFooter";
import "./QuizGo.css";
import background from "../../images/Quiz-Bg.jpg";
import {CircularProgress, Paper} from "@material-ui/core";
import QuestionsForQuiz from "../../Helpers/QuestionsForQuiz";
import Amplify, {API, graphqlOperation} from "aws-amplify";
import {listQuizzes} from "../../graphql/queries";

import awsconfig from '../../aws-exports';

Amplify.configure(awsconfig)


const QuizGOPage = ({questions, score, setScore, setQuestions}) => {


    const [options, setOptions] = useState();
    const [currentQuestion, setCurrentQuestion] = useState(0);


    const [quizzes, setQuizzes] = useState([]);

    useEffect(() => {
        fetchQuizzes();
    }, []);

    const fetchQuizzes = async () => {

        try {
            const quizData = await API.graphql(graphqlOperation(listQuizzes));
            const quizList = quizData.data.listQuizzes.items;

            console.log('quiz list', quizList);
            setQuizzes(quizList);


        } catch (error) {
            console.log('error on fetching quiz', error);
        }

    };


    //
    // useEffect(() => {
    //     console.log();
    //
    //     setOptions(
    //         questions &&
    //         handleShuffle([
    //             questions[currentQuestion]?.correct_answer,
    //         ...questions[currentQuestion]?.incorrect_answers,
    //     ])
    //     );
    //
    //
    // }, [ questions, currentQuestion]);
    //
    // console.log();
    //
    // //Shuffles the elements in the Array
    // const handleShuffle = (options) => {
    //     return options.sort(() => Math.random() - 0.5);
    // };

    return (
        <>


            <div className="QuizVid" style={{backgroundImage: `url(${background})`}}>


                <Header/>

                <div className="quiz">


                <span className="subtitle">
                   QUIZ START
               </span>

                    <div className="quizList">

                        {quizzes.map(quiz => {

                            return (

                                <span variant="outlined" elevation={2}>
                                  <div className="quizCard"></div>
                                  <div className="quizDescription">{quiz.description}</div>
                                  <div className="quizQuestion">{quiz.question}</div>

                                  <div className="quizChoice">{quiz.choices.split(";")}</div>



                              </span>
                            );

                        })}
                    </div>

                    {
                        questions ? (
                            <>

                                <div className="quizInfo">
                                    <span>{questions[currentQuestion].category}</span>
                                    <span>Score: {score}</span>


                                </div>


                                {/*<QuestionsForQuiz*/}


                                {/*currentQuestion={currentQuestion}*/}
                                {/*    setCurrentQuestion={setCurrentQuestion}*/}
                                {/*    questions={questions}*/}
                                {/*    options={options}*/}
                                {/*    correct={questions[currentQuestion]?.correct_answer}*/}
                                {/*    score={score}*/}
                                {/*    setScore={setScore}*/}
                                {/*    setQuestions={setQuestions}*/}

                                {/*/>*/}


                            </>


                        ) : (


                            <CircularProgress
                                style={{margin: 50}}
                                color='inherit'
                                size={150}
                                thickness={3}

                            />

                        )}

                </div>
            </div>

            <QuizFooter/>


        </>
    );
};

export default QuizGOPage;