import React, { Component } from 'react'

class Mark extends Component {
  
  render() {
    const {data} = this.props;
    console.log(data);
       
    return (
      <div className="Mark">
        <i className="fas fa-ship">
          
        </i>

      </div>
    );
  }
}

export default Mark;