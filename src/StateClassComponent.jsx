import { Component } from "react";

class StateClassComponent extends Component {
  constructor() {
    super();
  }
  state = { name: "Timmy", count: 0 };
  age = 55;
  buttonhandler = () => {
    // this.setState({name:"Tommy",count:this.state.count+1}) the value of count could be unpredictable if there are multiple clicks
    this.setState((localstate) => {
      return { name: "Tommy", count: localstate.count + 1 };
    });
  };
  render() {
    return (
      <div>
        <h2>
          {this.state.name}@ {this.state.count}
        </h2>
        <button onClick={this.buttonhandler}>Timmy to Tommy</button>
      </div>
    );
  }
}
export default StateClassComponent;
