import React, { Component } from 'react';

import SSTcounter from './SSTcounter';

class SSTcounters extends Component{


  render(){
    const { onReset , counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button
          onClick={ onReset }
          className="btn btn-primary btn m-2">Reset</button>
        { counters.map(counter =>(
          <SSTcounter

            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}>

          </SSTcounter>
        ))}
      </div>
      );
  }
}

export default SSTcounters;
