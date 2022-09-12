import React from "react";

class Nameform extends React.Component {
    state = {error: this.props.getErrorMessage('')}
        
    handleSubmit = event => {
      event.preventDefault()
      const value =
        event.target.elements.username.value
      const error = this.props.getErrorMessage(
        value,
      )
      if (error) {
        alert(`error: ${error}`)
      } else {
        alert(`success: ${value}`)
      }
    }
    
    handleChange = event => {
      const {value} = event.target
      this.setState({
        error: this.props.getErrorMessage(value),
      })
    }
    
    render(){
        const {error} = this.state
        return(
            <form onSubmit={this.handalsubmit}>
                <h1>Dynamic form</h1>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="username"  onChange={this.handleChange} placeholder="Enter Name"/>
                </div>
                {error ? (
                <div className="error-msg" >
                  {error}
                </div>
              ) : null}
                <div className="form-group">
                    <button disabled={Boolean(error)} type="submit">submit</button>
                </div>
            </form>
        )
    }
}
export default Nameform;