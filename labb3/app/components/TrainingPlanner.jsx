import { useState } from "react";
import Exercise from "./Exercise"
import '../CSS/TrainingPlanner.css';
import CountdownTimer from "./CountdownTimer";

const GenerateTraining = () =>{
    let pace = ["Slow", "Fast"]
    let time = [600, 1200, 1800, 2400]
    let TrainingTypes = [
        {title: "Pushups", rep: 20}, 
        {title: "Situps", rep: 20}, 
        {title: "Lunges", rep: 20},
        {title: "Crunches", rep: 20},
        {title: "Tricep-dips", rep: 15},
        {title:"Squats", rep: 10}, {title: "Plank", time: 120}, 
        {title: "Jumping Jacks", time: 60},
        {title: "Mountain climbers", time: 60},
        {title: "Jogging", pace: pace[Math.floor(Math.random() * pace.length)], time: time[Math.floor(Math.random() * time.length)]}, 
        {title: "Walk", pace: pace[Math.floor(Math.random() * pace.length)], time: time[Math.floor(Math.random() * time.length)]}, 
        {title: "Run", pace: pace[Math.floor(Math.random() * pace.length)], time: time[Math.floor(Math.random() * time.length)]},
    ]
    let exercise = TrainingTypes[Math.floor(Math.random() * TrainingTypes.length)]
    return exercise;
}

const TrainingPlanner = () => {
    const [exercise, setExercise] = useState(null);
    const [exerciseTracker, completedExercises] = useState(0);
    const NextExercise = () => {
        completedExercises(exerciseTracker +1);
        setExercise(GenerateTraining);

    };

    return(
        <>
            <div className="training-container">
                <div>Completed Exercises: {exerciseTracker}</div>
                <button onClick={() => exercise ? NextExercise(): setExercise(GenerateTraining)} className="next-exercise">
                    {exercise ? "Next Exercise" : "Start Training"}
                </button>   
            </div>
            <div className="exercise-block">
                <ul>
                    {exercise ? <Exercise title={exercise.title} rep={exercise.rep} pace={exercise.pace} time={exercise.time/60} className={`exercise`}/> : <></>}
                </ul>
                <div>
                    {exercise && exercise.time ? <CountdownTimer time={exercise.time} key={exercise.title + exerciseTracker}/> : <></>}
                </div>
                
            </div>
            

            
        </>


    )
}
export default TrainingPlanner