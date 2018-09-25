import React, { Component }from 'react';

class Counter1 extends Component{
  state = {
    count: 0,
    tages: ['tag1', 'tag2', 'tag3'],
  }

  renderTags(){
    if(this.state.tags.length === 0) return <p>There are no tags!</p>

    return <ul>{this.state.tags.map((tag, idx) =><li key={idx}>{tag}</li>)}</ul>
  }
  render(){

    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
          { this.state.tags.length === 0 && 'Please create new tag'}
          {this.renderTags()}å
        <ul>
          {this.state.tages.map((tag, idx )=> <li key={idx}>{ tag }</li>)}
        </ul>
      </div>
    );
  }

  getBadgeClasses(){
    let  classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount(){
    const { count } = this.state // here picking the count properties of this.state
    return count === 0 ? 'Zero' : count;
  }
}
