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
   
    

    return(
        <>
        <div className=" flex m-auto w-11/12 mt-4 justify-between items-center">
            <p className="font-atkinson text-3xl font-bold leading-7 tracking-normal text-left text-memoryColor">memory</p>
            <Link className=" font-bold leading-5 tracking-normal text-center w-20 h-10 bg-menuColor flex justify-center items-center rounded-3xl text-white">Menu</Link>
        </div>
        <div className=" grid grid-cols-4 w-11/12 m-auto mt-10 gap-3">
           {numbers.map((number, index) => {
            return(
                <div  className=" bg-red-600 rounded-full w-16 h-16 flex justify-center  items-center  " key={index}  onClick={(e) => {
                    e.target.style.color = "white"
                    
                    if(firstClick === null) {
                        
                        setFirstClick(e.target.textContent)
                        console.log(firstClick);
                    } else {
                        if(e.target.textContent === firstClick) {
                            console.log('yessss');
                        } else {
                            console.log('nooo');
                        }
                        setFirstClick(null)
                    }
                
                }}>{number}</div>
            )
           })}
        </div>
        </>
    )
}


export default Game