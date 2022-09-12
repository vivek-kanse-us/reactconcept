import React from "react";

class Ref extends React.Component{
    onKeyUp = ( e) => {
        console.log(e.keycode);
        // if (e.keyCode == 13) {
        //     switch (passed){
        //         case 'firstname':
        //         this.lastname.focus();
        //         case 'lastname':
        //         this.age.focus();
                
        //     }
        // }
    }
    onClick = () =>{
        console.log(this.firstname);
    }
    render(){
        return(
            <form className="form">
                <div className="form-group">
                    <label>First name</label>
                    <input type="text" 
                    
                    ref={(input) => {this.firstname = input}} 
                    placeholder="Enter First name"/>
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" 
                    onKeyUp={this.onKeyUp.bind(this, 'lastname')}
                    ref={(input) => {this.lastname = input}} 
                    placeholder="Enter Last name"/>
                </div>
                <div className="form-group">
                    <label>Age</label>
                    <input type="text" 
                    onKeyUp={this.onKeyUp.bind(this, 'age')}
                    ref={(input) => {this.age = input}} 
                    placeholder="Enter Age"/>
                </div>
                <div className="form-group">
                    <input type="submit" onClick={this.onClick} ref={(input) => {this.submit = input}}/>
                </div>
            </form>
        )
    }
}
export default Ref;