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
                    <TrainingH2>Reduced Expenses</TrainingH2>
                    <TrainingP>We help increase your understanding of Software Engineering/Development.</TrainingP>
                </TrainingCard>

                <TrainingCard>
                    <TrainingIcon src={Icon3}/>
                    <TrainingH2>Virtual Training</TrainingH2>
                    <TrainingP>You can access your account to complete training anywhere in the world.</TrainingP>
                </TrainingCard>

                <TrainingCard>
                    <TrainingIcon src={Icon2}/>
                    <TrainingH2>Progress Tracking </TrainingH2>
                    <TrainingP>We enable you to track your process while you complete training tasks. </TrainingP>
                </TrainingCard>

            </TrainingWrapper>
        </TrainingContainer>
    );
};

export default Training;