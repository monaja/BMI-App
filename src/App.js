import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <h1> Know your BMI </h1>
     <p> Get to know you health</p>
	   	 <div>
		<form>
		<label> Enter your weight in Kgs: </label>
		<input type="text"/><br/><br/>
		<label> Enter your height in metres: </label>
		<input type="text"/><br/><br/>
		<button>Calculate </button>
		</form>
		</div>
		<div>
	Your BMI is: <span>2.4</span>
	</div>
	
	<div>
	Your are: <span>Obessed</span>
	</div>
    </div>
  );
}

export default App;
