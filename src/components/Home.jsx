import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";


function Home({setOptions, options}) {
   
    
  console.log(options);

   

 

  return (
    <div className='bg-red-300 w-full h-full pt-20'>
      <p className="  text-4xl font-bold leading-10 tracking-normal text-center text-white">memory</p>
      <div className=" w-11/12 m-auto mt-6 bg-white rounded-xl pb-9">
        <div>
          <div className=" grid w-11/12 m-auto justify-center pt-5">
          <p className=" mb-4 ml-1 text-menuColor font-bold text-base leading-5 tracking-normal text-left">Select Theme</p>
          <div  className=" flex justify-center items-center gap-3">
            <label htmlFor="theme1"  className={`flex  text-white justify-center items-center w-36 h-10 bg-bgForRadio ${options.theme==='numbers' ? 'opacity-100' : 'opacity-50'}   rounded-xl`}>Numbers</label>
            <input type="radio" name="theme" id="theme1" className="hidden" onChange={() => {
             setOptions(prevState => {
              return{
                ...prevState,
                theme: 'numbers'
              }
             })
            }}/>
             <label htmlFor="theme2" className={` text-white flex justify-center items-center w-36 h-10 bg-bgForRadio ${options.theme==='icons' ? 'opacity-100' : 'opacity-50'}  rounded-xl`}>Icons</label> 
            <input type="radio" name="theme" id="theme2" className="hidden" onChange={() => {
             setOptions(prevState => {
              return{
                ...prevState,
                theme:'icons'
              }
             })
            }}/>
            </div>
          </div>
          <div className="grid w-11/12 m-auto justify-center pt-5">
            <p className="mb-4 ml-1 text-menuColor font-bold text-base leading-5 tracking-normal text-left">Number Of Players</p>
            <div className=" flex justify-center items-center gap-3 text-white">
               <label htmlFor="player1" className={` flex justify-center items-center w-16 h-10 bg-bgForRadio rounded-xl ${options.plNumber === 1 ?'opacity-100' : 'opacity-50'}`}>1</label> 
              <input className=" hidden" type="radio" id="player1" name="players" onChange={() => {
                setOptions(prevState => {
                  return{
                    ...prevState,
                    plNumber: 1
                  }
                })
              }}/>
               <label htmlFor="player2" className={` flex justify-center items-center w-16 h-10 bg-bgForRadio rounded-xl ${options.plNumber === 2 ?'opacity-100' : 'opacity-50'}`}>2</label> 
              <input className=" hidden" type="radio" id="player2" name="players" onChange={() => {
                setOptions(prevState => {
                  return{
                    ...prevState,
                    plNumber: 2
                  }
                })
              }}/>
              <label htmlFor="player3" className={` flex justify-center items-center w-16 h-10 bg-bgForRadio rounded-xl ${options.plNumber === 3 ?'opacity-100' : 'opacity-50'}`}>3</label>
              <input className=" hidden" type="radio" id="player3" name="players" onChange={() => {
                setOptions(prevState => {
                  return{
                    ...prevState,
                    plNumber: 3
                  }
                })
              }}/>
               <label htmlFor="player4" className={` flex justify-center items-center w-16 h-10 bg-bgForRadio rounded-xl ${options.plNumber === 4 ?'opacity-100' : 'opacity-50'}`}>4</label> 
              <input className=" hidden" type="radio" id="player4" name="players" onChange={() => {
               setOptions(prevState => {
                return{
                  ...prevState,
                  plNumber: 4
                }
              })
              }}/>
            </div>
          </div>
          <div className=" grid w-11/12 m-auto justify-center pt-5">
          <p className=" mb-4 ml-1 text-menuColor font-bold text-base leading-5 tracking-normal text-left">Grid Size</p>
          <div  className=" flex justify-center items-center gap-3">
             <label htmlFor="4x4"  className={`flex  text-white justify-center items-center w-36 h-10 bg-bgForRadio ${options.size==='4x4' ? 'opacity-100' : 'opacity-50'}   rounded-xl`}>4x4</label> 
            <input type="radio" name="grid" id="4x4" className="hidden" onChange={() => {
              setOptions(prevState => {
                return{
                  ...prevState,
                  size: '4x4'
                }
              })
            }}/>
             <label htmlFor="6x6" className={` text-white flex justify-center items-center w-36 h-10 bg-bgForRadio ${options.size==='6x6' ? 'opacity-100' : 'opacity-50'}  rounded-xl`}>6x6</label> 
            <input type="radio" name="grid" id="6x6" className="hidden" onChange={() => {
             setOptions(prevState => {
              return{
                ...prevState,
                size:'6x6'
              }
             })
            }}/>
            </div>
          </div>

        <Link  to='/game' className=" w-72 h-12  m-auto bg-startButton rounded-xl mt-6 text-2xl font-bold leading-6 tracking-normal text-center text-white flex justify-center items-center" >Start Game</Link>

          </div>
      </div>
    </div>
  );
}


export default Home