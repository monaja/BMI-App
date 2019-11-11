import React from 'react';
import { isNumber } from 'util';
import { throwStatement } from '@babel/types';

var bmiValue;
let health;

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weightA: null,
            heightA: null,
            bmiRatio: null,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        if (!isNaN(target.value)) {
            this.setState({
                [name]: target.value
            });

        }
    }

    handleSubmit(event) {
        this.state.bmiRatio = Number(this.state.weightA) / (Number(this.state.heightA) * Number(this.state.heightA));
        this.bmiValue = this.state.bmiRatio.toPrecision(2);
        if (this.bmiValue < 18.5) {
            this.health = "underweight";
        } else if (this.bmiValue >= 18.5 && this.bmiValue <= 24.9) {
            this.health = "healthy";
        } else if (this.bmiValue >= 25 && this.bmiValue <= 29.9) {
            this.health = "overweight";
        } else if (this.bmiValue >= 30 && this.bmiValue <= 39.9) {
            this.health = "Obessed";
        } else {
            this.health = "extreme";
        }


        this.setState(
            {
                bmiRatio: null,
            }
        )
        event.preventDefault();
    }


    render() {

        return (

            <div className="Page-Center">
                <div className="container">
                    <hr/>
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4">
                            <span className="badge badge-pill badge-info"><h1> Know your BMI </h1></span>
                            <h3> Get to know your health</h3>
                        </div>
                        <div className="col-4"></div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4">

                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group font-weight-bold">
                                    <label for="weightLabel ">Enter your weight in Kgs:</label>
                                    <input type="text" className="form-control" id="weightLabel" placeholder="Enter weight" name="weightA" value={this.state.weightA} onChange={this.handleChange} required min="1" />
                                </div>

                                <div className="form-group font-weight-bold">
                                    <label for="heightLabel">Enter your height in metres:</label>
                                    <input type="text" className="form-control" id="heightLabel" placeholder="Enter height" name="heightA" value={this.state.heightA} onChange={this.handleChange} required min="1" />

                                </div>
                                <button type="submit" className="btn btn-primary">Get results</button>
                            </form>
                        </div>
                        <div className="col-4"></div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4">
                            <div>
                                Your BMI is: <span className="">{this.bmiValue}</span>
                            </div>

                            <div>
                                Your are: <span className="">{this.health}</span>
                            </div>
                        </div>
                        <div className="col-4"></div>

                    </div>
                </div>
            </div>


        );
    }

}

export default Login;