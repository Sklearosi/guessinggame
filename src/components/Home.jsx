import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";


function Home() {
    const [themeOption, setThemeoption] = useState('option1')
    const [playerOption, setPlayerOption] = useState(1)
    const [gridSize, setGridSize] = useState('4x4')

    useEffect(() => {
      document.body.style.backgroundColor = "#152938"
  }, [])

  return (
    <>
      <p className=" mt-20 text-4xl font-bold leading-10 tracking-normal text-center text-white">memory</p>
      <div className=" w-11/12 m-auto mt-6 bg-white rounded-xl pb-9">
        <div>
          <div className=" grid w-11/12 m-auto justify-center pt-5">
          <p className=" mb-4 ml-1 text-menuColor font-bold text-base leading-5 tracking-normal text-left">Select Theme</p>
          <div  className=" flex justify-center items-center gap-3">
            <label htmlFor="theme1"  className={`flex  text-white justify-center items-center w-36 h-10 bg-bgForRadio ${themeOption==='option1' ? 'opacity-100' : 'opacity-50'}   rounded-xl`}>Numbers</label>
            <input type="radio" name="theme" id="theme1" className="hidden" onChange={() => {
              setThemeoption('option1')
            }}/>
            <label htmlFor="theme2" className={` text-white flex justify-center items-center w-36 h-10 bg-bgForRadio ${themeOption==='option2' ? 'opacity-100' : 'opacity-50'}  rounded-xl`}>Icons</label>
            <input type="radio" name="theme" id="theme2" className="hidden" onChange={() => {
             setThemeoption('option2')
            }}/>
            </div>
          </div>
          <div className="grid w-11/12 m-auto justify-center pt-5">
            <p className="mb-4 ml-1 text-menuColor font-bold text-base leading-5 tracking-normal text-left">Number Of Players</p>
            <div className=" flex justify-center items-center gap-3">
              <label htmlFor="player1" className={` flex justify-center items-center w-16 h-10 bg-bgForRadio rounded-xl ${playerOption === 1 ?'opacity-100' : 'opacity-50'}`}>1</label>
              <input className=" hidden" type="radio" id="player1" name="players" onChange={() => {
                setPlayerOption(1)
              }}/>
              <label htmlFor="player2" className={` flex justify-center items-center w-16 h-10 bg-bgForRadio rounded-xl ${playerOption === 2 ?'opacity-100' : 'opacity-50'}`}>2</label>
              <input className=" hidden" type="radio" id="player2" name="players" onChange={() => {
                setPlayerOption(2)
              }}/>
              <label htmlFor="player3" className={` flex justify-center items-center w-16 h-10 bg-bgForRadio rounded-xl ${playerOption === 3 ?'opacity-100' : 'opacity-50'}`}>3</label>
              <input className=" hidden" type="radio" id="player3" name="players" onChange={() => {
                setPlayerOption(3)
              }}/>
              <label htmlFor="player4" className={` flex justify-center items-center w-16 h-10 bg-bgForRadio rounded-xl ${playerOption === 4 ?'opacity-100' : 'opacity-50'}`}>4</label>
              <input className=" hidden" type="radio" id="player4" name="players" onChange={() => {
                setPlayerOption(4)
              }}/>
            </div>
          </div>
          <div className=" grid w-11/12 m-auto justify-center pt-5">
          <p className=" mb-4 ml-1 text-menuColor font-bold text-base leading-5 tracking-normal text-left">Grid Size</p>
          <div  className=" flex justify-center items-center gap-3">
            <label htmlFor="4x4"  className={`flex  text-white justify-center items-center w-36 h-10 bg-bgForRadio ${gridSize==='4x4' ? 'opacity-100' : 'opacity-50'}   rounded-xl`}>4x4</label>
            <input type="radio" name="grid" id="4x4" className="hidden" onChange={() => {
              setGridSize('4x4')
            }}/>
            <label htmlFor="6x6" className={` text-white flex justify-center items-center w-36 h-10 bg-bgForRadio ${gridSize==='6x6' ? 'opacity-100' : 'opacity-50'}  rounded-xl`}>6x6</label>
            <input type="radio" name="grid" id="6x6" className="hidden" onChange={() => {
             setGridSize('6x6')
            }}/>
            </div>
          </div>

        <Link  to='/game' className=" w-72 h-12  m-auto bg-startButton rounded-xl mt-6 text-2xl font-bold leading-6 tracking-normal text-center text-white flex justify-center items-center" >Start Game</Link>

          </div>
      </div>
    </>
  );
}


export default Home