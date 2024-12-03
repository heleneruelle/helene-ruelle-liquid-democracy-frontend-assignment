import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, isErrorToggled: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  toggleTitle = () => {
    this.setState((prevState) => ({
      isErrorToggled: !prevState.isErrorToggled,
    }));
  };

  render() {
    if (this.state.hasError) {
      console.log("rhis.oefnpof", this.state.error);
      return (
        <div>
          <h1>Something went wrong</h1>
          <button onClick={this.toggleTitle}>
            {this.state.isErrorToggled
              ? "Hide Error details"
              : "Show Error details"}
          </button>
          {this.state.isErrorToggled && <p>{this.state.error.toString()}</p>}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
