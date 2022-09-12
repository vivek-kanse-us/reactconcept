import React from "react";

class Stopwatch extends React.Component {
    // state = { 
    //     lapse: 0, 
    //     running: false,
    //     timmer: null,
    // }
    constructor(props) {
        super(props)
        this.state = {
            lapse: 0,
            running: false,
        }
        this.timmer = null;
    }
    handalRunClick = () => {
        let { running } = this.state;
            if (running) {
                clearInterval(this.timmer);
                this.setState({running: false,})
            } else {
                const startTime = Date.now() - this.state.lapse;
                this.timmer = setInterval(() => {
                    this.setState({
                        lapse: Date.now() - startTime,
                        running: true,
                    })
                })
            }
            return { running: !running }
    

        // this.setState({ running: true })
    }
    handalClearClick = () => {
        clearInterval(this.timmer);
        this.setState({ lapse: 0, running: false })
    }
    render() {
        const { lapse, running } = this.state
        return (
            <div className="timmer">
                <label>{lapse}ms</label>
                <button onClick={this.handalRunClick}>

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    {running ? 'Stop' : 'Start'}
                </button>
                <button onClick={this.handalClearClick}>Clear</button>
            </div>
        )
    }

}

export default Stopwatch;