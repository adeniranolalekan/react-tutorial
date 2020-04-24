import React from "react";

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '',selectionValue:'coconut'}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelectionChange=this.handleSelectionChange.bind(this);
    }
    handleChange(event){
        this.setState({value:event.target.value});
    }
    handleSubmit(event){
        alert('A name was submitted: '+ this.state.value+'\n Your favourite' +
            'flavour is: '+this.state.selectionValue);
        event.preventDefault();
    }
    handleSelectionChange(event){
        this.setState({selectionValue:event.target.value});
    }
 render() {
     return (
         <form onSubmit={this.handleSubmit}>
             <label>
                 Name:
                 <input type="text" value={this.state.value} onChange={this.handleChange}/>
             </label>
             <label>
                 Pick your favourite flavour:
                 <select value={this.state.selectionValue} onChange={this.handleSelectionChange}>
                     <option value="grapefruit">Grapefruit</option>
                     <option value="lime">Lime</option>
                     <option value="coconut">Coconut</option>
                     <option value="mango">Mango</option>
                 </select>
             </label>
             <input type="submit" value="Submit"/>
         </form>
     )
 }
}
export default NameForm