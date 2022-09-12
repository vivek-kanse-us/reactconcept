import React from "react";

class Fancyform extends React.Component{
   
      constructor(props) {
        super(props)
        this.state = {
            multiline: '',
            commaSeparated: '',
            multiSelect: ''
        }
    }
    static availableOptions = [
        'apple',
        'grape',
        'cherry',
        'orange',
        'pear',
        'peach',
      ]
      handalCommaseparated = (e) => {
        const {value} = e.target
          const allVals = value
            .split(',')
            .map(v => v.trim())
            .filter(Boolean)
          this.setState({
            commaSeparated: value,
            multiline: allVals.join('\n'),
            multiSelect: allVals.filter(v =>
              Fancyform.availableOptions.includes(v),
            ),
          })
      }
      multilinevalue = (e) => {
        const {value} = e.target
        const allVals = value
          .split('\n')
          .map(v => v.trim())
          .filter(Boolean)
          this.setState({
            multiline: value,
            commaSeparated: allVals.join(','),
            multiSelect: allVals.filter(v =>
                Fancyform.availableOptions.includes(v),
            ),
          })
      }
      handleMultiSelectChange = (e) => {
        const allVals = Array.from(
            e.target.selectedOptions,
          ).map(o => o.value)
          this.setState({
            multiSelect: allVals,
            multiline: allVals.join('\n'),
            commaSeparated: allVals.join(','),
          })
      }
    render(){
        const {commaSeparated, multiline, multiSelect} = this.state
        return(
            <form>
                <h1>Fancy Form</h1>
                <div className="form-group">
                    <label>comma separated values</label>
                    <input type="text" onChange={this.handalCommaseparated} value={commaSeparated} placeholder="Enter comma separated values"/>
                </div>
                <div className="form-group">
                    <label>Multiline Value</label>
                    <textarea 
                    onChange={this.multilinevalue} 
                    value={multiline}
                    rows={
                        Fancyform.availableOptions
                        .length
                    }
                    placeholder="Enter Multiline Value">

                    </textarea>
                </div>
                <div className="form-group">
                 <label>Multiselect Value</label>
                 <select 
                  multiple
                  value={multiSelect}
                  size={
                    Fancyform.availableOptions
                      .length
                  }
                  onChange={
                    this.handleMultiSelectChange
                  }
                 >
                 {Fancyform.availableOptions.map(
                      optionValue => (
                        <option
                          key={optionValue}
                          value={optionValue}
                        >
                          {optionValue}
                        </option>
                      ),
                    )}
                 </select>
                </div>
            </form>
        )
    }
}
export default Fancyform;