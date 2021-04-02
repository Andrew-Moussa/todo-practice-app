import React from "react";

class ListElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
      isSent: false,
      time: 0,
      setIntervalId: null,
    };
    console.log("Constructor executed");
  }

  componentDidMount() {
    console.log("componentDidMount executed");
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: null,
    })
      .then((response) => response.json())
      .then((json) => this.setState({ isSent: true }));

    const id = setInterval(() => {
      console.log("setInterval is called");
      this.setState({ time: this.state.time + 1000 });
      console.log("Time is now", this.state.time);
    }, 1000);

    this.setState({ setIntervalId: id });
  }

  componentDidUpdate() {
    console.log("componentDidUpdate executed");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "Called shouldComponentUpdate",

      nextProps,
      "nextProps",

      this.props,
      "this.props",

      nextState,
      "nextState",

      this.state,
      "this.state"
    );
    if (nextState.time != this.state.time) {
      return false;
    }
    return true;
  }

  componentWillUnmount() {
    alert("THIS WILL BE DELETED FOREVER!");
    clearInterval(this.state.setIntervalId);
    console.log("componentWillUnmount executed");
  }

  render() {
    const { onClick, bgColor, children } = this.props;

    console.log("Rendering!");

    return (
      <li
        style={{ background: this.state.isHovered ? "#e4e4e4" : bgColor }}
        onMouseOver={() => this.setState({ isHovered: true })}
        onMouseOut={() => this.setState({ isHovered: false })}
        onClick={onClick}
      >
        {children}
        {this.state.isSent && " ✓"}{" "}
        {"Running since " + this.state.time + " seconds ago"}
      </li>
    );
  }
}

export default ListElement;
