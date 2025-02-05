import { Component } from "react";

class LifeCycleComponent extends Component {
  constructor() {
    super();
  }
  state = { name: "Gauthstate", age: 99 };
  buttonhandler = () => this.setState({ name: "ChangedGauth", age: 98 });
  render() {
    console.log(this.props);
    const { name, age } = this.props;
    return (
      <div>
        LifeCycle
        {this.state.name} @ {this.state.age}
        <button onClick={this.buttonhandler}>ClickHereLifeCycle</button>
      </div>
    );
  }
  componentDidMount() {
    console.log("Initial Render");
  }
  shouldComponentUpdate(newprops, newstate) {
    console.log("shouldComponentUpdate");
    console.log(newprops, newstate);
    return true;
  }
  componentDidUpdate() {
    console.log("Component updated");
  }
  componentWillUnmount() {
    console.log("Component will unmount now");
  }
}
export default LifeCycleComponent;
