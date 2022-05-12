import React, {useEffect, useState} from "react";
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages";
//import SignInPage from "./pages/signin";
import SignUpPage from "./pages/signup";
import SignIn from './pages/signin';
import MainIndex from "./pages/developer";
import QuizApp from "./components/Quiz/QuizApp";
import QuizTest from "./pages/QuizTest";
import QuizHomePage from "./pages/QuizHome/QuizHomePage";
import QuizResultPage from "./pages/QuizResult/QuizResultPage";
import QuizGOPage from "./pages/QuizGo/QuizGOPage";
import axios from "axios";
import QuizQuestions from "./Helpers/QuizQuestions";
import {listQuizzes} from "./graphql/queries";
import Amplify, {API, graphqlOperation} from "aws-amplify";
import {Paper} from "@material-ui/core";

function App() {


    //
    // const [questions, setQuestions] = useState();
    // const [score, setScore] = useState(0);
    //
    //
    //
    //
    // const[quizzes, setQuizzes] = useState([]);
    //
    // useEffect(() =>{
    //     fetchQuizzes();
    // },[]);
    //
    // const fetchQuizzes = async () => {
    //
    //     try{
    //         const quizData = await API.graphql(graphqlOperation(listQuizzes));
    //         const quizList= quizData.data.listQuizzes.items;
    //
    //         console.log('quiz list', quizList);
    //         setQuizzes(quizList)
    //
    //
    //
    //
    //     } catch (error) {
    //         console.log('error on fetching quiz', error);
    //     }
    //
    // };

    // const fetchQuiz = async (category = "", difficulty = "") => {
    //     const {data} = await axios.get(
    //             // =${
    //             // category && `&category=${category}`}${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    //
    //
    //         `
    //         https://opentdb.com/api.php?amount=10${
    //                     category && `&category=${category}`
    //                 }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    //     );


    //     console.log(data)
    //     setQuestions(data.results);
    // };


    return (

        // <div className="quizList">
        //     {quizzes.map(quiz=>{
        //         return(
        //             <Paper variant="outlined" elevation={2}>
        //
        //                 <div className="quizCard">
        //                     <div className="quizName">{quiz.name}</div>
        //                     <div className="quizName">{quiz.category}</div>
        //                     <div className="quizName">{quiz.difficulty}</div>
        //
        //                 </div>
        //
        //             </Paper>
        //         )
        //
        //     })}
        // </div>,

        <Router>
            <Routes>

                <Route path='/' element={<Home/>}/>
                <Route path='/signin' element={<SignIn/>}/>
                <Route path='/signup' element={<SignUpPage/>}/>
                <Route path='/developer' element={<MainIndex/>}/>
                <Route path='/QuizApp' element={<QuizApp/>}/>
                <Route path='/QuizTest' element={<QuizTest/>}/>

                <Route path="/QuizHomePage" element={<QuizHomePage/>}/>


                <Route path="/QuizGOPage" element={<QuizGOPage/>}/>
                <Route path="/QuizResultPage"
                       element={<QuizResultPage/>}/>


            </Routes>
        </Router>
    );

}

export default App;
