import { Component } from "react";

class PropsClassComponent extends Component {
  constructor() {
    super();
  }
  render() {
    const { name, age, children } = this.props;
    return (
      <div>
        {children} {name}@{age}
      </div>
    );
  }
}
export default PropsClassComponent;
