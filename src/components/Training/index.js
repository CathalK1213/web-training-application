import React from "react";
import Icon1 from "../../images/svg-1.svg"
import Icon2 from "../../images/svg-2.svg"
import Icon3 from "../../images/svg-3.svg"
import {
    TrainingContainer,
    TrainingH1,
    TrainingH2,
    TrainingCard,
    TrainingWrapper,
    TrainingIcon,
    TrainingP
} from "./TrainingElements";


const Training = () => {

    return (
        <TrainingContainer id="training">
            <TrainingH1>Our Services</TrainingH1>
            <TrainingWrapper>
                <TrainingCard>
                    <TrainingIcon src={Icon1}/>
                    <TrainingH2>Tutorials</TrainingH2>
                    <TrainingP>We help increase your understanding of Software Engineering/Development through use of
                        tutorial videos.</TrainingP>
                </TrainingCard>

                <TrainingCard>
                    <TrainingIcon src={Icon3}/>
                    <TrainingH2>Test Your Ability</TrainingH2>
                    <TrainingP>We help you test the progress you have made through various quizzes. </TrainingP>
                </TrainingCard>

                <TrainingCard>
                    <TrainingIcon src={Icon2}/>
                    <TrainingH2>Certificate of Completion</TrainingH2>
                    <TrainingP>You receive a reward upon getting 100% on the quizzes. The reward being a certificate of
                        completion in the certain category </TrainingP>
                </TrainingCard>

            </TrainingWrapper>
        </TrainingContainer>
    );
};

export default Training;