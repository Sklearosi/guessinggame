import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


function Game({options}) {

    const [numbers, setNumbers] = useState(options.size==="4x4" ? [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8] : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18] )
    const [playerScore, setPlayerScore] = useState({
        playerOne: 0,
        playerTwo:0,
        playerThree:0,
        playerFour:0
    })

    const [scoreOrder, setScoreOrder] = useState(1)
    const [revealed, setRevealed] = useState(0)

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
      
        
       shuffleNumbers()
    }, [])

  
    

    const [firstClick, setFirstClick] = useState(null)
    const [firstClickElement, setFirstClickElement] = useState(null)
    const [minutes, setMinutes] = useState(2)
    const [seconds, setSeconds] = useState(59)
    const [moves, setMoves] = useState(50)
    const [endGame, setEndGame] = useState(true)
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
        <div className={` w-full h-full bg-red-400 `}>
            <div className={`${endGame ? 'absolute inset-0 filter blur-lg':null}`}>
        <div className="  flex m-auto w-11/12 pt-4 justify-between items-center">
            <p className="font-atkinson text-3xl font-bold leading-7 tracking-normal text-left text-memoryColor">memory</p>
            <Link className=" font-bold leading-5 tracking-normal text-center w-20 h-10 bg-menuColor flex justify-center items-center rounded-3xl text-white">Menu</Link>
        </div>
        <div className={` pl-3 grid grid-cols-4 w-11/12 m-auto mt-28 gap-3  ${options.size === '6x6' ? 'grid-cols-6 pl-0' : null}`}>
           {numbers.map((number, index) => {
            return(
                <div  className={` font-bold leading-10 text-center bg-bgForRadio rounded-full w-16 h-16 flex justify-center  items-center text-transparent ${options.size ==="6x6" ? ' w-smallCircle h-smallCircle text-2xl' : 'text-4xl'} `} key={index}  onClick={(e) => {

                    e.target.style.color = "white"
                    
                    console.log(scoreOrder);
                    
                    if(firstClick === null) {
                        setFirstClick(e.target.textContent)
                        setFirstClickElement(e.target)
                       
                       
                        e.target.style.pointerEvents = "none"
                    } else {
                        if(e.target.textContent === firstClick) {
                            setRevealed(revealed + 1)
                            e.target.style.backgroundColor = "#BCCED9"
                            firstClickElement.style.backgroundColor = "#BCCED9"
                            e.target.style.pointerEvents = "none"
                            firstClickElement.style.pointerEvents = "none"
                            setMoves(moves - 1)
                            if(options.plNumber === 2) {
                                setScoreOrder(scoreOrder + 1)
                                if(scoreOrder === 2) {
                                    setScoreOrder(1)
                                }
                            } 

                            if(options.plNumber === 3) {
                                setScoreOrder(scoreOrder + 1)
                                if(scoreOrder === 3) {
                                    setScoreOrder(1)
                                }
                            } 

                            if(options.plNumber === 4) {
                                setScoreOrder(scoreOrder + 1)
                                if(scoreOrder === 4) {
                                    setScoreOrder(1)
                                }
                            } 

                            if(scoreOrder === 1) {
                                setPlayerScore(prevState => {
                                   return{ ...prevState,
                                    playerOne: playerScore.playerOne + 1
                            }})
                            } else if(scoreOrder === 2) {
                                setPlayerScore(prevState => {
                                    return{
                                        ...prevState,
                                        playerTwo: playerScore.playerTwo + 1
                                    }
                                })
                            } else if(scoreOrder === 3) {
                                setPlayerScore(prevState => {
                                    return{
                                        ...prevState,
                                        playerThree: playerScore.playerThree + 1
                                    }
                                })
                            } else if(scoreOrder === 4) {
                                setPlayerScore(prevState => {
                                    return{
                                        ...prevState,
                                        playerFour: playerScore.playerFour + 1
                                    }
                                })
                            }

                            if(revealed === 7 && options.plNumber === 2) {
                               
                            }
                          
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
                        if(options.plNumber === 2) {
                            setScoreOrder(scoreOrder + 1)
                            if(scoreOrder === 2) {
                                setScoreOrder(1)
                            }
                        } 
                        if(options.plNumber === 3) {
                            setScoreOrder(scoreOrder + 1)
                            if(scoreOrder === 3) {
                                setScoreOrder(1)
                            }
                        } 
                        if(options.plNumber === 4) {
                            setScoreOrder(scoreOrder + 1)
                            if(scoreOrder === 4) {
                                setScoreOrder(1)
                            }
                        } 
                    }
                
                }}>{number}</div>
            )
           })}
        </div>
       {options.plNumber === 1 ? <div className="flex w-11/12 m-auto mt-32 justify-evenly items-center">
            <div className=" w-36 h-16 bg-timerMoves rounded-lg grid justify-evenly items-center text-center">
                <p className="text-lg font-bold leading-5 text-center text-menuColor">Time</p>
                <p className="text-3xl font-bold leading-7 text-center text-memoryColor">{minutes}:{seconds}</p>
            </div>
            <div className=" w-36 h-16 bg-timerMoves rounded-lg grid justify-evenly items-center text-center">
                <p className="text-lg font-bold leading-5 text-center text-menuColor">Moves</p>
                <p className="text-3xl font-bold leading-7 text-center text-memoryColor">{moves}</p>
            </div>
        </div> : 
        <div className="flex justify-center items-center mt-16   w-11/12 gap-7 m-auto">
        <div className={` rounded-lg text-center  w-20 h-20 grid gap-1 justify-center items-center ${scoreOrder === 1 ? ' bg-startButton' : 'bg-timerMoves'} `}><p className=" text-menuColor ">P1</p><p className=" text-scoreColor text-2xl font-bold leading-7 text-center">{playerScore.playerOne}</p></div>
        <div className={`rounded-lg  text-center  w-20 h-20 grid gap-1 justify-center items-center ${scoreOrder === 2 ? ' bg-startButton' : 'bg-timerMoves'} `}><p className=" text-menuColor">P2</p><p className=" text-scoreColor text-2xl font-bold leading-7 text-center">{playerScore.playerTwo}</p></div>
        {options.plNumber === 3 || options.plNumber === 4 ? <div className={`rounded-lg  text-center  w-20 h-20 grid gap-1 justify-center items-center ${scoreOrder === 3 ? ' bg-startButton' : 'bg-timerMoves'}`}><p className=" text-menuColor">P3</p><p className=" text-scoreColor text-2xl font-bold leading-7 text-center">{playerScore.playerThree}</p></div> : null}
        {options.plNumber===4 ? <div className={`rounded-lg  text-center  w-20 h-20 grid gap-1 justify-center items-center ${scoreOrder === 4 ? ' bg-startButton' : 'bg-timerMoves'}`}><p className=" text-menuColor">P4</p><p className=" text-scoreColor text-2xl font-bold leading-7 text-center">{playerScore.playerFour}</p></div> : null}
        </div>}
        </div>
        {endGame ? 
        <div className="  bg-white  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pt-10 pb-10 w-11/12 m-auto grid text-center items-center content-center rounded-xl">
            <h1 className="text-24 font-bold leading-30 tracking-normal text-center text-memoryColor">Player 3 Wins!</h1>
            <p className=" text-14 font-bold leading-17 tracking-normal text-center text-menuColor mt-6">Game over! Here are the results</p>
            <div></div>
            <div></div>
            <button></button>
            <button></button>
        </div> 
        : 
        null}
        </div>
    )
}


export default Game