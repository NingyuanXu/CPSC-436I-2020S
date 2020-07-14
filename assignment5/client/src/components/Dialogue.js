import React from 'react';
import './style.css'; 


class Dialogue extends React.Component {
  render() {

    let dialogue = (
      <div>
        <button onClick= {this.props.onClose}>x</button>
        {this.props.children}
      </div>
      );

      if (this.props.isOpen !== this.props.id || this.props.isOpen === -1) {
        dialogue = null;
      }
      
      return (
        <div className="detailed-view">
              {dialogue}
        </div>
      );
      
  }
}

export default Dialogue;