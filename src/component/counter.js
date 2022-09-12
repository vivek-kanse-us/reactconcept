import React from "react";

class Counter extends React.Component{
    state = {count: 0}
    hendalClick = () =>{
        this.setState(({count}) => ({count: count + 1}))
    }
    render(){
        const {count} = this.state
         return(
            <>
            <button onClick={this.hendalClick}>{count}</button>
            </>
         )
    }
}

export default Counter;