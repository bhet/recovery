import React, { Component } from 'react';

class Mycounter extends Component{
  state = {
    value : this.props.counter.value
  };
  handleIncrement = () =>{
    this.setState({
      value: this.state.value + 1
    })
  }
  render(){
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} className="btn btn-secondary m-2">Increment</button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger">Delete</button>
      </div>
    );
  }
  formatCount(){
    return this.state.value === 0 ? "Zero" : this.state.value
  };
  getBadgeClasses(){
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary"
    return classes;
  }
}

export default Mycounter;
