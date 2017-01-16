import React from 'react';

export default class CreateCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  update = (e) => {
    this.setState({
      label: e.target.value,
      val: 0
    });
  }
  addCounter = () => {
    this.props.onAdd(this.state);
  }
  render() {
    return (
      <div>
        <input type="text" onChange={this.update}/>
        <button onClick={this.addCounter}>Add</button>
        <p>{this.state.label}</p>
      </div>
    );
  }
}
