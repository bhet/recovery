import React, { Component }from 'react';

class Counter extends Component{
  state = {
    value: this.props.value,
    tags: ['tag1', 'tag2', 'tag3'],
  }

  renderTags(){
    if(this.state.tags.length === 0) return <p>There are no tags!</p>

    return <ul>{this.state.tags.map((tag, idx) =><li key={idx}>{tag}</li>)}</ul>
  }

  handleIncrement = () =>{
    console.log('Increment Clicked');
    this.setState({
      value: this.state.value + 1
    })
  }

  handleDelete = () =>{
    if(this.state.value > 0){
      this.setState({
        value: this.state.value - 1
      })
    }
  }
  // In future tonpass the the id or other info of product simply
  // pass anonymous function in onClick and pass object as argument
  // ()=>{this.handleIncrement(product)}
  render(){

    return (
      <div>
        <h4>{this.props.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
        <button  onClick={this.handleDelete} className="btn btn-warning m-2">Delete</button>
      {this.renderTags()}
      </div>
    );
  }

  formatCount(){
      return this.state.value === 0 ? "Zero" : this.state.value
  }

  getBadgeClasses(){
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes
  }
}

export default Counter;
