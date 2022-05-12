import React, {useEffect, useState} from "react";
import "./QuizHome.css";
import Header from "../../components/Header/Header";
import QuizFooter from "../../components/Footer/QuizFooter";
import {Button, MenuItem, TextField} from "@material-ui/core";
import Categories from "../../Data/Categories";
import {useNavigate} from "react-router";
import background from "../../images/Quiz-Bg.jpg";
import ErrorMSG from "../../components/ErrorMessage/ErrorMSG";
import {API, graphqlOperation} from "aws-amplify";
import {listQuizzes} from "../../graphql/queries";

const QuizHomePage = () => {

    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [error, setError] = useState(false);


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


    const navigate = useNavigate();

    const handleSubmit = () => {
        if (!category || !difficulty) {
            setError(true);
            return;
        } else {
            setError(false);
            // fetchQuestions(category, difficulty);
            fetchQuizzes(category, difficulty);
            navigate("/QuizGOPage");
        }
    };


    return (
        <>


            <div className="QuizVid" style={{backgroundImage: `url(${background})`}}>


                <Header/>

                <div className="content">

                    <div className="options">
                <span style={{fontSize: 30}}>
                    Quiz Options
                </span>

                        <div className="settings__select">

                            {error && <ErrorMSG> Please fill all of the fields</ErrorMSG>}

                            <TextField select
                                       label='Select Category'
                                       variant="outlined"
                                       style={{marginBottom: 30}}
                                       onChange={(e) => setCategory(e.target.value)}
                                       value={category}
                            >
                                {
                                    Categories.map((cat) => (

                                        <MenuItem key={cat.category} value={cat.value}>

                                            {cat.category}

                                        </MenuItem>
                                    ))
                                }

                            </TextField>

                            <TextField select
                                       label='Select Difficulty'
                                       value={difficulty}
                                       onChange={(e) => setDifficulty(e.target.value)}
                                       variant="outlined"
                                       style={{marginBottom: 30}}

                            >


                                <MenuItem key="Easy" value="easy">Easy

                                </MenuItem>
                                <MenuItem key="Medium" value="medium">Medium

                                </MenuItem>
                                <MenuItem key="Hard" value="Hard">Hard

                                </MenuItem>

                            </TextField>

                            <Button color='primary' size='large' onClick={handleSubmit}>
                                StartQuiz
                            </Button>

                        </div>


                    </div>
                    <img src={require('../../images/exam.svg')} className="exam" alt="exam-img"/>
                </div>

            </div>


            <QuizFooter/>


        </>
    )
        ;

};

export default QuizHomePage;