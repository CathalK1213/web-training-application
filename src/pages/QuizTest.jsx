import React, {useEffect, useState} from "react";
import "../QuizTest.css";
import Video from "../liveVid/video.mp4";
import {HeroBg, VideoBg} from "../components/HeroSection/HeroElements";
import Header from "../components/Header/Header";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from "../components/Footer";
import QuizFooter from "../components/Footer/QuizFooter";
import QuizHomePage from "./QuizHome/QuizHomePage";
import QuizResultPage from "./QuizResult/QuizResultPage";
import QuizGOPage from "./QuizGo/QuizGOPage";
import background from "../images/Quiz-Bg.jpg";
import {API, graphqlOperation} from "aws-amplify";
import {listQuizzes} from "../graphql/queries";


function QuizTest() {
    const [questions, setQuestions] = useState();
    const [score, setScore] = useState(0);


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

    return (
        <>


            <div className="QuizVid" style={{backgroundImage: `url(${background})`}}>


                <Header/>

                <Routes>

                    <Route path="/QuizHomePage" element={<QuizHomePage fetchQuizzes={fetchQuizzes}/>}/>


                    <Route path="/QuizGOPage" element={<QuizGOPage fetchQuizzes={fetchQuizzes}/>}/>
                    <Route path="/QuizResultPage"
                           element={<QuizResultPage score={score}/>}/>

                </Routes>

            </div>


            <QuizFooter/>
        </>
    );
};

export default QuizTest;