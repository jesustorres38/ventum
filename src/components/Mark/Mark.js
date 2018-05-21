import React, { Component } from 'react'

class Mark extends Component {
  
  render() {
    const {data} = this.props;
    console.log(data);
       
    return (
      <div className="Mark">
        <i className="fas fa-ship">
          <div className='info'>
            <p>{this.props.data.nombre}</p>
            <p>{this.props.data.fecha}</p>
          </div>
        </i>

      </div>
    );
  }
}

export default Mark;