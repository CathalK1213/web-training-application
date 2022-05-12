import React, {useState} from "react";
import './Lesson.css';
import ResponsivePlayer from "../../liveVid/ResponsivePlayer";


const Lesson = () => {

    const [watchComplete, setWatchComplete, setWatchComplete2, watchComplete2] = useState(false)

    const handleWatchComplete = ({played}) => {
        if (played >= 0.9 && !watchComplete) {
            setWatchComplete(true)
        }

    }

    const handleWatchComplete2 = ({played2}) => {
        if (played2 >= 0.5 && !watchComplete2) {
            setWatchComplete2(true)
        }
    }

    return (
        <>
            <div>
                <div className="header">

                    <h2>Watch the following Beginner tutorials</h2>

                    <h2> Java </h2>

                </div>
                <ResponsivePlayer

                    url='https://www.youtube.com/watch?v=eIrMbAQSU34'
                    onProgress={handleWatchComplete}
                />

                <div className={watchComplete ? "marker marker--is-complete" : "marker marker--not-complete"}>
                    <h3>Completed</h3>
                </div>
            </div>


            <div>
                <div className="header">
                    <h2>React JS / JavaScript</h2>

                </div>

                <ResponsivePlayer

                    url='https://www.youtube.com/watch?v=w7ejDZ8SWv8'
                    onProgress={handleWatchComplete2}
                />

                <div className={watchComplete2 ? "marker marker1--is-complete" : "marker marker1--not-complete"}>
                    <h3>Completed2</h3>
                </div>
            </div>

            <div className="header">
                <h2>Test Your Knowledge Here!</h2>
            </div>
        </>


    );
};

export default Lesson;