import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Game({ options }) {
  const [numbers, setNumbers] = useState(
    options.size === "4x4"
      ? [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8]
      : [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 1, 2,
          3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
        ]
  );
  const [playerScore, setPlayerScore] = useState({
    playerOne: 0,
    playerTwo: 0,
    playerThree: 0,
    playerFour: 0,
  });

  const [scoreOrder, setScoreOrder] = useState(1);
  const [revealed, setRevealed] = useState(0);

  const shuffleNumbers = () => {
    const shuffledNumbers = [...numbers];
    for (let i = shuffledNumbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledNumbers[i], shuffledNumbers[j]] = [
        shuffledNumbers[j],
        shuffledNumbers[i],
      ];
    }
    setNumbers(shuffledNumbers);
  };

  useEffect(() => {
    document.body.style.backgroundColor = "white";

    shuffleNumbers();
    
    
  }, []);

  const [firstClick, setFirstClick] = useState(null);
  const [firstClickElement, setFirstClickElement] = useState(null);
  const [minutes, setMinutes] = useState(2);
  const [seconds, setSeconds] = useState(59);
  const [moves, setMoves] = useState(0);
  const [endGame, setEndGame] = useState(false);
  let timer;
  const [soloEndGame, setSolosEndGame] = useState(false)
  
  
  useEffect(() => {
    if(options.plNumber === 1) {
      
   
    timer = setInterval(() => {
      setSeconds(seconds - 1);
      if (seconds === 0) {
        setSeconds(59);
        setMinutes(minutes - 1);
      }
      if (minutes === 0 && seconds === 0) {
        clearInterval(timer);
        setMinutes(0);
        setSeconds(0);
      }
      if(minutes === 0 && seconds === 0) {
        setSolosEndGame(true)
      }
     
    }, 1000);
    if(revealed === 8 && options.plNumber === 1) {
      clearInterval(timer)
    }
    if(menuOpen) {
      clearInterval(timer)
    }
    return () => clearInterval(timer);
  
}
  });

  let timeOut;

  const leaderboardData = Object.entries(playerScore)
    .map(([name, score]) => ({ name, score }))
    .sort((a, b) => b.score - a.score);




  const resetGame = () => {
    
   
    const initialNumbers =
      options.size === "4x4"
        ? [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8]
        : [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 1, 2,
            3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
          ];

    shuffleNumbers();
    setNumbers(initialNumbers);

   
    setPlayerScore({
      playerOne: 0,
      playerTwo: 0,
      playerThree: 0,
      playerFour: 0,
    });
    setScoreOrder(1);
    setRevealed(0);
    setFirstClick(null);
    setFirstClickElement(null);
    setMinutes(2);
    setSeconds(59);
    setMoves(0)
    setEndGame(false);
    setSolosEndGame(false)
    setMenuOpen(false)
    document.querySelectorAll(".grid div").forEach((element) => {
        element.style.color = "transparent";
        element.style.backgroundColor = "#304859";
        element.style.pointerEvents = "auto";
      });
    
  };

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className={` w-full h-full bg-purple-500 `}>
      <div className={`${endGame ? "absolute inset-0 filter blur-lg" : null}`}>
        <div className="  flex m-auto w-11/12 pt-4 justify-between items-center">
          <p className="font-atkinson text-3xl font-bold leading-7 tracking-normal text-left text-memoryColor">
            memory
          </p>
          <button onClick={() => {
            setMenuOpen(true)
          }} className=" font-bold leading-5 tracking-normal text-center w-20 h-10 bg-menuColor flex justify-center items-center rounded-3xl text-white">
            Menu
          </button>
        </div>
        <div
          className={` pl-3 grid grid-cols-4 w-mobWidth h-mobHeight   m-auto mt-28   ${
            options.size === "6x6" ? " grid-cols-6 pl-0 md:w-tabletWidthtBig md:h-tabletHeightBig" : 'md:w-tabletWidthSmall md:h-tabletHeightSmall'
          }`}
        >
          {numbers.map((number, index) => {
            return (
              <div
              
                className={` resetColor font-bold leading-10 text-center bg-bgForRadio rounded-full  flex justify-center  items-center text-transparent ${
                  options.size === "6x6"
                    ? " w-10 h-10 text-2xl"
                    : "text-4xl w-16 h-16 md:w-24 md:h-24"
                } `}
                key={index}
                onClick={(e) => {
                  e.target.style.color = "white";

                  

                  if (firstClick === null) {
                    setFirstClick(e.target.textContent);
                    setFirstClickElement(e.target);

                    e.target.style.pointerEvents = "none";
                  } else {
                    if (e.target.textContent === firstClick) {
                      setRevealed(revealed + 1);
                      e.target.style.backgroundColor = "#BCCED9";
                      firstClickElement.style.backgroundColor = "#BCCED9";
                      e.target.style.pointerEvents = "none";
                      firstClickElement.style.pointerEvents = "none";
                      setMoves(moves + 1);
                      if (moves === 0) {
                        console.log('you yle');
                      }
                      if (options.plNumber === 2) {
                        setScoreOrder(scoreOrder + 1);
                        if (scoreOrder === 2) {
                          setScoreOrder(1);
                        }
                      }

                      if (options.plNumber === 3) {
                        setScoreOrder(scoreOrder + 1);
                        if (scoreOrder === 3) {
                          setScoreOrder(1);
                        }
                      }

                      if (options.plNumber === 4) {
                        setScoreOrder(scoreOrder + 1);
                        if (scoreOrder === 4) {
                          setScoreOrder(1);
                        }
                      }

                      if (scoreOrder === 1) {
                        setPlayerScore((prevState) => {
                          return {
                            ...prevState,
                            playerOne: playerScore.playerOne + 1,
                          };
                        });
                      } else if (scoreOrder === 2) {
                        setPlayerScore((prevState) => {
                          return {
                            ...prevState,
                            playerTwo: playerScore.playerTwo + 1,
                          };
                        });
                      } else if (scoreOrder === 3) {
                        setPlayerScore((prevState) => {
                          return {
                            ...prevState,
                            playerThree: playerScore.playerThree + 1,
                          };
                        });
                      } else if (scoreOrder === 4) {
                        setPlayerScore((prevState) => {
                          return {
                            ...prevState,
                            playerFour: playerScore.playerFour + 1,
                          };
                        });
                      }

                      if(revealed ===7 && options.plNumber === 1 && options.size === '4x4') {
                        
                      } else if(revealed ===35 && options.plNumber === 1 && options.size === '4x4'){
                        
                      }

                      if (revealed === 7 && options.plNumber > 1 && options.size === '4x4') {
                        setEndGame(true)
                      } else if (revealed === 35 && options.plNumber > 1 && options.size === '6x6'){
                        setEndGame(true)
                      }
                    } else {
                      timeOut = setTimeout(() => {
                        e.target.style.color = "transparent";
                        firstClickElement.style.color = "transparent";
                        e.target.style.pointerEvents = "auto";
                        firstClickElement.style.pointerEvents = "auto";
                      }, 1000);
                      setMoves(moves + 1);
                      if (moves === 1) {
                        console.log('you yle');
                      }
                    }
                    setFirstClick(null);
                    setFirstClickElement(null);
                    if (options.plNumber === 2) {
                      setScoreOrder(scoreOrder + 1);
                      if (scoreOrder === 2) {
                        setScoreOrder(1);
                      }
                    }
                    if (options.plNumber === 3) {
                      setScoreOrder(scoreOrder + 1);
                      if (scoreOrder === 3) {
                        setScoreOrder(1);
                      }
                    }
                    if (options.plNumber === 4) {
                      setScoreOrder(scoreOrder + 1);
                      if (scoreOrder === 4) {
                        setScoreOrder(1);
                      }
                    }
                  }
                }}
              >
                {number}
              </div>
            );
          })}
        </div>
        {options.plNumber === 1 ? (
          <div className="flex w-11/12 m-auto mt-32 justify-evenly items-center">
            <div className=" w-36 h-16 bg-timerMoves rounded-lg grid justify-evenly items-center text-center">
              <p className="text-lg font-bold leading-5 text-center text-menuColor">
                Time
              </p>
              <p className="text-3xl font-bold leading-7 text-center text-memoryColor">
                {minutes}:{seconds}
              </p>
            </div>
            <div className=" w-36 h-16 bg-timerMoves rounded-lg grid justify-evenly items-center text-center">
              <p className="text-lg font-bold leading-5 text-center text-menuColor">
                Moves
              </p>
              <p className="text-3xl font-bold leading-7 text-center text-memoryColor">
                {moves}
              </p>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center mt-16   w-11/12 gap-7 m-auto">
            <div
              className={` rounded-lg text-center  w-20 h-20 grid gap-1 justify-center items-center ${
                scoreOrder === 1 ? " bg-startButton" : "bg-timerMoves"
              } `}
            >
              <p className=" text-menuColor ">P1</p>
              <p className=" text-scoreColor text-2xl font-bold leading-7 text-center">
                {playerScore.playerOne}
              </p>
            </div>
            <div
              className={`rounded-lg  text-center  w-20 h-20 grid gap-1 justify-center items-center ${
                scoreOrder === 2 ? " bg-startButton" : "bg-timerMoves"
              } `}
            >
              <p className=" text-menuColor">P2</p>
              <p className=" text-scoreColor text-2xl font-bold leading-7 text-center">
                {playerScore.playerTwo}
              </p>
            </div>
            {options.plNumber === 3 || options.plNumber === 4 ? (
              <div
                className={`rounded-lg  text-center  w-20 h-20 grid gap-1 justify-center items-center ${
                  scoreOrder === 3 ? " bg-startButton" : "bg-timerMoves"
                }`}
              >
                <p className=" text-menuColor">P3</p>
                <p className=" text-scoreColor text-2xl font-bold leading-7 text-center">
                  {playerScore.playerThree}
                </p>
              </div>
            ) : null}
            {options.plNumber === 4 ? (
              <div
                className={`rounded-lg  text-center  w-20 h-20 grid gap-1 justify-center items-center ${
                  scoreOrder === 4 ? " bg-startButton" : "bg-timerMoves"
                }`}
              >
                <p className=" text-menuColor">P4</p>
                <p className=" text-scoreColor text-2xl font-bold leading-7 text-center">
                  {playerScore.playerFour}
                </p>
              </div>
            ) : null}
          </div>
        )}
      </div>
     {endGame ?
      <div className=" bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 m-auto pt-10 pb-10 rounded-xl grid text-center lg:w-desktop">
        {leaderboardData[0].score > leaderboardData[1].score ? <p className="text-24 font-bold leading-30 tracking-normal text-center text-memoryColor">{leaderboardData[0].name} Wins!</p> : leaderboardData[0].score === leaderboardData[1].score ?<p className="text-24 font-bold leading-30 tracking-normal text-center text-memoryColor">It's a tie!</p> : null}
        <p className="text-14 font-bold leading-17 tracking-normal text-center text-menuColor mt-5">Game over! Here are the results…</p>
        <div className=" mt-5 w-11/12 m-auto flex justify-between items-center bg-winnerBg text-white pt-3 pb-3 pl-2 pr-2 rounded-xl"><p>{leaderboardData[0].name}</p><p>{leaderboardData[0].score} Pairs</p></div>
        <div className={` mt-2 w-11/12 m-auto flex justify-between items-center  text-white pt-3 pb-3 pl-2 pr-2 rounded-xl ${leaderboardData[0].score === leaderboardData[1].score ? 'bg-winnerBg' : 'bg-timerMoves'}`}><p className={`  ${leaderboardData[0].score === leaderboardData[1].score ? 'text-white' : " text-menuColor" }`}>{leaderboardData[1].name}</p><p className={`  ${leaderboardData[0].score === leaderboardData[1].score ? 'text-white' : " text-scoreColor" }`}>{leaderboardData[1].score} Pairs</p></div>
        {options.plNumber === 3 || options.plNumber===4 ? <div className="mt-2 w-11/12 m-auto flex justify-between items-center bg-timerMoves text-white pt-3 pb-3 pl-2 pr-2 rounded-xl"><p className=" text-menuColor">{leaderboardData[2].name}</p><p className=" text-scoreColor">{leaderboardData[2].score} Pairs</p></div> :null}
        {options.plNumber===4 ? <div className="mt-2 w-11/12 m-auto flex justify-between items-center bg-timerMoves text-white pt-3 pb-3 pl-2 pr-2 rounded-xl"><p className=" text-menuColor">{leaderboardData[3].name}</p><p className=" text-scoreColor">{leaderboardData[3].score} Pairs</p></div> :null}
        <button className=" w-64 h-12 m-auto text-center bg-menuColor rounded-xl mt-6 " onClick={resetGame}>Restart</button>
        <Link className=" flex justify-center items-center w-64 h-12 m-auto bg-timerMoves rounded-xl mt-2 text-scoreColor " to='/home'>Setup New Game</Link>
      </div>
      : 
      null}
      {soloEndGame ? 
      <div className="lg:w-desktop bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 m-auto pt-10 pb-10 rounded-xl grid text-center ">
        <p className=" text-red-500">You lost</p>
        <button className=" w-64 h-12 m-auto text-center bg-menuColor rounded-xl mt-6 " onClick={resetGame}>Restart</button>
        <Link className=" flex justify-center items-center w-64 h-12 m-auto bg-timerMoves rounded-xl mt-2 text-scoreColor " to='/home'>Setup New Game</Link>
      </div>
       : 
       revealed === 8 && options.plNumber === 1 && options.size === "4x4"
       ?
       <div className=" bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 m-auto pt-10 pb-10 rounded-xl grid text-center lg:w-desktop">
        <p className="text-14 font-bold leading-17 tracking-normal text-center text-menuColor mt-5">You did it!</p>
        <p className="text-24 font-bold leading-30 tracking-normal text-center text-memoryColor">Game over! Here's how you got on</p>
        <div className="mt-2 w-11/12 m-auto flex justify-between items-center bg-timerMoves text-white pt-3 pb-3 pl-2 pr-2 rounded-xl"><p className=" text-menuColor">Time Elapsed</p><p  className=" text-scoreColor">{minutes}:{seconds}</p></div>
        <div className="mt-2 w-11/12 m-auto flex justify-between items-center bg-timerMoves text-white pt-3 pb-3 pl-2 pr-2 rounded-xl"><p className=" text-menuColor">Moves Taken</p><p  className=" text-scoreColor">{moves}</p></div>
        <button className=" w-64 h-12 m-auto text-center bg-menuColor rounded-xl mt-6 " onClick={resetGame}>Restart</button>
        <Link className=" flex justify-center items-center w-64 h-12 m-auto bg-timerMoves rounded-xl mt-2 text-scoreColor " to='/home'>Setup New Game</Link>
       </div>
       :
       revealed === 35 && options.plNumber === 1 && options.size === "6x6"
       ?
       <div className=" bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 m-auto pt-10 pb-10 rounded-xl grid text-center ">
       <p className="text-14 font-bold leading-17 tracking-normal text-center text-menuColor mt-5">You did it!</p>
       <p className="text-24 font-bold leading-30 tracking-normal text-center text-memoryColor">Game over! Here's how you got on</p>
       <div className="mt-2 w-11/12 m-auto flex justify-between items-center bg-timerMoves text-white pt-3 pb-3 pl-2 pr-2 rounded-xl"><p className=" text-menuColor">Time Elapsed</p><p  className=" text-scoreColor">{minutes}:{seconds}</p></div>
       <div className="mt-2 w-11/12 m-auto flex justify-between items-center bg-timerMoves text-white pt-3 pb-3 pl-2 pr-2 rounded-xl"><p className=" text-menuColor">Moves Taken</p><p  className=" text-scoreColor">{moves}</p></div>
       <button className=" w-64 h-12 m-auto text-center bg-menuColor rounded-xl mt-6 " onClick={resetGame}>Restart</button>
       <Link className=" flex justify-center items-center w-64 h-12 m-auto bg-timerMoves rounded-xl mt-2 text-scoreColor " to='/home'>Setup New Game</Link>
      </div>
       :
       null}
       {menuOpen ? 
       <div className=" bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 m-auto pt-10 pb-10 rounded-xl grid text-center lg:w-desktop">
      
       <button className=" w-64 h-12 m-auto text-center bg-menuColor rounded-xl mt-6 " onClick={resetGame}>Restart</button>
       <Link className=" flex justify-center items-center w-64 h-12 m-auto bg-timerMoves rounded-xl mt-2 text-scoreColor " to='/home'>Setup New Game</Link>
       <button className=" flex justify-center items-center w-64 h-12 m-auto bg-timerMoves rounded-xl mt-2 text-scoreColor " onClick={() => {
        setMenuOpen(false)
       }}>Resume Game</button>
      </div>
       : 
       null}
    </div>
   
  );
}

export default Game;
