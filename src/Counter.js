import React from 'react';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: this.props.val
    };
  }
  increment = () => {
    this.setState({
      val: this.state.val + 1
    });
  }
  autoIncrement = () => {
    this.autoCounter = setInterval(this.increment, 500)
  }
  componentWillUnmount() {
    clearInterval(this.autoCounter);
  }
  render() {
    return (
      <div className="counter" onClick={this.increment} onDoubleClick={this.autoIncrement}>
        {this.props.label} - {this.state.val}
      </div>
    );
  }
}
