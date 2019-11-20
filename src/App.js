import React,{Component} from 'react';
import './App.css';
import ValidationComponent from './Component/Validation'
import CharCompo from './Component/CharComponent'

class App extends Component{

state = {
    strLength : '',
    count : 0
}  

getInputLength = (event) => {
  this.setState({strLength : event.target.value, count: event.target.value.length});
}

deleteCharhandler = (el) => {
  const temp = [...this.state.strLength];

  //const abc = temp.findIndex(element => {
  //  return element === el;
  // });
  temp.splice(el,1);
  console.log(temp);
  //console.log(newString);
  const newString = temp.join('');
  this.setState({strLength: newString});
}

  render(){

    const charComponent = this.state.strLength.split('').map((el, index)=>{
      return <CharCompo eachLetter = {el} key={index} clicked = {() =>this.deleteCharhandler(index)}/>; 
    });

    return (
      <div className="App">
        <input type='text' onChange={(event) => this.getInputLength(event)} value={this.state.strLength}/>
        <p>{this.state.count}</p>
        <ValidationComponent inputStrLength = {this.state.count}/>
        {charComponent}
      </div>
    );
  }
}

export default App;
