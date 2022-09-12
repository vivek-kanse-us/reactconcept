import React from "react";

class Bform extends React.Component{
    handelsubmit = event =>{
        event.preventDefault();
        // console.log({target: event.target})
        // console.log(event.target[0].value)
        // console.log(
        //   event.target.elements.username.value,
        // )
        console.log(this.firstname.value)
    }
    render(){
        return(
            <form onSubmit={this.handelsubmit}>
            <h1>Basic Form</h1>
            <div className="form-group">
                <label>First Name</label>
                <input 
                type="text" 
                name="username"
                ref={(input) => (this.firstname = input)}/>
            </div>
            <div className="form-group">
            <input type="submit"/>
            </div>
            
            </form>
        )
    }
}
export default Bform;