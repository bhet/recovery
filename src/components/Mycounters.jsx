import React, { Component } from 'react';
import Mycounter from './Mycounter';
import SSTcounter from './SSTcounter';

class Mycounters extends Component{
  state = {
    counters: [
      {id: 1, value: 0},
      {id: 2, value: 0},
      {id: 3, value: 0},
      {id: 4, value: 0}
    ]
  };

  handleReset = () =>{
    const counters = this.state.counters.map(counter =>{
      counter.value = 0;
      return counter;
    })
    this.setState({counters: counters})
  };

  handleDelete = (counterId) =>{
    const newCounters = this.state.counters.filter(counter => counter.id !== counterId);
    this.setState({counters: newCounters});
  }

  render(){

    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn m-2">Reset</button>
        { this.state.counters.map(counter =>(
          <Mycounter key={counter.id}  onDelete={this.handleDelete} counter={counter}>
            <h4>Counter #{counter.id}</h4>
          </Mycounter>
        ))}
      </div>
      );
  }
}

export default Mycounters;
