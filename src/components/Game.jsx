import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


function Game() {

    const [numbers, setNumbers] = useState([1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8])

    const shuffleNumbers = () => {
        const shuffledNumbers = [...numbers];
        for (let i = shuffledNumbers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledNumbers[i], shuffledNumbers[j]] = [shuffledNumbers[j], shuffledNumbers[i]];
        }
        setNumbers(shuffledNumbers);
    }

    useEffect(() => {
        document.body.style.backgroundColor = "white"
       console.log(numbers);
       shuffleNumbers()
    }, [])

  


    const [firstClick, setFirstClick] = useState(null)
    const [firstClickElement, setFirstClickElement] = useState(null)
    const [minutes, setMinutes] = useState(2)
    const [seconds, setSeconds] = useState(59)
    const [moves, setMoves] = useState(50)
    let timer
    useEffect(() => {
        timer = setInterval(() => {
            setSeconds(seconds - 1)
            if(seconds === 0) {
                setSeconds(59)
                setMinutes(minutes - 1)
            } 
            if(minutes === 0 && seconds === 0){
                clearInterval(timer)
                setMinutes(0)
                setSeconds(0)
            }
            
        }, 1000);
       
        return ()=> clearInterval(timer)
    })
    
    let timeOut

    return(
        <>
        <div className=" flex m-auto w-11/12 mt-4 justify-between items-center">
            <p className="font-atkinson text-3xl font-bold leading-7 tracking-normal text-left text-memoryColor">memory</p>
            <Link className=" font-bold leading-5 tracking-normal text-center w-20 h-10 bg-menuColor flex justify-center items-center rounded-3xl text-white">Menu</Link>
        </div>
        <div className=" grid grid-cols-4 w-11/12 m-auto mt-36 gap-3">
           {numbers.map((number, index) => {
            return(
                <div  className="text-4xl font-bold leading-10 text-center bg-bgForRadio rounded-full w-16 h-16 flex justify-center  items-center text-transparent " key={index}  onClick={(e) => {

                    e.target.style.color = "white"
                    
                    if(firstClick === null) {
                        setFirstClick(e.target.textContent)
                        setFirstClickElement(e.target)
                        console.log(firstClick)
                        console.log(firstClickElement)
                        e.target.style.pointerEvents = "none"
                    } else {
                        if(e.target.textContent === firstClick) {
                            e.target.style.backgroundColor = "#BCCED9"
                            firstClickElement.style.backgroundColor = "#BCCED9"
                            e.target.style.pointerEvents = "none"
                            firstClickElement.style.pointerEvents = "none"
                            setMoves(moves - 1)
                        } else {
                            timeOut = setTimeout(() => {
                                e.target.style.color = "transparent"
                                firstClickElement.style.color = "transparent"
                                e.target.style.pointerEvents = "auto"
                                firstClickElement.style.pointerEvents = "auto"
                            }, 1000);
                            setMoves(moves - 1)
                        }
                        setFirstClick(null)
                        setFirstClickElement(null)
                    }
                
                }}>{number}</div>
            )
           })}
        </div>
        <div className="flex w-11/12 m-auto mt-32 justify-evenly items-center">
            <div className=" w-36 h-16 bg-timerMoves rounded-lg grid justify-evenly items-center text-center">
                <p className="text-lg font-bold leading-5 text-center text-menuColor">Time</p>
                <p className="text-3xl font-bold leading-7 text-center text-memoryColor">{minutes}:{seconds}</p>
            </div>
            <div className=" w-36 h-16 bg-timerMoves rounded-lg grid justify-evenly items-center text-center">
                <p className="text-lg font-bold leading-5 text-center text-menuColor">Moves</p>
                <p className="text-3xl font-bold leading-7 text-center text-memoryColor">{moves}</p>
            </div>
        </div>
        </>
    )
}


export default Game