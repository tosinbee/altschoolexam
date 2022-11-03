import { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFrom(error) {
    return {
      hasError: true,
    };
  }
  componentDidCatch(error, errorInfo) {
    console.log("Logging", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something is Wrong</h1>;
    }
    return this.props.children;
  }
}
