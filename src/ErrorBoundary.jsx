import  { Component } from "react";

export class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error) {
    return {hasError: true};
  }
  render() {
    return this.state.hasError ? (
      <div>
        Somethingwent wrong please go back to <a href="/">Home</a>
      </div>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
