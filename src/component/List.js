import React from "react";

class Listitem extends React.Component{
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         items: "",
    //     }
    // }
    static allItems = [
        {id: 'a', value: 'apple'},
        {id: 'o', value: 'orange'},
        {id: 'g', value: 'grape'},
        {id: 'p', value: 'pear'},
      ]
      state = {items: []}
      addItem = (e) =>{
        e.preventDefault();
        this.setState(({items}) => ({
            items: [
              ...items,
              Listitem.allItems.find(
                i => !items.includes(i),
              ),
            ],
          }))
      }
      removeItem = (item) =>{
        this.setState(({items}) => ({
            items: items.filter(i => i !== item),
          }))
      }
    render(){
        const {items} = this.state
        return(
            <form>
                <h1>List of Items</h1>
                <div className="form-group">
                <button onClick={this.addItem}>+ Add Items</button>
                {items.map((i, index) => (
                <div className="appand-item">
                     <button
                    onClick={() => this.removeItem(i)}
                  >
                    -
                  </button>
                 <span>{i.value}</span> 
                  <input />
                </div>
              ))}
                </div>
               
            </form>
        )
    }
}
export default Listitem;