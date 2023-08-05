import { Component } from "react";

class ErrorBoundry extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false
    }
  }

  render() {
    if (this.state.hasError) {
      return <h1>Ooops. There is an error</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundry;