import React from 'react';

var bmiValue;

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weightA: null,
            heightA: null,
            bmiRatio: null
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        const target = event.target;
         const name = target.name;
        this.setState({
            [name]: target.value
        });
      }
    
      handleSubmit(event) {
        this.state.bmiRatio = Number(this.state.weightA) / (Number(this.state.heightA) * Number(this.state.heightA));
        this.bmiValue = this.state.bmiRatio;
        
        this.setState(
            {
                bmiRatio: null
            }
        )
        event.preventDefault();
      }
    

    render() {

        return (
            <div className="Page-Center"><a href="#" className="badge badge-primary">Click me!</a>
                Hello {this.props.name} from the Login
                <div>
                    <h1> Know your BMI </h1>
                    <p> Get to know you health</p>
                    <div>
                        <form  onSubmit={this.handleSubmit}>
                            <label> Enter your weight in Kgs: </label>
                            <input type="number" name = "weightA" value={this.state.weightA} onChange={this.handleChange} required min="1" /><br /><br />
                            <label> Enter your height in metres: </label>
                            <input type="number" name="heightA" value={this.state.heightA} onChange={this.handleChange} required min="1"/><br /><br />
                            <input type="submit" value="Get results" />
                        </form>
                    </div>
                    <div>
                        Your BMI is: <span>{this.bmiValue}</span>
                    </div>

                    <div>
                        Your are: <span>Obessed</span>
                    </div>
                </div>
            </div>


        );
    }

}

export default Login;