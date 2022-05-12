import React from 'react';
import {Icon} from "../components/Register/RegisterElements";

import Lesson from "../components/Lesson/Lesson";

const MainIndex = () => {

    return (


        <>
            <div className='main'>
                <Icon to="/QuizTest"><img src={require('../images/training.PNG')} alt="exam" height={500}
                                          width={500}/></Icon>


                <h1>Click Link To Return Home </h1>
                <Icon to="/"><img src={require('../images/logo.png')} alt="logo" height={100} width={300}/></Icon>
                <Lesson/>

                <Icon to="/QuizApp"><img src={require('../images/quiz_transparent.png')} alt="exam" height={500}
                                         width={500}/></Icon>
            </div>
        </>


    );
};

export default MainIndex;
