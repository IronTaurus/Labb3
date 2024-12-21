import '../CSS/TrainingPlanner.css'

const Exercise = (props) => {
    return(
        <li className='exercise-box'>
            <h3 className={`exercise-title`}>{props.title}</h3>
            <div className="exercise-container">
                {props.rep ? <h5 className="exercise-demand">Rep: {props.rep}</h5> : <></>}
                {props.time ? <h5 className="exercise-demand">Time: {props.time} min</h5> : <></>}
                {props.pace ? <h5 className="exercise-demand">Pace: {props.pace}</h5> : <></>}
            </div>

        </li>
    )
}

export default Exercise;