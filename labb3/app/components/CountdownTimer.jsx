import {useState, useRef, useEffect} from 'react';

const CountdownTimer = (props) => {
    const [num, setNum] = useState(props.time);
    const [pause, setPause] = useState(true);
    let intervalRef = useRef();
    const decreaseNum = () => setNum((prev) => prev - 1);

      const handleClick = () => {
        if (!pause) {
          clearInterval(intervalRef.current);
        } else {
          intervalRef.current = setInterval(decreaseNum, 1000);
        }
        setPause((prev) => !prev);
      };

      //useEffect tillåter timern att börja direkt när den laddas, det är inte vad jag vill ha för min timer men jag lämnar koden här.
      
      // useEffect(() => {
      //   intervalRef.current = setInterval(decreaseNum, 1000);
    
      //   return () => clearInterval(intervalRef.current);
      // }, []);

    const secondsToMs = (t) => {
        var m = Math.floor(t % 3600 / 60);
        var s = Math.floor(t % 3600 % 60);

        var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
        var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
        return mDisplay + sDisplay; 
    }

    return(
        <div>
            <div>{secondsToMs(num)}</div>
            <button onClick={handleClick} className='timer-button'>{pause ? "Start" : "Pause"}</button>
      </div>
    )
}

export default CountdownTimer;