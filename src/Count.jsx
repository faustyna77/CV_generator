
import { useState } from "react";
function Count()
{

    let colors=['green','pink','yellow'];
    const [index,setIndex]=useState(0);
    const [color,setBackgroundColor]=useState(colors[0])
    const [state1,setState1]=useState(0);


    function add()
    {
        setState1(state1+1);
        
    }



    const changeColor=(color)=>()=>
    {

        setBackgroundColor(color);
    }
    const list=['apple','strawberry','banan','peace'];
   
    function handleClick()
    {
        setIndex(index+1);
    }
    const [number,setNumber]=useState(0);

    const addNumber=()=>
    [
        setNumber(number+2),
        setTimeout(()=>{alert(number);},3000)
    ]

    const [person,setPerson]=useState({name:"Ala",age:28})


    const handlIncreaseAge=()=>
    {
        const newPerson={...person,age:person.age+1}
        setPerson(newPerson);
    };

    const changeName=()=>
    {
        const newPerson2={...person,name:"Alicja"}
        setPerson(newPerson2);
    }

    const [show,setShow]=useState(false)
    function handleMoreClick()
    {
        setShow(!show);

    }

    return(
        <>
        <div>
            <button onClick={handleClick}>Click</button>
        </div>
        <h3>
        ({list[index]})
        </h3>
        <button onClick={handleMoreClick}> {show ? 'Show':'hide'} </button>
        <>       <button onClick={add}>dodaj</button>
        </>
        <h2>{state1}</h2>
        <div>
            <h2>{person.name}</h2>
            <h2>{person.age}</h2>
            <button onClick={handlIncreaseAge}>Increase Age</button>
            <button onClick={changeName}>Change Name</button>
            <button onClick={addNumber}>addNumber</button>
            <h2>{number}</h2>
        </div>
        

       
        </>
        
    )


}



export default Count;