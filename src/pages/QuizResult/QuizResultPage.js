import React from "react";
import "../../QuizTest.css";
import Header from "../../components/Header/Header";
import QuizFooter from "../../components/Footer/QuizFooter";
import {Button} from "@material-ui/core";
import './QuizResult.css';

const QuizResultPage = ({score}) => {


    return (
        <>


            <div className="QuizVid">
                <Header/>

                <div className="result">
                    <span className="title">FINAL SCORE: {score}</span>


                    <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        style={{alignSelf: "center", marginTop: 25}}
                        href='/QuizHomePage'
                    >
                        Click To Return To Quiz Home Page
                    </Button>
                </div>


            </div>

            <QuizFooter/>


        </>
    );
};

export default QuizResultPage;