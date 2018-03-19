import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "./styles.css";

class App extends Component {
  constructor(){
	  super();
	  this.state={
		  val: "0",
		  opr: 0,
		  storedVal: ""
	  };
  }
  
  input = (digit) => {
	  this.setState({val: this.state.val==="0" ? String(digit) : this.state.val + digit});
  }
  
  inputDot = () => {
	  if (this.state.val.indexOf('.') == -1){
		this.setState({val: this.state.val + "."});
	  }
  }
  
  inputOp = (opNum) => {
	  this.setState({opr: opNum, storedVal: this.state.val});
	  this.setState({val: "0"});
  }
  
  inputEq = () => {
	  var val2 = parseFloat(this.state.val);
	  var val1 = parseFloat(this.state.storedVal);
	  var eq = 0;
	  if(this.state.opr == 1){eq=val1+val2;}
	  else if(this.state.opr == 2){eq=val1-val2;}
	  else if(this.state.opr == 3){eq=val1*val2;}
	  else if(this.state.opr == 4){eq=val1/val2;}
	  this.setState({val: String(eq)});
	  this.setState({opr:0, storedVal:""});
  }
  
  inputAC = () => {
	  this.setState({val: "0"});
  }
  
  render() {
    return (
	<div>
		<h1>Welcome to the RCalc!</h1>
			<div id="calc">
				<div id="ans">{this.state.val}</div>
				<button class="btn" id="1" onClick={() => this.input(1)}>1</button>
				<button class="btn" id="2" onClick={() => this.input(2)}>2</button>
				<button class="btn" id="3" onClick={() => this.input(3)}>3</button>
				<button class="btn" id="4" onClick={() => this.input(4)}>4</button>
				<button class="btn" id="5" onClick={() => this.input(5)}>5</button>
				<button class="btn" id="6" onClick={() => this.input(6)}>6</button>
				<button class="btn" id="7" onClick={() => this.input(7)}>7</button>
				<button class="btn" id="8" onClick={() => this.input(8)}>8</button>
				<button class="btn" id="9" onClick={() => this.input(9)}>9</button>
				<button class="btn" id="0" onClick={() => this.input(0)}>0</button>
				<button class="btn" id="dot" onClick={() => this.inputDot()}>.</button>
				<button class="btn" id="AC" onClick={() => this.inputAC()}>AC</button><br/>
				<button class="btn" id="plus" onClick={() => this.inputOp(1)}>+</button>
				<button class="btn" id="minus" onClick={() => this.inputOp(2)}>-</button><br/>
				<button class="btn" id="divide" onClick={() => this.inputOp(4)}>/</button>
				<button class="btn" id="times" onClick={() => this.inputOp(3)}>x</button><br/>
				<button class="btn" id="equals" onClick={() => this.inputEq()}>=</button>
			</div>
	</div>
    );
  }
}

export default App;
