import React,{useState} from "react";



function Eventhandler() {
    //  state = { eventCount: 0, username: '' }
     let [eventCount, setCount]= useState(0);
     let [username, setName]= useState();
     const incriment = () =>{
        setCount(eventCount + 1)
     }
     const inputChange = (e) => {
        setName(e.target.value)
     }
    return (
        <div>
            <p>
                there have been event on button count {eventCount}
            </p>
            <button onClick={incriment}>
                click here
            </button>
             <input type="text" onChange={inputChange} />
            <p>
                hello Good morning {username}
                </p> 


        </div>
    )
}

// function inputChange(){
//     setState({username: event.target.value})
// }



export default Eventhandler;