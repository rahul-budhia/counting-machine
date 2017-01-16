import React, { Component } from 'react';
import './App.css';
import Counter from './Counter';
import CreateCounter from './CreateCounter';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counters: [
        {
          id: 1,
          label: "items",
          val: 0,
          autoIncrement: false
        }
      ]
    };
  }

  addCounter = (counter) => {
    console.log(this.state.counters.length);
    this.setState({
      counters: this.state.counters.concat(
        {
          ...counter,
          id: this.state.counters.length+1,
          autoIncrement: false
        }
      )
    });
  }

  filter = (e) => {
    this.setState({
      filterText: e.target.value
    });
  }
  render () {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Counting Machine</h2>
          <CreateCounter onAdd={this.addCounter} />
        </div>
        <input type="text" className="filter" onChange={this.filter} />
        {
          this.state.counters.filter((counter) =>
            counter.label.match(this.state.filterText) ? true : false
          )
          .map((counter, index) =>
            <Counter key={counter.id} label={counter.label} val={counter.val} />
          )
        }
      </div>
    );
  }
}

export default App;
