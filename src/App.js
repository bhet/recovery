import React, { Component } from 'react';
import Navbar from './components/navbar';
import './App.css';
import SSTcounters from './components/SSTcounters';

class App extends Component {
  state = {
    counters: [
      {id: 1, value: 0},
      {id: 2, value: 0},
      {id: 3, value: 0},
      {id: 4, value: 0}
    ]
  };

  handleIncrement = (counter) =>{
    const newcounters = [...this.state.counters];
    const index = newcounters.indexOf(counter);
    newcounters[index] = { ...counter };
    newcounters[index].value++;
    this.setState({counters: newcounters});
  }

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
  render() {
    return (
      <React.Fragment>
        <Navbar totalCounters = {this.state.counters.filter(counter => counter.value > 0).length} />
        <main className="container">
          <SSTcounters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
